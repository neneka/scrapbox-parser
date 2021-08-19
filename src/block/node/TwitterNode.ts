import { createNodeParser } from "./creator";

import type { TwitterNode } from "./type";
import type { NodeCreator } from "./creator";

const twitterRegExp = /\[🐣 .*status\/(\d+)\]/;

const createTwitterNode: NodeCreator<TwitterNode> = (raw) => ({
  type: "twitter",
  raw,
  id: raw.match(twitterRegExp)?.[1] || "20",
});

export const TwitterNodeParser = createNodeParser(createTwitterNode, {
  parseOnNested: false,
  parseOnQuoted: true,
  patterns: [twitterRegExp],
});
