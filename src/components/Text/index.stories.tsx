import type { Meta, StoryObj } from '@storybook/react';

import Text from '.';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'], 
  argTypes: {
    caps: { description: '大小写切换', type: 'boolean', control: 'boolean' },
    contentKey: {
      table: {
        type: { summary: 'string | number' },
      },
      description: '文案内容'
    },
    fontSize: {
      table: {
        type: { summary: 'string | number' },
      },
      description: '字体大小'
    },
    fontFamily: {
      control: false,
      description: '字体'
    }
  }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    contentKey: 'tele-style',
    color: "#000000",
    fontSize: 24,
    fontFamily: ''
  },
};