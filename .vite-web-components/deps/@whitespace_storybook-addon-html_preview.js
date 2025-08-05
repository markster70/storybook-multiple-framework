import {
  __commonJS,
  __toESM
} from "./chunk-LK32TJAX.js";

// node_modules/.cache/sb-vite-plugin-externals/@storybook/preview-api.js
var require_preview_api = __commonJS({
  "node_modules/.cache/sb-vite-plugin-externals/@storybook/preview-api.js"(exports, module) {
    module.exports = __STORYBOOK_MODULE_PREVIEW_API__;
  }
});

// node_modules/@whitespace/storybook-addon-html/dist/preview.js
var import_preview_api = __toESM(require_preview_api());
var c = "storybook/html";
var p = { CODE_UPDATE: `${c}/codeUpdate` };
var i = (a, { parameters: { html: t = {} } = {} }) => {
  let f = (0, import_preview_api.useChannel)({});
  return setTimeout(() => {
    let n = t.root || "#storybook-root, #root", s = document.querySelector(n), o = s ? s.innerHTML : `${n} not found.`, { removeEmptyComments: l, removeComments: e, transform: m } = t;
    if (l && (o = o.replace(/<!--\s*-->/g, "")), e === true ? o = o.replace(/<!--[\S\s]*?-->/g, "") : e instanceof RegExp && (o = o.replace(/<!--([\S\s]*?)-->/g, (r, y) => e.test(y) ? "" : r)), typeof m == "function") try {
      o = m(o);
    } catch (r) {
      console.error(r);
    }
    f(p.CODE_UPDATE, { code: o, options: t });
  }, 0), a();
};
var d = { decorators: [i] };
var T = d;
export {
  T as default
};
//# sourceMappingURL=@whitespace_storybook-addon-html_preview.js.map
