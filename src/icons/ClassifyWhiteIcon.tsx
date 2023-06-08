import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ClassifyWhiteIcon = forwardRef<SVGSVGElement, IconProps>(
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
        d="M11 4.18c0-1.548 2.06-2.082 2.811-.729l8.65 15.57a1.5 1.5 0 0 1-1.31 2.229H3.804c-1.521 0-2.076-2.004-.772-2.786l3.918-2.35a5.658 5.658 0 0 1-.496-2.326c0-2.744 1.949-5.045 4.545-5.524V4.18Zm2 1.929v2.564c0 .853-.678 1.443-1.389 1.521-1.762.196-3.156 1.72-3.156 3.594 0 .637.16 1.232.44 1.748.359.66.228 1.606-.542 2.068L5.61 19.25H20.3L13 6.109ZM8.88 4.527a1 1 0 0 1-.407 1.354 8.597 8.597 0 0 0-3.477 3.408 7.938 7.938 0 0 0-.958 4.613 1 1 0 1 1-1.99.196 9.938 9.938 0 0 1 1.196-5.774A10.597 10.597 0 0 1 7.527 4.12a1 1 0 0 1 1.354.408Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
