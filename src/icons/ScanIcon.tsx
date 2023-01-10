import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ScanIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M2.9 6A3.1 3.1 0 0 1 6 2.9h2a1.1 1.1 0 1 1 0 2.2H6a.9.9 0 0 0-.9.9v2a1.1 1.1 0 1 1-2.2 0V6Zm12-2A1.1 1.1 0 0 1 16 2.9h2A3.1 3.1 0 0 1 21.1 6v2a1.1 1.1 0 0 1-2.2 0V6a.9.9 0 0 0-.9-.9h-2A1.1 1.1 0 0 1 14.9 4Zm-12 8A1.1 1.1 0 0 1 4 10.9h16a1.1 1.1 0 0 1 0 2.2H4A1.1 1.1 0 0 1 2.9 12ZM4 14.9A1.1 1.1 0 0 1 5.1 16v2a.9.9 0 0 0 .9.9h2a1.1 1.1 0 0 1 0 2.2H6A3.1 3.1 0 0 1 2.9 18v-2A1.1 1.1 0 0 1 4 14.9Zm16 0a1.1 1.1 0 0 1 1.1 1.1v2a3.1 3.1 0 0 1-3.1 3.1h-2a1.1 1.1 0 0 1 0-2.2h2a.9.9 0 0 0 .9-.9v-2a1.1 1.1 0 0 1 1.1-1.1Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
