import type { Meta, StoryObj } from '@storybook/react';

import Switch from '.';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    defaultChecked: { type: 'boolean', description: '开关状态' },
    disabled: { type: 'boolean', description: '是否禁用' },
    checked: { type: 'boolean', description: '指定开关状态' }
  }
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultChecked: true
  }
};