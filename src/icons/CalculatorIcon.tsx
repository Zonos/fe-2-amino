import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CalculatorIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M2.9 6A3.1 3.1 0 0 1 6 2.9h12A3.1 3.1 0 0 1 21.1 6v12a3.1 3.1 0 0 1-3.1 3.1H6A3.1 3.1 0 0 1 2.9 18V6ZM6 5.1a.9.9 0 0 0-.9.9v12a.9.9 0 0 0 .9.9h12a.9.9 0 0 0 .9-.9V6a.9.9 0 0 0-.9-.9H6ZM6.9 8A1.1 1.1 0 0 1 8 6.9h8a1.1 1.1 0 0 1 0 2.2H8A1.1 1.1 0 0 1 6.9 8Zm0 4A1.1 1.1 0 0 1 8 10.9h.01a1.1 1.1 0 0 1 0 2.2H8A1.1 1.1 0 0 1 6.9 12Zm4 0a1.1 1.1 0 0 1 1.1-1.1h.01a1.1 1.1 0 0 1 0 2.2H12a1.1 1.1 0 0 1-1.1-1.1Zm4 0a1.1 1.1 0 0 1 1.1-1.1h.01a1.1 1.1 0 0 1 0 2.2H16a1.1 1.1 0 0 1-1.1-1.1Zm-8 4A1.1 1.1 0 0 1 8 14.9h.01a1.1 1.1 0 0 1 0 2.2H8A1.1 1.1 0 0 1 6.9 16Zm4 0a1.1 1.1 0 0 1 1.1-1.1h.01a1.1 1.1 0 0 1 0 2.2H12a1.1 1.1 0 0 1-1.1-1.1Zm4 0a1.1 1.1 0 0 1 1.1-1.1h.01a1.1 1.1 0 0 1 0 2.2H16a1.1 1.1 0 0 1-1.1-1.1Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
