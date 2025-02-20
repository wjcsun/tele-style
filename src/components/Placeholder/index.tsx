import { Placeholder as TgPlaceholder, PlaceholderProps } from "@telegram-apps/telegram-ui";
import React from "react";
export default function Placeholder(props: PlaceholderProps) {
  const {children, ...rest } = props
  return (
    <TgPlaceholder
      {...rest}
      >
      {children}
    </TgPlaceholder>
  )
}