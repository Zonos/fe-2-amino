import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BellIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 1.9A1.1 1.1 0 0 1 13.1 3v.999c2.844.518 5 3.008 5 6v1.1c0 .567.235 1.11.65 1.497a4.278 4.278 0 0 1 1.35 3.119c0 2.39-1.935 4.385-4.353 4.385h-1.65a2.1 2.1 0 0 1-4.195 0H8.253c-2.418 0-4.353-1.995-4.353-4.385 0-1.173.485-2.313 1.35-3.12a2.05 2.05 0 0 0 .65-1.496v-1.1a6.102 6.102 0 0 1 5-6v-1A1.1 1.1 0 0 1 12 1.9Zm0 4.2A3.9 3.9 0 0 0 8.1 10v1.099a4.248 4.248 0 0 1-1.35 3.105c-.41.384-.65.938-.65 1.51 0 1.204.978 2.186 2.153 2.186h7.494c1.175 0 2.153-.982 2.153-2.185 0-.573-.24-1.127-.65-1.51a4.248 4.248 0 0 1-1.35-3.106v-1.1A3.9 3.9 0 0 0 12 6.1Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
