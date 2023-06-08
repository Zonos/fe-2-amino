import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const LinkDuotoneIcon = forwardRef<
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
      d="M12 4.93A5 5 0 0 1 19.071 12l-2.828 2.829-1.414-1.415 2.828-2.828a3 3 0 0 0-4.243-4.243l-2.828 2.829-1.414-1.414L12 4.929Zm-2.828 5.656-2.829 2.828a3 3 0 1 0 4.243 4.243l2.828-2.828 1.415 1.414L12 19.07A5 5 0 0 1 4.929 12l2.828-2.83 1.415 1.415Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M14.828 9.171a1 1 0 0 1 0 1.415l-4.242 4.242a1 1 0 0 1-1.415-1.414l4.243-4.243a1 1 0 0 1 1.414 0Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </IconBase>
));
