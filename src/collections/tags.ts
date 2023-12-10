import { collection, fields } from "@keystatic/core";

export const tags = collection({
  label: "tags",
  slugField: "tag",
  path: "src/content/tags/*",
  schema: {
    tag: fields.slug({ name: { label: "Tag" } }),
  },
});
