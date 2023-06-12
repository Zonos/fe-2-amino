import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ArrowUpIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M7.222 9.778a1.1 1.1 0 0 1 0-1.556l3.646-3.646a1.6 1.6 0 0 1 2.263 0l3.647 3.646a1.1 1.1 0 1 1-1.556 1.556L13.1 7.656V19a1.1 1.1 0 0 1-2.2 0V7.656L8.778 9.778a1.1 1.1 0 0 1-1.556 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
