import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const BookIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 4.859a17.731 17.731 0 0 1 7.265-.393l1.206.186A3.1 3.1 0 0 1 23.1 7.716v9.124a3.1 3.1 0 0 1-3.338 3.091l-2.157-.166a18.905 18.905 0 0 0-4.123.134L12 20.111l-1.482-.212a18.905 18.905 0 0 0-4.123-.134l-2.157.166A3.1 3.1 0 0 1 .9 16.841V7.715a3.1 3.1 0 0 1 2.629-3.064l1.206-.186A17.731 17.731 0 0 1 12 4.86Zm-1.1 1.993a15.53 15.53 0 0 0-5.83-.211l-1.207.185a.9.9 0 0 0-.763.89v9.124a.9.9 0 0 0 .969.898l2.158-.166a21.105 21.105 0 0 1 4.602.15l.07.01V6.852Zm2.2 10.88.071-.01a21.105 21.105 0 0 1 4.602-.15l2.158.166a.9.9 0 0 0 .969-.898V7.716a.9.9 0 0 0-.763-.89l-1.207-.185a15.53 15.53 0 0 0-5.83.211v10.88Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
