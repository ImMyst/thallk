import { collection, fields } from "@keystatic/core";

export const post = collection({
  label: "Posts",
  slugField: "title",
  path: "src/content/posts/*",
  format: { contentField: "content" },
  schema: {
    title: fields.slug({ name: { label: "Title" } }),
    image: fields.image({ label: "Image cover" }),
    tags: fields.multiselect({
      label: "Tags",
      options: [
        {
          label: "Featured",
          value: "featured",
        },
      ],
    }),
    content: fields.document({
      label: "Content",
      formatting: true,
      dividers: true,
      links: true,
      images: {
        directory: "src/assets/images/posts",
        publicPath: "../../assets/images/posts/",
      },
    }),
  },
});
