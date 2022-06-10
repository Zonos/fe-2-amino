import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ArrowLeftDuotoneIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M10.1213 15.7071C10.5118 16.0976 10.5118 16.7308 10.1213 17.1213C9.7308 17.5118 9.09763 17.5118 8.70711 17.1213L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929L8.70711 6.87868C9.09763 6.48815 9.7308 6.48815 10.1213 6.87868C10.5118 7.2692 10.5118 7.90237 10.1213 8.29289L7.41421 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H7.41421L10.1213 15.7071Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
