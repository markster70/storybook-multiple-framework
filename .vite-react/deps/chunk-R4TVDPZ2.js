import {
  __export
} from "./chunk-NK6AZ3JN.js";

// node_modules/@storybook/addon-docs/dist/chunk-PRSJUHPQ.mjs
var preview_exports = {};
__export(preview_exports, { parameters: () => parameters });
var excludeTags = Object.entries(globalThis.TAGS_OPTIONS ?? {}).reduce((acc, entry) => {
  let [tag, option] = entry;
  return option.excludeFromDocsStories && (acc[tag] = true), acc;
}, {});
var parameters = { docs: { renderer: async () => {
  let { DocsRenderer } = await import("./DocsRenderer-CFRXHY34-DEKPYE4F.js");
  return new DocsRenderer();
}, stories: { filter: (story) => {
  var _a;
  return (story.tags || []).filter((tag) => excludeTags[tag]).length === 0 && !((_a = story.parameters.docs) == null ? void 0 : _a.disable);
} } } };

export {
  preview_exports,
  parameters
};
//# sourceMappingURL=chunk-R4TVDPZ2.js.map
