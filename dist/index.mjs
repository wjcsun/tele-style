// src/components/Button/index.tsx
import React from "react";
import { Button as TgButton } from "@telegram-apps/telegram-ui";
var Button = React.forwardRef(({ children, ...props }, ref) => {
  return /* @__PURE__ */ React.createElement(TgButton, { ...props, ref }, children);
});
var Button_default = Button;

// src/components/AppRoot/index.tsx
import { AppRoot as TgRoot } from "@telegram-apps/telegram-ui";
import * as React2 from "react";
var AppRoot = ({ children }) => {
  return /* @__PURE__ */ React2.createElement(TgRoot, null, children);
};
var AppRoot_default = AppRoot;

// src/components/Text/index.tsx
import { Text as TgText } from "@telegram-apps/telegram-ui";
import React3 from "react";
function Text(props) {
  const { contentKey, color, fontSize, fontFamily, ...rest } = props;
  return /* @__PURE__ */ React3.createElement(
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
import React4 from "react";
function Placeholder(props) {
  const { children, ...rest } = props;
  return /* @__PURE__ */ React4.createElement(
    TgPlaceholder,
    {
      ...rest
    },
    children
  );
}

// src/components/Tooltip/index.tsx
import { Tooltip as TgTooltip } from "@telegram-apps/telegram-ui";
import React5 from "react";
function Tooltip(props) {
  return /* @__PURE__ */ React5.createElement(TgTooltip, { ...props });
}

// src/components/Checkbox/index.tsx
import { Checkbox as TgCheckbox } from "@telegram-apps/telegram-ui";
import React6 from "react";
function Checkbox(props) {
  return /* @__PURE__ */ React6.createElement(TgCheckbox, { ...props });
}

// src/components/Progress/index.tsx
import { Progress as TgProgress, CircularProgress } from "@telegram-apps/telegram-ui";
import { useEffect, useState } from "react";
import React7 from "react";
function Progress({ value = 100, duration = 0, defaultType = true, ...rest }) {
  const [progressVal, setProgressVal] = useState(0);
  useEffect(() => {
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
  return /* @__PURE__ */ React7.createElement("div", null, defaultType ? /* @__PURE__ */ React7.createElement(TgProgress, { value: progressVal, ...rest }) : /* @__PURE__ */ React7.createElement(CircularProgress, { progress: progressVal, ...rest }));
}

// src/components/Switch/index.tsx
import { Switch as TgSwipch } from "@telegram-apps/telegram-ui";
import React8 from "react";
function Switch(props) {
  return /* @__PURE__ */ React8.createElement(TgSwipch, { ...props });
}

// src/components/Input/index.tsx
import { Input as TgInput } from "@telegram-apps/telegram-ui";
import React9 from "react";
function Input(props) {
  return /* @__PURE__ */ React9.createElement(TgInput, { ...props });
}

// src/components/Slider/index.tsx
import { Slider as TgSlider } from "@telegram-apps/telegram-ui";
import React10 from "react";
function Slider(props) {
  return /* @__PURE__ */ React10.createElement(TgSlider, { ...props });
}

// src/components/Tabs/index.tsx
import { TabsList as TgTabsList } from "@telegram-apps/telegram-ui";
import React11 from "react";
function TabsList(props) {
  return /* @__PURE__ */ React11.createElement(TgTabsList, { ...props }, props.children);
}

// src/components/Tabs/TabsItem/index.tsx
import { TabsItem as TgTabsItem } from "@telegram-apps/telegram-ui/dist/components/Navigation/TabsList/components/TabsItem/TabsItem";
import React12 from "react";
function TabsItem(props) {
  const { children, ...rest } = props;
  return /* @__PURE__ */ React12.createElement(TgTabsItem, { ...rest }, children);
}

// src/components/index.ts
import "@telegram-apps/telegram-ui/dist/styles.css";
export {
  AppRoot_default as AppRoot,
  Button_default as Button,
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
};
//# sourceMappingURL=index.mjs.map