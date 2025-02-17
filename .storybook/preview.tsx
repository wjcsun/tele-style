import type { Preview } from "@storybook/react";
import { AppRoot } from '../src/components/index';
import '../src/styles/globals.css'
import React from "react";
const preview: Preview = {
  decorators: [
    (Story) => (
      <AppRoot>
        <Story />
      </AppRoot>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
