import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ChevronUpCircleDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color || 'gray400'}
      inlineBlock={inlineBlock}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M8.695 13.505a.75.75 0 0 1 .05-1.06l2.75-2.5a.75.75 0 0 1 1.01 0l2.75 2.5a.75.75 0 0 1-1.01 1.11L12 11.514l-2.245 2.04a.75.75 0 0 1-1.06-.05"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
