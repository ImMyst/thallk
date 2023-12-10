import { config } from "@keystatic/core";
import { posts } from "./src/collections/posts";
import { tags } from "./src/collections/tags";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts,
    tags,
  },
});
