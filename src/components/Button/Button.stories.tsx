import { Meta, StoryObj } from '@storybook/react';
import Button from '.';
import React from 'react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button', 
  component: Button,
  tags: ['autodocs'], 
  argTypes: {
    children: { control: 'text', description: '按钮内容' },
    disabled: { control: 'boolean', type:'boolean', description: '禁用按钮' },
    loading: { control: 'boolean', type: 'boolean', description: 'loading' },
    stretched: { control: 'boolean', type: 'boolean', description: '按钮是否横向填满容器' },
    Component: {
      table: {
        type: { summary: 'ElementType' },
        defaultValue: { summary: 'button' },
        control: false,
        description: '在按钮文本之前插入一个组件，通常是一个图标'
      },
    },
    before: {
      table: {
        type: { summary: 'React.ReactNode' },
      },
      control: false,
      description: '在按钮文本之前插入一个组件，通常是一个图标'
    },
    after: {
      table: {
        type: { summary: 'React.ReactNode' },
      },
      control: false, description: '在按钮文本后插入组件'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
  decorators: [(StoryComponent) => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 180,
      height: 100,
      margin: '0 auto'
    }}>
      <StoryComponent />
    </div>
  )],
};

export const Before: Story = {
  args: {
    children: 'Telegram',
    before: <div>😀</div>
  }
};

export const Loading: Story = {
  args: {
    children: 'Button',
    loading: true
  }
};

export const Link: Story = {
  args: {
    children: 'Link',
    Component: 'a',
    href: 'https://tgui.xelene.me/',
    target: '_blank'
  },
 
};


