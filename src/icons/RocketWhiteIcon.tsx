import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const RocketWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M19.497 4.68a9.864 9.864 0 0 0-6.974 2.89l-4.597 4.595 4.243 4.243 4.596-4.596a9.864 9.864 0 0 0 2.89-6.975V4.68h-.158Zm-5.914 13.142 1.414 1.415 1.8-1.8-.176-2.653-3.038 3.038Zm4.916-4.929a11.864 11.864 0 0 0 3.155-8.056v-.548a1.61 1.61 0 0 0-1.61-1.609h-.547a11.86 11.86 0 0 0-8.056 3.155l-4.41-.294a2 2 0 0 0-1.547.581l-1.8 1.8a2 2 0 0 0 0 2.83l9.9 9.899a2 2 0 0 0 2.828 0l1.8-1.8a2 2 0 0 0 .581-1.548l-.294-4.41ZM9.55 7.713l-2.652-.176-1.8 1.8 1.414 1.414L9.55 7.713ZM5.098 13.58a1 1 0 0 1 0 1.414l-1.06 1.06a1 1 0 1 1-1.415-1.414l1.06-1.06a1 1 0 0 1 1.415 0Zm2.121 3.535a1 1 0 0 1 0 1.414l-1.414 1.415a1 1 0 1 1-1.414-1.415l1.414-1.414a1 1 0 0 1 1.414 0Zm2.121 2.122a1 1 0 0 1 1.415 1.414l-1.061 1.06a1 1 0 0 1-1.414-1.414l1.06-1.06Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
