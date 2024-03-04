import { defineConfig } from "vite";
import fs from "fs";
import path from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: getEntries(),
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
});

function getEntries() {
  const entries = {};
  const folders = fs.readdirSync(path.resolve(__dirname, "src"));

  folders.forEach((folder) => {
    const entryPath = `src/${folder}/main.js`;
    if (fs.existsSync(entryPath)) {
      entries[folder] = entryPath;
    }
  });

  return entries;
}

// import { resolve } from "path";
// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";

// const root = resolve(__dirname, "src");
// const ourDir = resolve(__dirname, "dist");

// export default defineConfig({
//   root,
//   plugins: [vue()],
// build:  {
//   outDir,
//   emptyOutDir: true,
//   rollupOptions:{
//     input: {

//     }
//   }
// }
// });
