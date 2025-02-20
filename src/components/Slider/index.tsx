import { Slider as TgSlider, SliderProps } from "@telegram-apps/telegram-ui";
import React from "react";

export default function Slider(props:SliderProps) {
  return <TgSlider { ...props } />
}