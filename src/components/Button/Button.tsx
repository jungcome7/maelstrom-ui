import React, { forwardRef } from 'react';

export type ButtonSize = 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';

export interface ButtonProps {
  href?: string;
  target?: string;
  fullWidth?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children: React.ReactNode;
}

function Button() {
  return <div>adsfaf</div>;
}

export default forwardRef(Button);
