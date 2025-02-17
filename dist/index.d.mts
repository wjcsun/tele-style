import * as React$1 from 'react';
import React__default from 'react';
import { ButtonProps, TextProps, PlaceholderProps } from '@telegram-apps/telegram-ui';

declare const Button: React__default.FC<ButtonProps>;

declare const AppRoot: ({ children }: {
    children: React$1.ReactNode;
}) => React$1.JSX.Element;

interface TgTextProps extends TextProps {
    contentKey?: string | number;
    color?: string;
    fontSize?: number | string;
    fontFamily?: React.CSSProperties['fontFamily'];
}
declare function Text(props: TgTextProps): React$1.JSX.Element;

declare function Placeholder(props: PlaceholderProps): React$1.JSX.Element;

export { AppRoot, Button, Placeholder, Text };
