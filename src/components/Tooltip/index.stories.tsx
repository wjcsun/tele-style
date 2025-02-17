import type { Meta, StoryObj } from '@storybook/react';
import {Button} from '../index'
import { useRef, useState } from 'react';
import Tooltip from '.';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'], 
  argTypes: {
    targetRef: {
      table: {
        type: { summary: 'RefObject<HTMLElement> | VirtualElement' },
      },
      description: '精确定位的目标元素',
      control: false
    },
    mode: {
      control: { type: "radio" },
      options: ["light", "dark"],
      description: "定义工具提示的主题",
      defaultValue: "light",
      table: { type: { summary: '"light" | "dark"' } }
    },
    arrowProps: {
      description: '浮动箭头组件的配置和自定义选项',
      table: { type: { summary: '(FloatingArrowProps & { height?: number; padding?: number; }) | undefined' } }
    },
    ArrowIcon: {
      description: '箭头图标的可选自定义组件，替换默认值。',
      table: { type: { summary: 'ComponentType<SVGAttributes<SVGSVGElement>>' } },
    },
     Component: {
      description: '定义Popper的根元素类型，以进行语义自定义',
      table: { type: { summary: 'ElementType' } },
    },
    autoUpdateOnTargetResize: { type: 'boolean', description: '当目标元素大小时，选择加入功能将自动更新Popper的位置。' },
     placement: {
      control: { type: "select" },
      options: ["auto", "auto-start","auto-end","top","right","bottom","left","top-start","top-end","right-start","right-end","bottom-start","bottom-end","left-start","left-end"],
       description: "默认情况下，组件将自动选择最佳位置",
      
      table: { type: { summary: 'auto...' } }
    },
    withArrow: { type: 'boolean', description: '是否显示指向锚元件的箭头。' }
  }
} satisfies Meta<typeof Tooltip>;


export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    targetRef: { current: null },
  },
  render: (args) => {
    const ref = useRef<HTMLDivElement>(null)
    const [Show, setShow] = useState(true)
    return (
       <>
        <Button style={{ margin: '0 auto' }} ref={ref} onClick={() => setShow(!Show)}>
          {Show ? 'Hide' : 'Show'}
        </Button>
        {Show && (
          <Tooltip {...args} targetRef={ref}>
            Hold to record audio. Tap to switch to video.
          </Tooltip>
        )}
      </>
    )
  },
};