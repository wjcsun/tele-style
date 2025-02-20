"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/index.ts
var index_exports = {};
__export(index_exports, {
  AppRoot: () => AppRoot_default,
  Button: () => Button_default,
  Checkbox: () => Checkbox,
  Input: () => Input,
  Placeholder: () => Placeholder,
  Progress: () => Progress,
  Slider: () => Slider,
  Switch: () => Switch,
  TabsItem: () => TabsItem,
  TabsList: () => TabsList,
  Text: () => Text,
  Tooltip: () => Tooltip
});
module.exports = __toCommonJS(index_exports);

// src/components/Button/index.tsx
var import_react = __toESM(require("react"));
var import_telegram_ui = require("@telegram-apps/telegram-ui");
var Button = import_react.default.forwardRef(({ children, ...props }, ref) => {
  return /* @__PURE__ */ import_react.default.createElement(import_telegram_ui.Button, { ...props, ref }, children);
});
var Button_default = Button;

// src/components/AppRoot/index.tsx
var import_telegram_ui2 = require("@telegram-apps/telegram-ui");
var React2 = __toESM(require("react"));
var AppRoot = ({ children }) => {
  return /* @__PURE__ */ React2.createElement(import_telegram_ui2.AppRoot, null, children);
};
var AppRoot_default = AppRoot;

// src/components/Text/index.tsx
var import_telegram_ui3 = require("@telegram-apps/telegram-ui");
var import_react2 = __toESM(require("react"));
function Text(props) {
  const { contentKey, color, fontSize, fontFamily, ...rest } = props;
  return /* @__PURE__ */ import_react2.default.createElement(
    import_telegram_ui3.Text,
    {
      ...rest,
      style: {
        color,
        fontSize,
        fontFamily,
        ...rest.style
      }
    },
    contentKey
  );
}

// src/components/Placeholder/index.tsx
var import_telegram_ui4 = require("@telegram-apps/telegram-ui");
var import_react3 = __toESM(require("react"));
function Placeholder(props) {
  const { children, ...rest } = props;
  return /* @__PURE__ */ import_react3.default.createElement(
    import_telegram_ui4.Placeholder,
    {
      ...rest
    },
    children
  );
}

// src/components/Tooltip/index.tsx
var import_telegram_ui5 = require("@telegram-apps/telegram-ui");
var import_react4 = __toESM(require("react"));
function Tooltip(props) {
  return /* @__PURE__ */ import_react4.default.createElement(import_telegram_ui5.Tooltip, { ...props });
}

// src/components/Checkbox/index.tsx
var import_telegram_ui6 = require("@telegram-apps/telegram-ui");
var import_react5 = __toESM(require("react"));
function Checkbox(props) {
  return /* @__PURE__ */ import_react5.default.createElement(import_telegram_ui6.Checkbox, { ...props });
}

// src/components/Progress/index.tsx
var import_telegram_ui7 = require("@telegram-apps/telegram-ui");
var import_react6 = require("react");
var import_react7 = __toESM(require("react"));
function Progress({ value = 100, duration = 0, defaultType = true, ...rest }) {
  const [progressVal, setProgressVal] = (0, import_react6.useState)(0);
  (0, import_react6.useEffect)(() => {
    if (value <= 0 || duration <= 0) {
      setProgressVal(value);
      return;
    }
    const intervalTime = 100;
    const totalSteps = duration * 1e3 / intervalTime;
    const stepSize = value / totalSteps;
    setProgressVal(0);
    const timer = setInterval(() => {
      setProgressVal((prev) => {
        const nextProgress = prev + stepSize;
        if (nextProgress >= value) {
          clearInterval(timer);
          return value;
        }
        return nextProgress;
      });
    }, intervalTime);
    return () => clearInterval(timer);
  }, [value, duration]);
  return /* @__PURE__ */ import_react7.default.createElement("div", null, defaultType ? /* @__PURE__ */ import_react7.default.createElement(import_telegram_ui7.Progress, { value: progressVal, ...rest }) : /* @__PURE__ */ import_react7.default.createElement(import_telegram_ui7.CircularProgress, { progress: progressVal, ...rest }));
}

// src/components/Switch/index.tsx
var import_telegram_ui8 = require("@telegram-apps/telegram-ui");
var import_react8 = __toESM(require("react"));
function Switch(props) {
  return /* @__PURE__ */ import_react8.default.createElement(import_telegram_ui8.Switch, { ...props });
}

// src/components/Input/index.tsx
var import_telegram_ui9 = require("@telegram-apps/telegram-ui");
var import_react9 = __toESM(require("react"));
function Input(props) {
  return /* @__PURE__ */ import_react9.default.createElement(import_telegram_ui9.Input, { ...props });
}

// src/components/Slider/index.tsx
var import_telegram_ui10 = require("@telegram-apps/telegram-ui");
var import_react10 = __toESM(require("react"));
function Slider(props) {
  return /* @__PURE__ */ import_react10.default.createElement(import_telegram_ui10.Slider, { ...props });
}

// src/components/Tabs/index.tsx
var import_telegram_ui11 = require("@telegram-apps/telegram-ui");
var import_react11 = __toESM(require("react"));
function TabsList(props) {
  return /* @__PURE__ */ import_react11.default.createElement(import_telegram_ui11.TabsList, { ...props }, props.children);
}

// src/components/Tabs/TabsItem/index.tsx
var import_TabsItem = require("@telegram-apps/telegram-ui/dist/components/Navigation/TabsList/components/TabsItem/TabsItem");
var import_react12 = __toESM(require("react"));
function TabsItem(props) {
  const { children, ...rest } = props;
  return /* @__PURE__ */ import_react12.default.createElement(import_TabsItem.TabsItem, { ...rest }, children);
}

// src/components/index.ts
var import_styles = require("@telegram-apps/telegram-ui/dist/styles.css");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppRoot,
  Button,
  Checkbox,
  Input,
  Placeholder,
  Progress,
  Slider,
  Switch,
  TabsItem,
  TabsList,
  Text,
  Tooltip
});
//# sourceMappingURL=index.js.map