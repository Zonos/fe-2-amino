import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const PrinterIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M10 5.1a.9.9 0 0 0-.9.9v1.9h5.8V6a.9.9 0 0 0-.9-.9h-4Zm7.1 2.8V6A3.1 3.1 0 0 0 14 2.9h-4A3.1 3.1 0 0 0 6.9 6v1.9H6A3.1 3.1 0 0 0 2.9 11v5A3.1 3.1 0 0 0 6 19.1h1.1c.445 1.17 1.575 2 2.9 2h4c1.325 0 2.455-.83 2.9-2H18a3.1 3.1 0 0 0 3.1-3.1v-5A3.1 3.1 0 0 0 18 7.9h-.9Zm0 9h.9a.9.9 0 0 0 .9-.9v-5a.9.9 0 0 0-.9-.9H6a.9.9 0 0 0-.9.9v5a.9.9 0 0 0 .9.9h.9v-1.4a1.6 1.6 0 0 1 1.6-1.6h7a1.6 1.6 0 0 1 1.6 1.6v1.4ZM14.9 18a.9.9 0 0 1-.9.9h-4a.9.9 0 0 1-.9-.9v-1.9h5.8V18Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
