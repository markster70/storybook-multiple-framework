import {
  entry_preview_exports,
  renderToCanvas
} from "./chunk-OLJOZ7UV.js";
import {
  entry_preview_docs_exports
} from "./chunk-73NEU7Q5.js";
import "./chunk-TXDJUYLU.js";
import {
  require_react
} from "./chunk-N4N5IM6X.js";
import "./chunk-YWMK3EVO.js";
import "./chunk-ICX5P5PU.js";
import "./chunk-DMXPIZV6.js";
import {
  L
} from "./chunk-VJV3DEDQ.js";
import "./chunk-SLTNP3TR.js";
import "./chunk-LGYI5DCH.js";
import {
  require_global
} from "./chunk-2KX4LUHP.js";
import {
  require_preview_api
} from "./chunk-2VDFVOWA.js";
import {
  __toESM
} from "./chunk-LK32TJAX.js";

// node_modules/@storybook/react/dist/chunk-ZGTCCPPZ.mjs
function __definePreview(preview) {
  return L({ ...preview, addons: [entry_preview_exports, entry_preview_docs_exports, ...preview.addons ?? []] });
}

// node_modules/@storybook/react/dist/index.mjs
var import_global = __toESM(require_global(), 1);
var React = __toESM(require_react(), 1);
var import_preview_api = __toESM(require_preview_api(), 1);
var { window: globalWindow } = import_global.global;
globalWindow && (globalWindow.STORYBOOK_ENV = "react");
function setProjectAnnotations(projectAnnotations) {
  return (0, import_preview_api.setDefaultProjectAnnotations)(INTERNAL_DEFAULT_PROJECT_ANNOTATIONS), (0, import_preview_api.setProjectAnnotations)(projectAnnotations);
}
var INTERNAL_DEFAULT_PROJECT_ANNOTATIONS = { ...entry_preview_exports, renderToCanvas: async (renderContext, canvasElement) => {
  if (renderContext.storyContext.testingLibraryRender == null) return renderToCanvas(renderContext, canvasElement);
  let { storyContext: { context, unboundStoryFn: Story, testingLibraryRender: render } } = renderContext, { unmount } = render(React.createElement(Story, { ...context }), { container: context.canvasElement });
  return unmount;
} };
function composeStory(story, componentAnnotations, projectAnnotations, exportsName) {
  return (0, import_preview_api.composeStory)(story, componentAnnotations, projectAnnotations, globalThis.globalProjectAnnotations ?? INTERNAL_DEFAULT_PROJECT_ANNOTATIONS, exportsName);
}
function composeStories(csfExports, projectAnnotations) {
  return (0, import_preview_api.composeStories)(csfExports, projectAnnotations, composeStory);
}
var _a;
typeof module < "u" && ((_a = module == null ? void 0 : module.hot) == null ? void 0 : _a.decline());
export {
  INTERNAL_DEFAULT_PROJECT_ANNOTATIONS,
  __definePreview,
  composeStories,
  composeStory,
  setProjectAnnotations
};
//# sourceMappingURL=@storybook_react.js.map
