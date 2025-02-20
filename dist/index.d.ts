import * as React from 'react';
import React__default from 'react';
import { ButtonProps, TextProps, PlaceholderProps, TooltipProps, CheckboxProps, ProgressProps, CircularProgressProps, SwitchProps, InputProps, SliderProps, TabsListProps } from '@telegram-apps/telegram-ui';
export { ButtonProps, CheckboxProps, CircularProgressProps, InputProps, PlaceholderProps, ProgressProps, SliderProps, SwitchProps, TabsListProps, TextProps, TooltipProps } from '@telegram-apps/telegram-ui';
import { TabsItemProps } from '@telegram-apps/telegram-ui/dist/components/Navigation/TabsList/components/TabsItem/TabsItem';

declare const Button: React__default.ForwardRefExoticComponent<ButtonProps & React__default.RefAttributes<HTMLButtonElement | HTMLDivElement>>;

declare const AppRoot: ({ children }: {
    children: React.ReactNode;
}) => React.JSX.Element;

interface TgTextProps extends TextProps {
    contentKey?: string | number;
    color?: string;
    fontSize?: number | string;
    fontFamily?: React__default.CSSProperties['fontFamily'];
}
declare function Text(props: TgTextProps): React__default.JSX.Element;

declare function Placeholder(props: PlaceholderProps): React__default.JSX.Element;

declare function Tooltip(props: TooltipProps): React__default.JSX.Element;

declare function Checkbox(props: CheckboxProps): React__default.JSX.Element;

interface ProgressTgProps extends ProgressProps, Omit<CircularProgressProps, keyof ProgressProps> {
    duration?: number;
    defaultType?: boolean;
}
declare function Progress({ value, duration, defaultType, ...rest }: ProgressTgProps): React__default.JSX.Element;

declare function Switch(props: SwitchProps): React__default.JSX.Element;

declare function Input(props: InputProps): React__default.JSX.Element;

declare function Slider(props: SliderProps): React__default.JSX.Element;

declare function TabsList(props: TabsListProps): React__default.JSX.Element;

declare function TabsItem(props: TabsItemProps): React__default.JSX.Element;

export { AppRoot, Button, Checkbox, Input, Placeholder, Progress, type ProgressTgProps, Slider, Switch, TabsItem, TabsList, Text, type TgTextProps, Tooltip };
