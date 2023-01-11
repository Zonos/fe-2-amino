import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BoxesIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.433 5.1v4.378h7.134V5.1H13.1v.678a1.1 1.1 0 0 1-2.2 0V5.1H8.433Zm9.334 4.378V5a2.1 2.1 0 0 0-2.1-2.1H8.333a2.1 2.1 0 0 0-2.1 2.1v4.478H6a2.1 2.1 0 0 0-2.1 2.1V19c0 1.16.94 2.1 2.1 2.1h12a2.1 2.1 0 0 0 2.1-2.1v-7.422a2.1 2.1 0 0 0-2.1-2.1h-.233ZM6.1 11.678V18.9h11.8v-7.222h-4.8v2.1a1.1 1.1 0 0 1-2.2 0v-2.1H6.1Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
