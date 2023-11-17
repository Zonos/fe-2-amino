import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LandedCostIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12.75 5a.994.994 0 0 0-1.026-.995 8 8 0 1 0 8.271 8.27A.994.994 0 0 0 19 11.25h-4.095a3.004 3.004 0 0 0-2.155-2.155V5ZM5.5 12a6.501 6.501 0 0 1 5.75-6.457V9.5c0 .57.452.958.917 1.01a1.5 1.5 0 0 1 1.324 1.323c.051.465.438.917 1.009.917h3.957A6.501 6.501 0 0 1 5.5 12Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M15.36 5.858a.75.75 0 1 0-.72 1.315 5.53 5.53 0 0 1 2.187 2.188.75.75 0 0 0 1.315-.721 7.03 7.03 0 0 0-2.781-2.782Z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
