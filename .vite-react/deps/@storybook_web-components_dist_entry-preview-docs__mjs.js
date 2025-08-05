import {
  getCustomElements,
  isValidComponent,
  isValidMetaData
} from "./chunk-SMO3XZSE.js";
import {
  render
} from "./chunk-MWQ4FWF2.js";
import {
  cn,
  gt,
  yn
} from "./chunk-YWMK3EVO.js";
import "./chunk-ICX5P5PU.js";
import "./chunk-SLTNP3TR.js";
import "./chunk-F75JWVM3.js";
import {
  require_client_logger
} from "./chunk-LGYI5DCH.js";
import {
  invariant
} from "./chunk-KDZ7CXOI.js";
import "./chunk-2KX4LUHP.js";
import {
  require_preview_api
} from "./chunk-2VDFVOWA.js";
import {
  __toESM
} from "./chunk-LK32TJAX.js";

// node_modules/@storybook/web-components/dist/entry-preview-docs.mjs
var import_client_logger = __toESM(require_client_logger(), 1);
var import_preview_api = __toESM(require_preview_api(), 1);
function mapItem(item, category) {
  var _a, _b;
  let type;
  switch (category) {
    case "attributes":
    case "properties":
      type = { name: ((_a = item.type) == null ? void 0 : _a.text) || item.type };
      break;
    case "slots":
      type = { name: "string" };
      break;
    default:
      type = { name: "void" };
      break;
  }
  return { name: item.name, required: false, description: item.description, type, table: { category, type: { summary: ((_b = item.type) == null ? void 0 : _b.text) || item.type }, defaultValue: { summary: item.default !== void 0 ? item.default : item.defaultValue } } };
}
function mapEvent(item) {
  let name = item.name.replace(/(-|_|:|\.|\s)+(.)?/g, (_match, _separator, chr) => chr ? chr.toUpperCase() : "").replace(/^([A-Z])/, (match) => match.toLowerCase());
  return name = `on${name.charAt(0).toUpperCase() + name.substr(1)}`, [{ name, action: { name: item.name }, table: { disable: true } }, mapItem(item, "events")];
}
function mapData(data, category) {
  return data && data.filter((item) => item && item.name).reduce((acc, item) => {
    if (item.kind === "method") return acc;
    switch (category) {
      case "events":
        mapEvent(item).forEach((argType) => {
          invariant(argType.name, `${argType} should have a name property.`), acc[argType.name] = argType;
        });
        break;
      default:
        acc[item.name] = mapItem(item, category);
        break;
    }
    return acc;
  }, {});
}
var getMetaDataExperimental = (tagName, customElements) => {
  if (!isValidComponent(tagName) || !isValidMetaData(customElements)) return null;
  let metaData = customElements.tags.find((tag) => tag.name.toUpperCase() === tagName.toUpperCase());
  return metaData || import_client_logger.logger.warn(`Component not found in custom-elements.json: ${tagName}`), metaData;
};
var getMetaDataV1 = (tagName, customElements) => {
  var _a;
  if (!isValidComponent(tagName) || !isValidMetaData(customElements)) return null;
  let metadata;
  return (_a = customElements == null ? void 0 : customElements.modules) == null ? void 0 : _a.forEach((_module) => {
    var _a2;
    (_a2 = _module == null ? void 0 : _module.declarations) == null ? void 0 : _a2.forEach((declaration) => {
      declaration.tagName === tagName && (metadata = declaration);
    });
  }), metadata || import_client_logger.logger.warn(`Component not found in custom-elements.json: ${tagName}`), metadata;
};
var getMetaData = (tagName, manifest) => (manifest == null ? void 0 : manifest.version) === "experimental" ? getMetaDataExperimental(tagName, manifest) : getMetaDataV1(tagName, manifest);
var extractArgTypesFromElements = (tagName, customElements) => {
  let metaData = getMetaData(tagName, customElements);
  return metaData && { ...mapData(metaData.members ?? [], "properties"), ...mapData(metaData.properties ?? [], "properties"), ...mapData(metaData.attributes ?? [], "attributes"), ...mapData(metaData.events ?? [], "events"), ...mapData(metaData.slots ?? [], "slots"), ...mapData(metaData.cssProperties ?? [], "css custom properties"), ...mapData(metaData.cssParts ?? [], "css shadow parts") };
};
var extractArgTypes = (tagName) => {
  let cem = getCustomElements();
  return extractArgTypesFromElements(tagName, cem);
};
var extractComponentDescription = (tagName) => {
  let metaData = getMetaData(tagName, getCustomElements());
  return metaData && metaData.description;
};
var LIT_EXPRESSION_COMMENTS = /<!--\?lit\$[0-9]+\$-->|<!--\??-->/g;
function skipSourceRender(context) {
  var _a;
  let sourceParams = (_a = context == null ? void 0 : context.parameters.docs) == null ? void 0 : _a.source, isArgsStory = context == null ? void 0 : context.parameters.__isArgsStory;
  return (sourceParams == null ? void 0 : sourceParams.type) === gt.DYNAMIC ? false : !isArgsStory || (sourceParams == null ? void 0 : sourceParams.code) || (sourceParams == null ? void 0 : sourceParams.type) === gt.CODE;
}
function sourceDecorator(storyFn, context) {
  var _a, _b;
  let story = storyFn(), renderedForSource = ((_b = (_a = context == null ? void 0 : context.parameters.docs) == null ? void 0 : _a.source) == null ? void 0 : _b.excludeDecorators) ? context.originalStoryFn(context.args, context) : story, source;
  if ((0, import_preview_api.useEffect)(() => {
    let { id, unmappedArgs } = context;
    source && import_preview_api.addons.getChannel().emit(yn, { id, source, args: unmappedArgs });
  }), !skipSourceRender(context)) {
    let container = window.document.createElement("div");
    renderedForSource instanceof DocumentFragment ? render(renderedForSource.cloneNode(true), container) : render(renderedForSource, container), source = container.innerHTML.replace(LIT_EXPRESSION_COMMENTS, "");
  }
  return story;
}
var decorators = [sourceDecorator];
var parameters = { docs: { extractArgTypes, extractComponentDescription, story: { inline: true }, source: { type: gt.DYNAMIC, language: "html" } } };
var argTypesEnhancers = [cn];
export {
  argTypesEnhancers,
  decorators,
  parameters
};
//# sourceMappingURL=@storybook_web-components_dist_entry-preview-docs__mjs.js.map
