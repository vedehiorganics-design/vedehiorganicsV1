import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import prerender from "vite-plugin-prerender";

export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: [
        "/",          // Home
      ],
      renderer: "@prerenderer/renderer-react",
      postProcess(renderedRoute) {
        // Ensure clean URLs
        if (renderedRoute.route.endsWith("/")) {
          renderedRoute.html = renderedRoute.html.replace(
            /<a href="\/index.html"/g,
            '<a href="/"'
          );
        }
        return renderedRoute;
      }
    })
  ]
});
