import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }), svgr()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.jsx",
    coverage: {
      provider: "istanbul",
      reportsDirectory: "./coverage",
      all: true,
      include: ["src/components/**/*.jsx"],
      exclude: [
        "src/components/**/*.stories.jsx",
        "src/components/**/*.test.jsx",
      ],
      reporter: [["html"], ["text-summary"], ["text"]],
    },
  },
});
