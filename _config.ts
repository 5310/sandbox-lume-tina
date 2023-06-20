import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import esbuild from "lume/plugins/esbuild.ts";

const site = lume();

site.use(jsx());
site.use(esbuild(
  {
    extensions: [".ts", ".js"],
    options: {
      format: "esm",
      minify: true,
      keepNames: true,
      platform: "browser",
      target: "esnext",
      treeShaking: true,
    },
  },
));

export default site;
