import type { Meta, StoryObj } from '@storybook/react';

import Slider from '.';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    multiple: { type: 'boolean', control: false, description: '启用多重thumb模式进行范围选择' },
    value: {
      table: { type: { summary: 'number | [number, number]' } },
      description: '滑块的当前值，期望起始和结束值的元组',
      
    },
    defaultValue: {
      table: { type: { summary: 'number | [number, number]' } },
      description: '滑块的初始默认值'
    },
    onChange: {
      table: {
        type: { summary: '((value: number, event: TouchEvent | ChangeEvent<Element>) => void) | ((value: [number, number], event: TouchEvent | ChangeEvent<Element>) => void)' }
      },
      description: '更改滑块值的回调。'
    },
    min: { type: 'number', description: '最小允许的值。默认为0', control: false },
    max: { type: 'number', description: '最大允许值。默认为100。', control: false },
    step: { type: 'number', description: '每个动作的步骤值。默认为1', control: false },
    disabled: { type: 'boolean', description: '滑块是否禁用', control: false },
    before: { table: { type: { summary: 'ReactNode' } }, description: '展示在滑块前的内容' },
    after: { table: { type: { summary: 'ReactNode' } }, description: '展示在滑块后的内容' }
  }
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};