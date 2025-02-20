import { TabsItem as TgTabsItem, TabsItemProps } from "@telegram-apps/telegram-ui/dist/components/Navigation/TabsList/components/TabsItem/TabsItem";
import React from "react";

export default function TabsItem(props: TabsItemProps) {
  const { children, ...rest } = props
  return <TgTabsItem { ...rest }>
    {children}
  </TgTabsItem>
}