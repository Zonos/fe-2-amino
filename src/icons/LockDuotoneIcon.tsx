import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const LockDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ className, color, inlineBlock, secondaryColor, size }, ref) => (
  <IconBase
    ref={ref}
    className={className}
    color={color || 'gray800'}
    inlineBlock={inlineBlock}
    size={size}
    viewBox="0 0 24 24"
  >
    <path
      d="M7.75 9.5A2.75 2.75 0 0 0 5 12.25v5A2.75 2.75 0 0 0 7.75 20h8.5A2.75 2.75 0 0 0 19 17.25v-5a2.75 2.75 0 0 0-2.75-2.75z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M10 6.75c0-.69.56-1.25 1.25-1.25h1.5c.69 0 1.25.56 1.25 1.25V9.5h1.5V6.75A2.75 2.75 0 0 0 12.75 4h-1.5A2.75 2.75 0 0 0 8.5 6.75V9.5H10zm2.75 8a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
      fill="currentColor"
    />
  </IconBase>
));
