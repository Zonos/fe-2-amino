import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const TaxDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ className, color, inline, secondaryColor, size }, ref) => (
  <IconBase
    ref={ref}
    className={className}
    color={color || 'gray800'}
    inline={inline}
    size={size}
    viewBox="0 0 24 24"
  >
    <path
      clipRule="evenodd"
      d="M10.906 19.437c.464.955 1.885.62 1.885-.443v-4.521a3.76 3.76 0 0 0 2.98-3.692c0-.62-.149-1.206-.412-1.723l4.246-3.253c.759-.581.352-1.805-.6-1.805H4.995c-.736 0-1.216.78-.892 1.448l6.803 13.99Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
    <path
      d="M14.778 16.39a.758.758 0 0 0-.32 1.016.741.741 0 0 0 1.005.323 7.544 7.544 0 0 0 4.033-6.697 7.61 7.61 0 0 0-.333-2.232.743.743 0 0 0-.932-.497.755.755 0 0 0-.491.943c.172.563.266 1.163.266 1.786a6.036 6.036 0 0 1-3.228 5.359Z"
      fill="currentColor"
    />
  </IconBase>
));
