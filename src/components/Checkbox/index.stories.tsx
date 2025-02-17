import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from '.';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    defaultChecked: { type: 'boolean' },
    indeterminate: { type: 'boolean', description: '不确定的图标显示复选框，而不是检查或未选中。' }
  }
} satisfies Meta<typeof Checkbox>;


export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    indeterminate: false,
    defaultChecked: true,
  },
};