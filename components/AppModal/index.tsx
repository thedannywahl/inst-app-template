import { useContexts } from "@/app/context";
import { CloseButton, Heading, Modal } from "@instructure/ui";

/**
 * Function to render the application modal.
 */
function LayoutAppModal(): JSX.Element {
  const { Modal: AppModal } = useContexts();

  /**
   * Function to handle the click event of the close button.
   */
  const hideModal = () => {
    AppModal.hide();
  };

  const renderCloseButton = () => {
    return (
      <CloseButton
        placement="end"
        offset="small"
        onClick={hideModal}
        screenReaderLabel="Close"
      />
    );
  };

  const body: JSX.Element = (
    <Modal.Body {...AppModal?.props?.body}>{AppModal.body}</Modal.Body>
  );

  const header: JSX.Element | null = AppModal.header ? (
    <Modal.Header {...AppModal?.props?.header}>
      {renderCloseButton()}
      <Heading>{AppModal.header}</Heading>
    </Modal.Header>
  ) : null;

  const footer: JSX.Element | null = AppModal.footer ? (
    <Modal.Footer {...AppModal?.props?.footer}>{AppModal.footer}</Modal.Footer>
  ) : null;

  return (
    <Modal
      open={AppModal.isOpen}
      label={AppModal?.props?.modal?.label || "App Modal"}
      onDismiss={hideModal}
      shouldCloseOnDocumentClick
      {...AppModal?.props?.modal}
    >
      {header}
      {body}
      {footer}
    </Modal>
  );
}

export default LayoutAppModal;
