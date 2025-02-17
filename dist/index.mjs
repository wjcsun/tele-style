// src/components/Button/index.tsx
import React2 from "react";
import { Button as TgButton } from "@telegram-apps/telegram-ui";
var Button = ({ children, ...props }) => {
  return /* @__PURE__ */ React2.createElement(
    TgButton,
    {
      ...props
    },
    children
  );
};
var Button_default = Button;

// src/components/AppRoot/index.tsx
import { AppRoot as TgRoot } from "@telegram-apps/telegram-ui";
import * as React3 from "react";
var AppRoot = ({ children }) => {
  return /* @__PURE__ */ React3.createElement(TgRoot, null, children);
};
var AppRoot_default = AppRoot;

// src/components/Text/index.tsx
import { Text as TgText } from "@telegram-apps/telegram-ui";
function Text(props) {
  const { contentKey, color, fontSize, fontFamily, ...rest } = props;
  return /* @__PURE__ */ React.createElement(
    TgText,
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
import { Placeholder as TgPlaceholder } from "@telegram-apps/telegram-ui";
function Placeholder(props) {
  const { children, ...rest } = props;
  return /* @__PURE__ */ React.createElement(
    TgPlaceholder,
    {
      ...rest
    },
    children
  );
}
export {
  AppRoot_default as AppRoot,
  Button_default as Button,
  Placeholder,
  Text
};
//# sourceMappingURL=index.mjs.map