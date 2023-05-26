import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const EditDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ size, color, className, secondaryColor }, ref) => (
  <IconBase
    ref={ref}
    size={size}
    color={color || 'gray800'}
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      data-is-secondary-color="true"
      fillRule="evenodd"
      d="m13.982 5.458 4.414 4.415-8.414 8.414-4.415-4.414 8.415-8.415Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="m5.567 13.873-.9.9a3 3 0 0 0-.79 1.394l-.825 3.3a1.1 1.1 0 0 0 1.334 1.335l3.3-.825a3 3 0 0 0 1.394-.79l.901-.9-4.414-4.414Zm8.414-8.415 4.415 4.414 1.586-1.586a2 2 0 0 0 0-2.828l-1.586-1.586a2 2 0 0 0-2.829 0l-1.586 1.586Z"
    />
  </IconBase>
));
