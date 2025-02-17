import { Checkbox as TgCheckbox, CheckboxProps } from '@telegram-apps/telegram-ui'
import React from "react";
export default function Checkbox(props: CheckboxProps) {
  return <TgCheckbox { ...props } style={{ '--tgui--link_color': '#0f0f', background: 'red' } as React.CSSProperties} >

  </TgCheckbox>
}