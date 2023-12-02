import { config } from "@keystatic/core";
import { post } from "./src/collections/post";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts: post,
  },
});
