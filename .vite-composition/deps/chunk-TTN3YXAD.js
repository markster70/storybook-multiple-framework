import {
  require_isArray
} from "./chunk-VC34E2B7.js";
import {
  require_isObjectLike
} from "./chunk-73765OUR.js";
import {
  require_baseGetTag
} from "./chunk-LPJ6NPXH.js";
import {
  __commonJS
} from "./chunk-LK32TJAX.js";

// node_modules/lodash/isString.js
var require_isString = __commonJS({
  "node_modules/lodash/isString.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isArray = require_isArray();
    var isObjectLike = require_isObjectLike();
    var stringTag = "[object String]";
    function isString(value) {
      return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
    }
    module.exports = isString;
  }
});

export {
  require_isString
};
//# sourceMappingURL=chunk-TTN3YXAD.js.map
