import type { Meta, StoryObj } from '@storybook/react';

import Placeholder from '.';

const meta: Meta<typeof Placeholder> = {
  title: 'Components/Placeholder',
  component: Placeholder,
  tags: ['autodocs'], 
  argTypes: {
    children: { 
      table: {
        type: { summary: 'React.ReactNode' },
      },
      control: false,
      description: '视觉内容的元素',
    },
    header: { 
      table: {
        type: { summary: 'React.ReactNode' },
      },
      description: '标题',
    },
    description: { 
      table: {
        type: { summary: 'React.ReactNode' },
      },
      description: '可操作的元素，例如按钮，将其放置在占位符中以进行用户交互',
    }
  }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div>😁</div>,
    header: 'Title',
    description: 'description'
  }
};