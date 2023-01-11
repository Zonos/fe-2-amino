import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BookmarkSubtractIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M7 4.1a.9.9 0 0 0-.9.9v14a.9.9 0 0 0 .9.9h.171a.9.9 0 0 0 .637-.264l1.828-1.828a3.1 3.1 0 0 1 2.192-.908h.344a3.1 3.1 0 0 1 2.191.908l1.829 1.828a.9.9 0 0 0 .636.264H17a.9.9 0 0 0 .9-.9V5a.9.9 0 0 0-.9-.9H7ZM3.9 5A3.1 3.1 0 0 1 7 1.9h10A3.1 3.1 0 0 1 20.1 5v14a3.1 3.1 0 0 1-3.1 3.1h-.172a3.1 3.1 0 0 1-2.192-.908l-1.828-1.829a.9.9 0 0 0-.636-.263h-.344a.9.9 0 0 0-.636.263l-1.828 1.829a3.1 3.1 0 0 1-2.193.908H7A3.1 3.1 0 0 1 3.9 19V5Zm5 5A1.1 1.1 0 0 1 10 8.9h4a1.1 1.1 0 0 1 0 2.2h-4A1.1 1.1 0 0 1 8.9 10Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
