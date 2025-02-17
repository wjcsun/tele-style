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
  Placeholder: () => Placeholder,
  Text: () => Text
});
module.exports = __toCommonJS(index_exports);

// src/components/Button/index.tsx
var import_react = __toESM(require("react"));
var import_telegram_ui = require("@telegram-apps/telegram-ui");
var Button = ({ children, ...props }) => {
  return /* @__PURE__ */ import_react.default.createElement(
    import_telegram_ui.Button,
    {
      ...props
    },
    children
  );
};
var Button_default = Button;

// src/components/AppRoot/index.tsx
var import_telegram_ui2 = require("@telegram-apps/telegram-ui");
var React3 = __toESM(require("react"));
var AppRoot = ({ children }) => {
  return /* @__PURE__ */ React3.createElement(import_telegram_ui2.AppRoot, null, children);
};
var AppRoot_default = AppRoot;

// src/components/Text/index.tsx
var import_telegram_ui3 = require("@telegram-apps/telegram-ui");
function Text(props) {
  const { contentKey, color, fontSize, fontFamily, ...rest } = props;
  return /* @__PURE__ */ React.createElement(
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
function Placeholder(props) {
  const { children, ...rest } = props;
  return /* @__PURE__ */ React.createElement(
    import_telegram_ui4.Placeholder,
    {
      ...rest
    },
    children
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppRoot,
  Button,
  Placeholder,
  Text
});
//# sourceMappingURL=index.js.map