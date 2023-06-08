import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LightWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 4a6 6 0 0 0-4.121 10.36C8.493 14.941 9 15.787 9 16.79V17a1 1 0 0 0 1 1h1v-4.586l-1.707-1.707a1 1 0 1 1 1.414-1.414L12 11.586l1.293-1.293a1 1 0 1 1 1.414 1.414L13 13.414V18h1a1 1 0 0 0 1-1v-.211c0-1.003.507-1.848 1.121-2.429A6 6 0 0 0 12 4Zm2.871 15.872A3.001 3.001 0 0 0 17 17v-.211c0-.306.16-.658.495-.975a8 8 0 1 0-10.991 0c.336.317.496.67.496.975V17c0 1.354.897 2.498 2.129 2.872a3.001 3.001 0 0 0 5.742 0Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
