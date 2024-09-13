import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vite";
import path from "path";

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
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.jsx"),
      name: "@eversource/storybook",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == "style.css") return "index.css";
          return assetInfo.name;
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
