import type { Meta, StoryObj } from '@storybook/react';

import Progress from '.';

const meta = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    value: {
      description: '进度条的当前值表示为百分比。值应在0到100之间',
      Control: 'number',
      type: 'number',
    },
    duration: {
      description: '几秒内加载完进度条',
      control: 'number',
      type: 'number'
    },
    defaultType: {
      description: '环形进度条或者默认进度条',
      control: 'boolean',
      type: 'boolean'
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      description: '指定圆形进度指标的大小, 只有在default为false的时候生效',
      defaultValue: 'small',
      table: { type: { summary: '"small" | "medium" | "large"' } }
    },
  }
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
  }
};