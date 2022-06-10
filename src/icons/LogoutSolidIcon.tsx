import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const LogoutSolidIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M10 11V7.16146C9.99998 6.63435 9.99997 6.17953 10.0306 5.80498C10.0629 5.40963 10.1342 5.01641 10.327 4.63803C10.6146 4.07355 11.0735 3.6146 11.638 3.32698C12.0164 3.13419 12.4096 3.06287 12.805 3.03057C13.1795 2.99997 13.6343 2.99998 14.1614 3H16.8386C17.3657 2.99998 17.8205 2.99997 18.195 3.03057C18.5904 3.06287 18.9836 3.13419 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C20.8658 5.01641 20.9371 5.40963 20.9694 5.80497C21 6.17954 21 6.63434 21 7.16148V16.8386C21 17.3657 21 17.8205 20.9694 18.195C20.9371 18.5904 20.8658 18.9836 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.9836 20.8658 18.5904 20.9371 18.195 20.9694C17.8205 21 17.3657 21 16.8385 21H14.1615C13.6343 21 13.1795 21 12.805 20.9694C12.4096 20.9371 12.0164 20.8658 11.638 20.673C11.0735 20.3854 10.6146 19.9265 10.327 19.362C10.1342 18.9836 10.0629 18.5904 10.0306 18.195C9.99997 17.8205 9.99999 17.3657 10 16.8386V13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H10Z"
        fill="currentColor"
      />
      <path
        d="M7.70711 14.2929C8.09763 14.6834 8.09763 15.3166 7.70711 15.7071C7.31658 16.0976 6.68342 16.0976 6.29289 15.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289C8.09763 8.68342 8.09763 9.31658 7.70711 9.70711L6.41421 11H10V13H6.41421L7.70711 14.2929Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
