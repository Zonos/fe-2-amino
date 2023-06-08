import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CodeCircleIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M12 4.1a7.9 7.9 0 1 0 0 15.8 7.9 7.9 0 0 0 0-15.8ZM1.9 12C1.9 6.422 6.422 1.9 12 1.9c5.578 0 10.1 4.522 10.1 10.1 0 5.578-4.522 10.1-10.1 10.1-5.578 0-10.1-4.522-10.1-10.1Zm10.736-5.091a1.1 1.1 0 0 1 .955 1.227l-1 8a1.1 1.1 0 1 1-2.183-.272l1-8a1.1 1.1 0 0 1 1.228-.955ZM9.278 9.722a1.1 1.1 0 0 1 0 1.556L8.556 12l.722.722a1.1 1.1 0 1 1-1.556 1.556L6.576 13.13a1.6 1.6 0 0 1 0-2.262l1.146-1.147a1.1 1.1 0 0 1 1.556 0Zm5.444 0a1.1 1.1 0 0 1 1.556 0l1.146 1.147a1.6 1.6 0 0 1 0 2.262l-1.146 1.147a1.1 1.1 0 1 1-1.556-1.556l.722-.722-.722-.722a1.1 1.1 0 0 1 0-1.556Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
