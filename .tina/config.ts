import { defineConfig } from "tinacms/";

export const config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  branch: "main",
  // Relative to the _root_ of your repo
  localContentPath: "../content",
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema: {
    collections: [
      {
        label: "Page Content",
        name: "page",
        path: "content/pages",
        format: "mdx",
        fields: [
          {
            name: "body",
            label: "Main Content",
            type: "rich-text",
            isBody: true,
          },
        ],
      },
    ],
  },
});

export default config;
