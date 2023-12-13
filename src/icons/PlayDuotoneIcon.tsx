import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const PlayDuotoneIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inline, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color || 'gray400'}
      inline={inline}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        d="M18.508 14.46c2.027-1.014 2.027-3.906 0-4.92L7.98 4.276C6.15 3.362 4 4.692 4 6.736v10.528c0 2.044 2.151 3.374 3.98 2.46l10.528-5.264Z"
        fill="currentColor"
      />
    </IconBase>
  ),
);
