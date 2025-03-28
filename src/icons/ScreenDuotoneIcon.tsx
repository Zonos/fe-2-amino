import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const ScreenDuotoneIcon = forwardRef<
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
      d="M5.728 4.345C5.108 3.685 4 4.125 4 5.03V12a8 8 0 1 0 16 0V5.03c0-.905-1.107-1.345-1.728-.685l-4.766 5.06a3 3 0 0 0-3.012 0z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M9.524 6.21a.75.75 0 0 1 .51-.93 7.03 7.03 0 0 1 3.933 0 .75.75 0 1 1-.42 1.44 5.53 5.53 0 0 0-3.093 0 .75.75 0 0 1-.93-.51"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
