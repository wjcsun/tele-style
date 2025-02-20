import { TabsList as TgTabsList, TabsListProps } from "@telegram-apps/telegram-ui";
import React from "react";

export default function TabsList(props: TabsListProps) {
  return <TgTabsList {...props}>{ props.children }</TgTabsList>
}