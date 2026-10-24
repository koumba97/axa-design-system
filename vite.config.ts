import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
    publicDir: false,
    build: {
        lib: {
            entry: resolve(import.meta.dirname, "src/index.ts"),
            formats: ["es"],
            fileName: "index",
            cssFileName: "style",
        },
    },
});
