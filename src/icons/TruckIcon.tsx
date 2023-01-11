import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const TruckIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M1.9 7A3.1 3.1 0 0 1 5 3.9h5a3.1 3.1 0 0 1 3.098 3h3.235a3.1 3.1 0 0 1 1.86.62l2.667 2A3.1 3.1 0 0 1 22.1 12v3a3.1 3.1 0 0 1-2.69 3.073 3.101 3.101 0 0 1-5.81.027h-3.2a3.101 3.101 0 0 1-5.81-.027A3.1 3.1 0 0 1 1.9 15V7Zm2.732 8.822a3.101 3.101 0 0 1 5.767.078h.5V7a.9.9 0 0 0-.9-.9H5a.9.9 0 0 0-.9.9v8a.9.9 0 0 0 .533.822Zm8.468.078h.5a3.101 3.101 0 0 1 5.768-.079A.9.9 0 0 0 19.9 15v-3a.9.9 0 0 0-.36-.72l-2.667-2a.9.9 0 0 0-.54-.18H13.1v6.8Zm-5.6.2a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8Zm9 0a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
