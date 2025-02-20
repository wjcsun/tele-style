import { Text as TgText, TextProps } from "@telegram-apps/telegram-ui";
import React from "react";
export interface TgTextProps extends TextProps {
  contentKey?: string | number,
  color?: string,
  fontSize?: number | string,
  fontFamily?: React.CSSProperties['fontFamily']
}

export default function Text(props: TgTextProps) {
  const { contentKey, color, fontSize, fontFamily, ...rest } = props
  return (
    <TgText
      {...rest}
      style={{
        color,
        fontSize,
        fontFamily,
        ...rest.style
      }}>
      {contentKey}
    </TgText>
  )
}