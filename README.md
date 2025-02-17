# Tele-Style

Tele-Style 是基于 Telegram UI 进行二次封装的 React 组件库，旨在提供更加便捷、美观、符合 Telegram 生态的 UI 组件，方便在 Next.js 和 React 项目中快速集成。

## 🚀 特性
- 📱 **完全适配 Telegram Web App**，支持 `@telegram-apps/sdk`
- 🎨 **优化样式**，更贴合 Telegram 设计风格
- ⚛️ **支持 React 18**，兼容 Next.js
- ⚡ **轻量高效**，按需加载

## 📦 安装

使用 `npm` 安装：

```sh
npm install tele-style
```

或者使用 `pnpm` 安装：

```sh
pnpm add tele-style
```

## 🔧 使用示例

### **基础使用**
```tsx
import React from "react";
import { Button } from "tele-style";

export default function Example() {
  return <Button onClick={() => alert("Hello Telegram!")}>点击我</Button>;
}
```

### **在 Next.js 中使用**
如果你的项目是 Next.js，可以直接在 `pages` 或 `app` 目录中引入组件：

```tsx
import { Button } from "tele-style";

export default function Home() {
  return (
    <div>
      <h1>欢迎使用 Tele-Style</h1>
      <Button>开始使用</Button>
    </div>
  );
}
```

## 📚 组件列表
目前支持以下组件：

- `Button` 按钮
- `Text` 文本
- `Tooltip` 轻提示
- 更多组件开发中...

## 🎨 自定义样式
Tele-Style 默认使用 Telegram 设计规范，你可以通过 `className` 或 `style` 自定义组件样式。

```tsx
<Button className="custom-button">自定义按钮</Button>
```