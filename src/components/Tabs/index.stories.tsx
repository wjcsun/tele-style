import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import {TabsListProps} from "@telegram-apps/telegram-ui";

import TabsList from '.';
import TabsItem from './TabsItem';

const meta = {
  title: 'Components/TabsList',
  component: TabsList,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false
    }
  }
} satisfies Meta<typeof TabsList>;

export default meta;

const labels = [
  {
    label: 'Label1',
    value: 'Label1',
  },
  {
    label: 'Label2',
    value: 'Label2',
  },
  {
    label: 'Label3',
    value: 'Label3',
  },
];

export const Playground: StoryObj<TabsListProps> = {
  render: (args) => {
    const [selected, setSelected] = useState('Label1');
    return (
      <TabsList {...args}>
        {labels.map(({ value, label }, index) => (
          <TabsItem
            key={index}
            selected={selected === value}
            onClick={() => setSelected(value)}
          >
            {label}
          </TabsItem>
        ))}
      </TabsList>
    );
  },
  decorators: [
    (Component) => (
      <div style={{ maxWidth: 500 }}>
        <Component />
      </div>
    ),
  ],
};