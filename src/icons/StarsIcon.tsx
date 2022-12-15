import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const StarsIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M7.253 3.264c.4-1.2 2.095-1.2 2.494 0l.111.332a6.757 6.757 0 0 0 4.038 4.19c1.121.42 1.121 2.007 0 2.428a6.757 6.757 0 0 0-4.038 4.19l-.11.333c-.4 1.198-2.096 1.198-2.495 0l-.111-.333a6.757 6.757 0 0 0-4.038-4.19c-1.121-.42-1.121-2.007 0-2.428a6.757 6.757 0 0 0 4.038-4.19l.11-.332ZM8.5 5.918A8.96 8.96 0 0 1 5.566 9 8.96 8.96 0 0 1 8.5 12.082 8.959 8.959 0 0 1 11.434 9 8.959 8.959 0 0 1 8.5 5.918ZM18.995 9.9a1.1 1.1 0 0 1 1.105 1.095v.01a1.1 1.1 0 0 1-2.2.01v-.01A1.1 1.1 0 0 1 18.995 9.9Zm.005 6a1.1 1.1 0 0 1 1.1 1.1v.9h.9a1.1 1.1 0 1 1 0 2.2h-.9v.9a1.1 1.1 0 0 1-2.2 0v-.9H17a1.1 1.1 0 0 1 0-2.2h.9V17a1.1 1.1 0 0 1 1.1-1.1Zm-8 1.99a1.1 1.1 0 0 1 1.1 1.1V19a1.1 1.1 0 0 1-2.2 0v-.01a1.1 1.1 0 0 1 1.1-1.1Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
