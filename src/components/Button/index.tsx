
import React from "react";

import { Button as TgButton, ButtonProps } from '@telegram-apps/telegram-ui';


const Button = React.forwardRef<HTMLButtonElement | HTMLDivElement, ButtonProps>(({ children, ...props }, ref) => {
  return (
    <TgButton {...props} ref={ref}>
      {children}
    </TgButton>
  );
});
export default Button;
