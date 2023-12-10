import { collection, fields } from "@keystatic/core";

export const posts = collection({
  label: "Posts",
  slugField: "title",
  path: "src/content/posts/*",
  format: { contentField: "content" },
  schema: {
    title: fields.slug({ name: { label: "Title" } }),
    image: fields.image({
      label: "Image cover",
      directory: "src/content/posts",
      publicPath: "../../content/posts/",
    }),
    published_at: fields.date({
      label: "Date de publication",
    }),
    tags: fields.array(
      fields.relationship({
        collection: "tags",
        label: "Tags",
        description: "Tags",
        validation: {
          isRequired: true,
        },
      }),
      {
        label: "Tags",
        itemLabel: (item) => item.value || "Tag",
      }
    ),
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
