import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';

export const CoinsDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ className, color, secondaryColor, size }, ref) => (
  <IconBase
    ref={ref}
    className={className}
    color={color || 'gray800'}
    size={size}
    viewBox="0 0 24 24"
  >
    <path
      clipRule="evenodd"
      d="M9.526 6.5c.02.023.052.054.1.092.173.135.468.29.899.434.855.285 2.083.474 3.475.474s2.62-.19 3.475-.474c.431-.144.726-.299.898-.434a.789.789 0 0 0 .101-.092.788.788 0 0 0-.1-.092c-.172-.135-.467-.29-.899-.434C16.62 5.69 15.392 5.5 14 5.5s-2.62.19-3.475.474c-.431.144-.726.299-.898.434a.791.791 0 0 0-.101.092ZM18.5 8.238c-.175.077-.36.147-.55.211C16.904 8.797 15.508 9 14 9s-2.904-.203-3.95-.551a6.231 6.231 0 0 1-.55-.211V9.25a.75.75 0 0 1-1.5 0V6.5c0-.57.347-.994.698-1.27.36-.284.834-.506 1.352-.679C11.096 4.203 12.492 4 14 4s2.904.203 3.95.551c.518.173.992.395 1.352.679.35.276.698.7.698 1.27v4c0 .51-.28.904-.584 1.175-.306.272-.708.486-1.143.657a.75.75 0 1 1-.546-1.397c.344-.135.568-.27.692-.381a.488.488 0 0 0 .081-.087v-2.23Zm.008 2.215-.002.005a.016.016 0 0 1 .002-.005Zm-.002-3.995.001-.004-.001.004Zm-9.012 0a.014.014 0 0 1-.001-.004l.001.004Z"
      fill="currentColor"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M16 17.5v-4c0-.57-.347-.993-.698-1.27-.36-.284-.834-.506-1.352-.679C12.904 11.203 11.508 11 10 11s-2.904.203-3.95.551c-.518.173-.992.395-1.352.679-.35.277-.698.7-.698 1.27v4c0 .57.347.994.698 1.27.36.284.834.506 1.353.679C7.096 19.797 8.492 20 10 20s2.904-.203 3.95-.551c.518-.173.992-.395 1.352-.679.35-.276.698-.7.698-1.27Zm-2.05-2.051c.19-.064.375-.134.55-.211v2.23a.584.584 0 0 1-.127.124c-.171.136-.466.29-.898.434-.855.285-2.083.474-3.475.474s-2.62-.19-3.475-.474c-.432-.144-.726-.299-.898-.434a.583.583 0 0 1-.127-.125v-2.23c.175.078.36.148.55.212C7.097 15.797 8.493 16 10 16s2.904-.203 3.95-.551Zm.556 2.009a.016.016 0 0 0 .001-.005v.002l-.001.003Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
      fillRule="evenodd"
    />
  </IconBase>
));
