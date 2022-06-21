import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const FolderListIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.224 6.055C10.021 6.006 9.794 6 9.012 6H7.8c-.857 0-1.439 0-1.889.038-.438.035-.663.1-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.38-.18.819C4 8.361 4 8.943 4 9.8v4.4c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.819.18C6.361 18 6.943 18 7.8 18h8.4c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 0 0 .874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889v-2.4c0-.857 0-1.439-.038-1.889-.035-.438-.1-.663-.18-.819a2 2 0 0 0-.874-.874c-.156-.08-.38-.145-.819-.18C17.639 8 17.057 8 16.2 8H13a1 1 0 0 1-.707-.293l-.594-.594c-.553-.553-.718-.709-.897-.818a2.002 2.002 0 0 0-.578-.24ZM9.114 4c.635 0 1.114 0 1.577.11a4 4 0 0 1 1.156.48c.406.248.745.587 1.194 1.037l.072.072.301.301h2.827c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564.044.541.044 1.206.044 2.01v2.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H7.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C2 15.71 2 15.046 2 14.242V9.758c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392C6.29 4 6.954 4 7.758 4h1.356Z"
        fill="currentColor"
      />
      <path
        d="M10 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm0 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm-4 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
