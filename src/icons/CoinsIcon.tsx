import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CoinsIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inline, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      inline={inline}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M17.95 8.449c.19-.064.375-.134.55-.211v2.23a.488.488 0 0 1-.08.086c-.125.11-.349.246-.694.381a.75.75 0 0 0 .547 1.397c.435-.17.837-.385 1.143-.657.304-.27.584-.665.584-1.175v-4c0-.57-.347-.994-.698-1.27-.36-.284-.834-.506-1.352-.679C16.904 4.203 15.508 4 14 4s-2.904.203-3.95.551c-.518.173-.992.395-1.352.679-.35.276-.698.7-.698 1.27v2.75a.75.75 0 0 0 1.5 0V8.238c.175.077.36.147.55.211C11.096 8.797 12.492 9 14 9s2.904-.203 3.95-.551ZM9.627 6.592a.791.791 0 0 1-.101-.092.791.791 0 0 1 .1-.092c.173-.135.468-.29.899-.434C11.38 5.69 12.608 5.5 14 5.5s2.62.19 3.475.474c.431.144.726.299.898.434.05.038.08.07.101.092a.789.789 0 0 1-.1.092c-.172.135-.467.29-.899.434-.855.285-2.083.474-3.475.474s-2.62-.19-3.475-.474c-.431-.144-.726-.299-.898-.434ZM16 17.5v-4c0-.57-.347-.993-.698-1.27-.36-.284-.834-.506-1.352-.679C12.904 11.203 11.508 11 10 11s-2.904.203-3.95.551c-.518.173-.992.395-1.352.679-.35.277-.698.7-.698 1.27v4c0 .57.347.994.698 1.27.36.284.834.506 1.353.679C7.096 19.797 8.492 20 10 20s2.904-.203 3.95-.551c.518-.173.992-.395 1.352-.679.35-.276.698-.7.698-1.27ZM5.627 13.592a.79.79 0 0 1-.101-.092.79.79 0 0 1 .1-.092c.173-.135.467-.29.899-.434C7.38 12.69 8.608 12.5 10 12.5s2.62.19 3.475.474c.431.144.726.299.898.434.05.039.08.07.101.092a.787.787 0 0 1-.1.092c-.173.135-.468.29-.899.434-.855.285-2.083.474-3.475.474s-2.62-.19-3.475-.474c-.432-.144-.726-.299-.898-.434Zm8.323 1.857c.19-.064.375-.134.55-.211v2.23a.584.584 0 0 1-.127.124c-.171.136-.466.29-.898.434-.855.285-2.083.474-3.475.474s-2.62-.19-3.475-.474c-.432-.144-.726-.299-.898-.434a.583.583 0 0 1-.127-.125v-2.23c.175.078.36.148.55.212C7.097 15.797 8.493 16 10 16s2.904-.203 3.95-.551Zm.556 2.009a.016.016 0 0 0 .001-.005v.002l-.001.003Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
