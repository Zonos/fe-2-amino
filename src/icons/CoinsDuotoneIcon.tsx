import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { Color } from 'src/types';
import { type IconProps } from 'src/types/IconProps';

export const CoinsDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ size, color, className, secondaryColor }, ref) => {
  return (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M4 7.967v1.596a4.99 4.99 0 0 0 1.658.935l.158.053a1 1 0 0 1-.632 1.898l-.159-.053A6.988 6.988 0 0 1 4 11.96v1.552c0 .047.019.092.052.126.321.32.712.563 1.143.706l.621.207a1 1 0 0 1-.632 1.898l-.621-.207a4.925 4.925 0 0 1-1.925-1.19A2.178 2.178 0 0 1 2 13.512V5.5c0-.724.385-1.301.838-1.713.453-.411 1.051-.736 1.707-.988C5.862 2.292 7.615 2 9.5 2c1.886 0 3.638.292 4.955.799.655.252 1.255.577 1.707.988.453.412.838.99.838 1.713V9a1 1 0 0 1-2 0V7.967a7.506 7.506 0 0 1-.545.234C13.138 8.708 11.385 9 9.5 9c-1.886 0-3.638-.292-4.955-.799A7.514 7.514 0 0 1 4 7.967Z"
        fill={secondaryColor ? `var(--amino-${secondaryColor})` : '#C8C8CB'}
        data-is-secondary-color="true"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m20 17.51-.013.007c-1.163.588-2.827.983-4.987.983s-3.824-.395-4.987-.983L10 17.511v.75c0 .213.015.365.043.477.027.102.056.133.066.144C10.46 19.218 11.632 20 15 20c3.368 0 4.542-.782 4.89-1.118.011-.01.04-.042.067-.144.028-.112.043-.264.043-.477v-.75ZM22 15v3.261c0 .51-.045 1.407-.72 2.06C20.408 21.162 18.63 22 15 22c-3.631 0-5.408-.838-6.28-1.68-.675-.652-.72-1.55-.72-2.059V15c0-.722.48-1.23.872-1.53.424-.323.977-.584 1.579-.79C11.663 12.261 13.276 12 15 12c1.724 0 3.336.262 4.55.68.6.206 1.154.467 1.578.79.392.3.872.808.872 1.53Z"
        fill="currentColor"
      />
    </IconBase>
  );
});
