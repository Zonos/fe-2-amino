import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BufferIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      inlineBlock={inlineBlock}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M12.38 4.103a.75.75 0 0 0-.76 0l-7.25 4.25a.75.75 0 0 0 0 1.294l1.456.853-1.455.853a.75.75 0 0 0 0 1.294l1.455.853-1.455.853a.75.75 0 0 0 0 1.294l7.25 4.25a.75.75 0 0 0 .758 0l7.25-4.25a.75.75 0 0 0 0-1.294l-1.455-.853 1.455-.853a.75.75 0 0 0 0-1.294l-1.455-.853 1.455-.853a.75.75 0 0 0 0-1.294zm4.311 7.266-4.312 2.528a.75.75 0 0 1-.758 0l-4.312-2.528L6.233 12 12 15.38 17.767 12zM12 12.381 6.233 9 12 5.62 17.767 9zm.38 4.516 4.311-2.528 1.076.631L12 18.38 6.233 15l1.076-.63 4.312 2.527a.75.75 0 0 0 .758 0"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
