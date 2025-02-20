import { Checkbox as TgCheckbox, CheckboxProps } from '@telegram-apps/telegram-ui'
import React from "react";
export default function Checkbox(props: CheckboxProps) {
  return <TgCheckbox { ...props }>

  </TgCheckbox>
}