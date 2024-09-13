import "../src/index.scss";

/** @type { import('@storybook/react').Preview } */

const customViewports = {
  small: {
    name: "Smallest viewport size that we support",
    styles: {
      width: "390px",
      height: "963px",
    },
  },
  medium: {
    name: "Breakpoint Medium (md)",
    styles: {
      width: "672px",
      height: "963px",
    },
  },
  large: {
    name: "Breakpoint Large (lg)",
    styles: {
      width: "1056px",
      height: "963px",
    },
  },
  xlarge: {
    name: "Breakpoint Extra-Large (xl)",
    styles: {
      width: "1272px",
      height: "963px",
    },
  },
};

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: customViewports,
    },
  },
};

export default preview;
