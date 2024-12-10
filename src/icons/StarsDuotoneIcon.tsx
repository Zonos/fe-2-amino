import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const StarsDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ className, color, inlineBlock, secondaryColor, size }, ref) => (
  <IconBase
    className={className}
    color={color || 'gray800'}
    inlineBlock={inlineBlock}
    ref={ref}
    size={size}
    viewBox="0 0 24 24"
  >
    <path
      d="M10.75 4.75a.75.75 0 0 0-1.5 0c0 1.101-.535 2.231-1.402 3.098-.867.867-1.997 1.402-3.098 1.402a.75.75 0 0 0 0 1.5c1.101 0 2.231.535 3.098 1.402.867.867 1.402 1.997 1.402 3.098a.75.75 0 0 0 1.5 0c0-1.101.535-2.231 1.402-3.098.867-.867 1.997-1.402 3.098-1.402a.75.75 0 0 0 0-1.5c-1.101 0-2.231-.535-3.098-1.402-.867-.867-1.402-1.997-1.402-3.098Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M18.25 12a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-7 7a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM17 14a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5A.75.75 0 0 1 17 14Z"
      fill="currentColor"
    />
  </IconBase>
));
