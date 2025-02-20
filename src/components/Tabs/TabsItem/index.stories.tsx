import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import TabsItem from '.';

const meta = {
  title: 'Components/TabsList/TabsItem',
  tags: ['autodocs'],
  component: TabsItem,
} satisfies Meta<typeof TabsItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selected: false,
    children: 'This is a TabsList.Item',
  }
};