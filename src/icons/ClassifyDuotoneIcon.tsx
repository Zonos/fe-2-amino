import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const ClassifyDuotoneIcon = forwardRef<
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
      d="M13.147 4.634c-.467-.95-1.897-.618-1.897.44v4.501a3.751 3.751 0 0 0-2.585 5.39L4.39 18.204c-.764.579-.354 1.797.604 1.797h14.104a1 1 0 0 0 .898-1.441L13.147 4.634Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      clipRule="evenodd"
      d="M9.57 6.656a.75.75 0 0 1-.321 1.01 6 6 0 0 0-2.981 7.112.75.75 0 1 1-1.433.444A7.5 7.5 0 0 1 8.56 6.334a.75.75 0 0 1 1.01.322Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
