import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ChevronUpCircleIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inline, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      inline={inline}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        d="M8.745 12.445a.75.75 0 0 0 1.01 1.11L12 11.514l2.245 2.041a.75.75 0 0 0 1.01-1.11l-2.75-2.5a.75.75 0 0 0-1.01 0l-2.75 2.5Z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-6.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
