import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const TotalLandedCostIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 4.076 8.985 8.9h6.03L12 4.076Zm-1.357-1.98a1.6 1.6 0 0 1 2.714 0l4.098 6.556c.666 1.066-.1 2.448-1.357 2.448H7.902c-1.257 0-2.023-1.382-1.357-2.448l4.098-6.556ZM6 15.1a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8ZM.9 18a5.1 5.1 0 1 1 10.2 0A5.1 5.1 0 0 1 .9 18Zm12-3c0-1.16.94-2.1 2.1-2.1h6c1.16 0 2.1.94 2.1 2.1v6a2.1 2.1 0 0 1-2.1 2.1h-6a2.1 2.1 0 0 1-2.1-2.1v-6Zm2.2.1v5.8h5.8v-5.8h-5.8Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
