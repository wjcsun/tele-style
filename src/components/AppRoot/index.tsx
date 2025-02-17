"use client";
import { AppRoot as TgRoot } from "@telegram-apps/telegram-ui";
import * as React from 'react';
const AppRoot = ({ children }: { children: React.ReactNode }) => {
 return <TgRoot>
    {children}
  </TgRoot>
}

export default AppRoot