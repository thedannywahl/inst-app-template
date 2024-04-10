import type { ThemeOrOverride } from "@instructure/emotion/types/EmotionTypes";

const ThemeOverrides = (isDark: boolean): ThemeOrOverride | undefined => {
  return {
    componentOverrides: {
      "TopNavBar.Layout": {
        desktopInlinePadding: "1.5rem !important",
        breakpoint: "684",
      },
    },
    themeOverrides: {
      canvas: {
        componentOverrides: {
          View: {
            backgroundPrimary: isDark ? "#2D3B45" : "#white",
          },
          "TopNavBar.Layout": {
            desktopBackgroundInverse: "#f5f5f5",
            desktopBottomBorder: "0.0625rem solid!important",
            smallViewportBackgroundInverse: "#F5F5F5",
          },
        },
      },
      "canvas-high-contrast": {
        componentOverrides: {
          View: {
            backgroundPrimary: isDark ? "black" : "white",
          },
          "TopNavBar.Layout": {
            desktopBackground: "#000",
            desktopBottomBorder: "0.0625rem solid!important",
          },
        },
      },
    },
  };
};

export { ThemeOverrides };
