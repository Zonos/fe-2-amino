import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const PercentBadgeDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ size, color, className, secondaryColor }, ref) => (
  <IconBase
    ref={ref}
    size={size}
    color={color || 'gray800'}
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray300}`}
      data-is-secondary-color="true"
      fillRule="evenodd"
      d="M9 4.222C9 2.995 9.995 2 11.222 2h1.556C14.005 2 15 2.995 15 4.222c0 .063.017.1.035.126.021.03.056.06.102.079a.226.226 0 0 0 .127.016.21.21 0 0 0 .115-.064 2.222 2.222 0 0 1 3.142 0l1.1 1.1a2.222 2.222 0 0 1 0 3.142.207.207 0 0 0-.064.115.233.233 0 0 0 .016.127c.02.046.049.08.079.102a.207.207 0 0 0 .126.035C21.005 9 22 9.995 22 11.222v1.556A2.222 2.222 0 0 1 19.778 15c-.063 0-.1.017-.126.035a.233.233 0 0 0-.079.102.233.233 0 0 0-.016.127.21.21 0 0 0 .064.115 2.222 2.222 0 0 1 0 3.142l-1.1 1.1a2.222 2.222 0 0 1-3.142 0 .207.207 0 0 0-.115-.064.233.233 0 0 0-.127.016.233.233 0 0 0-.102.079.208.208 0 0 0-.035.126A2.222 2.222 0 0 1 12.778 22h-1.556A2.222 2.222 0 0 1 9 19.778c0-.063-.017-.1-.035-.126a.233.233 0 0 0-.102-.079.234.234 0 0 0-.128-.016.207.207 0 0 0-.114.064 2.222 2.222 0 0 1-3.142 0l-1.1-1.1a2.222 2.222 0 0 1 0-3.142.207.207 0 0 0 .064-.114.234.234 0 0 0-.016-.128.234.234 0 0 0-.079-.102.207.207 0 0 0-.126-.035A2.222 2.222 0 0 1 2 12.778v-1.556C2 9.995 2.995 9 4.222 9c.063 0 .1-.017.126-.035a.234.234 0 0 0 .079-.102.234.234 0 0 0 .016-.127.207.207 0 0 0-.064-.115 2.222 2.222 0 0 1 0-3.142l1.1-1.1a2.222 2.222 0 0 1 3.142 0 .205.205 0 0 0 .114.064.234.234 0 0 0 .128-.016.234.234 0 0 0 .102-.079A.207.207 0 0 0 9 4.222Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.01 11H10a1 1 0 0 1 0-2h.01a1 1 0 0 1 0 2Zm4.697-1.707a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0ZM13 14a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
  </IconBase>
));
