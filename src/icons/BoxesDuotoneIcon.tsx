import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const BoxesDuotoneIcon = forwardRef<
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
      d="M8.25 4A1.75 1.75 0 0 0 6.5 5.75V10q0 .262.072.5H5.75A1.75 1.75 0 0 0 4 12.25v6c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0 0 20 18.25v-6a1.75 1.75 0 0 0-1.75-1.75h-.823q.072-.238.073-.5V5.75A1.75 1.75 0 0 0 15.75 4z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <path
      d="M8.25 4a.75.75 0 0 0 0 1.5h3v1.25a.75.75 0 1 0 1.5 0V5.5h3a.75.75 0 0 0 0-1.5zm-2.5 6.5a.75.75 0 0 0 0 1.5h5.5v2.25a.75.75 0 0 0 1.5 0V12h5.5a.75.75 0 0 0 0-1.5z"
      fill="currentColor"
    />
  </IconBase>
));
