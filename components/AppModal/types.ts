import type { Modal } from "@instructure/ui";
import type { ComponentProps } from "react";
import type { Content } from "types";

export type ModalProps =
  {
    modal:
    | (Omit<ComponentProps<typeof Modal>, "children" | "label"> & {
      label?: string;
    })
    | undefined;
    header?: ComponentProps<typeof Modal.Header>;
    body?: ComponentProps<typeof Modal.Body>;
    footer?: ComponentProps<typeof Modal.Footer>;
  }
  | undefined;

export type ShowModal = (
  content: Content,
  header?: string | undefined,
  footer?: string | undefined,
  props?: ModalProps,
) => void;
