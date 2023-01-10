import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LaptopIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M2.9 6A3.1 3.1 0 0 1 6 2.9h12A3.1 3.1 0 0 1 21.1 6v8.934a2.1 2.1 0 0 1 1.656 2.575l-.31 1.243a3.1 3.1 0 0 1-3.008 2.348H4.561a3.1 3.1 0 0 1-3.007-2.348l-.31-1.243A2.1 2.1 0 0 1 2.9 14.934V6Zm2.2 8.9h13.8V6a.9.9 0 0 0-.9-.9H6a.9.9 0 0 0-.9.9v8.9Zm-1.691 2.2.28 1.118c.1.4.46.682.872.682h14.877a.9.9 0 0 0 .873-.682l.28-1.118H3.41Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
