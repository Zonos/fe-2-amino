import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const DoubleChevronDuotoneIcon = forwardRef<
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
      d="M16.707 14.293a1 1 0 0 1 0 1.414l-3.93 3.93a1.1 1.1 0 0 1-1.555 0l-3.93-3.93a1 1 0 1 1 1.415-1.414L12 17.586l3.293-3.293a1 1 0 0 1 1.414 0Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M16.707 9.707a1 1 0 0 1-1.414 0L12 6.414 8.707 9.707a1 1 0 1 1-1.414-1.414l3.93-3.93a1.1 1.1 0 0 1 1.555 0l3.93 3.93a1 1 0 0 1 0 1.414Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
