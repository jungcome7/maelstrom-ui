import { globalCss } from './stitches.config';
import { normalize } from 'stitches-normalize-css';
import type * as Stitches from '@stitches/react';

const customGlobalStyles: Record<string, Stitches.CSS> = {
  '*': {
    boxSizing: 'border-box',
  },

  body: {
    fontFamily:
      '-apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
  },
};

const globalStyles = globalCss(...normalize, customGlobalStyles);

export default globalStyles;
