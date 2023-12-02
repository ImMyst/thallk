// @ts-ignore
import { defineCollection, z, type CollectionEntry } from "astro:content";

const posts = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // image: image(),
      tags: z.array(z.string()),
    }),
});

export type Post = CollectionEntry<"posts">;

export const collections = { posts };
