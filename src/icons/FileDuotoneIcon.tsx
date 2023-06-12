import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const FileDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ className, color, secondaryColor, size }, ref) => (
  <IconBase
    ref={ref}
    className={className}
    color={color || 'gray800'}
    size={size}
    viewBox="0 0 24 24"
  >
    <path
      clipRule="evenodd"
      d="M8.053 2.817A3 3 0 0 1 10.11 2H17a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7.93a3 3 0 0 1 .943-2.183l3.11-2.93Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M8.053 2.817A3 3 0 0 1 10.11 2h.09a1.1 1.1 0 0 1 1.1 1.1v2.785a3 3 0 0 1-3 3H5.085C4.485 8.885 4 8.399 4 7.8a2.7 2.7 0 0 1 .847-1.963l3.206-3.02Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
