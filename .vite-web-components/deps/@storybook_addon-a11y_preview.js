import {
  expect3
} from "./chunk-UT42XT57.js";
import "./chunk-LGYI5DCH.js";
import "./chunk-26DABYYD.js";
import {
  require_global
} from "./chunk-2KX4LUHP.js";
import {
  require_preview_api
} from "./chunk-2VDFVOWA.js";
import {
  __toESM
} from "./chunk-LK32TJAX.js";

// node_modules/@storybook/addon-a11y/dist/preview.mjs
var import_preview_api = __toESM(require_preview_api(), 1);
var import_global = __toESM(require_global(), 1);
var ADDON_ID = "storybook/a11y";
var RESULT = `${ADDON_ID}/result`;
var REQUEST = `${ADDON_ID}/request`;
var RUNNING = `${ADDON_ID}/running`;
var ERROR = `${ADDON_ID}/error`;
var MANUAL = `${ADDON_ID}/manual`;
var EVENTS = { RESULT, REQUEST, RUNNING, ERROR, MANUAL };
var { document } = import_global.global;
var channel = import_preview_api.addons.getChannel();
var defaultParameters = { config: {}, options: {} };
var disabledRules = ["region"];
var queue = [];
var isRunning = false;
var runNext = async () => {
  if (queue.length === 0) {
    isRunning = false;
    return;
  }
  isRunning = true;
  let next = queue.shift();
  next && await next(), runNext();
};
var run = async (input = defaultParameters) => {
  let { default: axe } = await import("./axe-core.js"), { element = "body", config = {}, options = {} } = input, htmlElement = document.querySelector(element) ?? document.body;
  if (!htmlElement) return;
  axe.reset();
  let configWithDefault = { ...config, rules: [...disabledRules.map((id) => ({ id, enabled: false })), ...(config == null ? void 0 : config.rules) ?? []] };
  return axe.configure(configWithDefault), new Promise((resolve, reject) => {
    let task = async () => {
      try {
        let result = await axe.run(htmlElement, options);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    };
    queue.push(task), isRunning || runNext();
  });
};
channel.on(EVENTS.MANUAL, async (storyId, input = defaultParameters) => {
  try {
    let result = await run(input), resultJson = JSON.parse(JSON.stringify(result));
    channel.emit(EVENTS.RESULT, resultJson, storyId);
  } catch (error) {
    channel.emit(EVENTS.ERROR, error);
  }
});
function getIsVitestStandaloneRun() {
  try {
    return import.meta.env.VITEST_STORYBOOK === "false";
  } catch {
    return false;
  }
}
var vitestMatchersExtended = false;
var experimental_afterEach = async ({ reporting, parameters: parameters2, globals }) => {
  let a11yParameter = parameters2.a11y, a11yGlobals = globals.a11y, shouldRunEnvironmentIndependent = (a11yParameter == null ? void 0 : a11yParameter.manual) !== true && (a11yParameter == null ? void 0 : a11yParameter.disable) !== true && (a11yParameter == null ? void 0 : a11yParameter.test) !== "off" && (a11yGlobals == null ? void 0 : a11yGlobals.manual) !== true, getMode = () => {
    switch (a11yParameter == null ? void 0 : a11yParameter.test) {
      case "todo":
        return "warning";
      case "error":
      default:
        return "failed";
    }
  };
  if (shouldRunEnvironmentIndependent) try {
    let result = await run(a11yParameter);
    if (result) {
      let hasViolations = ((result == null ? void 0 : result.violations.length) ?? 0) > 0;
      if (reporting.addReport({ type: "a11y", version: 1, result, status: hasViolations ? getMode() : "passed" }), getIsVitestStandaloneRun() && hasViolations && getMode() === "failed") {
        if (!vitestMatchersExtended) {
          let { toHaveNoViolations } = await import("./matchers-7Z3WT2CE-YBG5V4N7.js");
          expect3.extend({ toHaveNoViolations }), vitestMatchersExtended = true;
        }
        expect3(result).toHaveNoViolations();
      }
    }
  } catch (e) {
    if (reporting.addReport({ type: "a11y", version: 1, result: { error: e }, status: "failed" }), getIsVitestStandaloneRun()) throw e;
  }
};
var initialGlobals = { a11y: { manual: false } };
var parameters = { a11y: { test: "todo" } };
export {
  experimental_afterEach,
  initialGlobals,
  parameters
};
//# sourceMappingURL=@storybook_addon-a11y_preview.js.map
