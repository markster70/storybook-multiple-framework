import {
  entry_preview_exports
} from "./chunk-MWQ4FWF2.js";
import {
  require_global
} from "./chunk-2KX4LUHP.js";
import {
  require_preview_api
} from "./chunk-2VDFVOWA.js";
import {
  __toESM
} from "./chunk-LK32TJAX.js";

// node_modules/@storybook/web-components/dist/chunk-L4EGOTBX.mjs
var import_global = __toESM(require_global(), 1);
var import_preview_api = __toESM(require_preview_api(), 1);
var { window: globalWindow } = import_global.global;
globalWindow.STORYBOOK_ENV = "web-components";
function isValidComponent(tagName) {
  if (!tagName) return false;
  if (typeof tagName == "string") return true;
  throw new Error('Provided component needs to be a string. e.g. component: "my-element"');
}
function isValidMetaData(customElements) {
  if (!customElements) return false;
  if (customElements.tags && Array.isArray(customElements.tags) || customElements.modules && Array.isArray(customElements.modules)) return true;
  throw new Error(`You need to setup valid meta data in your config.js via setCustomElements().
    See the readme of addon-docs for web components for more details.`);
}
function setCustomElements(customElements) {
  import_global.global.__STORYBOOK_CUSTOM_ELEMENTS__ = customElements;
}
function setCustomElementsManifest(customElements) {
  import_global.global.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__ = customElements;
}
function getCustomElements() {
  return import_global.global.__STORYBOOK_CUSTOM_ELEMENTS__ || import_global.global.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__;
}
function setProjectAnnotations(projectAnnotations) {
  return (0, import_preview_api.setDefaultProjectAnnotations)(entry_preview_exports), (0, import_preview_api.setProjectAnnotations)(projectAnnotations);
}
var { window, EventSource } = import_global.global;
var _a;
typeof module < "u" && ((_a = module == null ? void 0 : module.hot) == null ? void 0 : _a.decline) && (module.hot.decline(), new EventSource("__webpack_hmr").addEventListener("message", function(event) {
  try {
    let { action } = JSON.parse(event.data);
    action === "built" && window.location.reload();
  } catch {
  }
}));

export {
  isValidComponent,
  isValidMetaData,
  setCustomElements,
  setCustomElementsManifest,
  getCustomElements,
  setProjectAnnotations
};
//# sourceMappingURL=chunk-SMO3XZSE.js.map
