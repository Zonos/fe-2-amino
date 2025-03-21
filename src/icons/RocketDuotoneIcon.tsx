import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const RocketDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ className, color, inlineBlock, secondaryColor, size }, ref) => (
  <IconBase
    ref={ref}
    className={className}
    color={color || 'gray800'}
    inlineBlock={inlineBlock}
    size={size}
    viewBox="0 0 24 24"
  >
    <path
      d="M10.663 9.4a.75.75 0 0 1-.133.88l-3.25 3.25a.75.75 0 0 1-1.09-.032l-2-2.25a.75.75 0 0 1 .42-1.235l5.25-1a.75.75 0 0 1 .803.386m3.942 3.946a.75.75 0 0 1 .365.827l-1.24 5.25a.75.75 0 0 1-1.26.358l-2-2a.75.75 0 0 1-.001-1.06l3.24-3.25a.75.75 0 0 1 .896-.125M7.78 17.28a.75.75 0 1 0-1.06-1.06l-2.5 2.5a.75.75 0 1 0 1.06 1.06zm2 .94a.75.75 0 0 1 0 1.06l-.5.5a.75.75 0 0 1-1.06-1.06l.5-.5a.75.75 0 0 1 1.06 0m-4-2.94a.75.75 0 1 0-1.06-1.06l-.5.5a.75.75 0 1 0 1.06 1.06z"
      fill="currentColor"
    />
    <path
      d="M18.864 4a8.75 8.75 0 0 0-5.916 2.302l-6.703 6.15a.75.75 0 0 0-.023 1.084l4.242 4.242a.75.75 0 0 0 1.083-.023l6.15-6.703A8.75 8.75 0 0 0 20 5.136V4.75a.75.75 0 0 0-.75-.75z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
  </IconBase>
));
