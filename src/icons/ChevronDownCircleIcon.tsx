import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ChevronDownCircleIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 4.1a7.9 7.9 0 1 0 0 15.8 7.9 7.9 0 0 0 0-15.8ZM1.9 12C1.9 6.422 6.422 1.9 12 1.9c5.578 0 10.1 4.522 10.1 10.1 0 5.578-4.522 10.1-10.1 10.1-5.578 0-10.1-4.522-10.1-10.1Zm6.322-1.778a1.1 1.1 0 0 1 1.556 0L12 12.444l2.222-2.222a1.1 1.1 0 1 1 1.556 1.556l-2.647 2.646a1.6 1.6 0 0 1-2.263 0l-2.646-2.646a1.1 1.1 0 0 1 0-1.556Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
