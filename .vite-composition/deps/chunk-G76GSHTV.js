import {
  require_isObjectLike
} from "./chunk-73765OUR.js";
import {
  require_baseGetTag
} from "./chunk-LPJ6NPXH.js";
import {
  __commonJS
} from "./chunk-LK32TJAX.js";

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

export {
  require_isSymbol
};
//# sourceMappingURL=chunk-G76GSHTV.js.map
