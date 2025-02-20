import type { Meta, StoryObj } from '@storybook/react';
import {useState } from 'react'
import Input from '.';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    value: { type: 'string', description: '输入框value' },
    status: {
      control: false,
      defaultValue: 'default',
      table: { type: { summary: '"default" | "errpr" | "focused"' } }
    },
    header: { type: 'string', description: '输入框标题' },
    before: {
      table: { 
        type: { summary: 'ReactNode' }
      },
      contorl: false,
      description: '显示在输入框前方位置',
    },
    after: {
      table: { 
        type: { summary: 'ReactNode' }
      },
      contorl: false,
      description: '显示在输入框后方位置',
    },
    disabled: { type: 'boolean', description: '是否禁用' }
  },
  render: () => {
    const [value, setValue] = useState('')
    return <Input value={value} header='title' after={<div>icon</div>} onChange={(e) => setValue(e.target.value)}/>
  }
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {

  },
   decorators: [(StoryComponent) => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 580,
      height: 300,
      margin: '0 auto'
    }}>
      <StoryComponent />
    </div>
  )],
};