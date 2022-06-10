import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ArrowUpIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M8.29304 10.1213C7.90252 10.5118 7.26936 10.5118 6.87883 10.1213C6.48831 9.7308 6.48831 9.09763 6.87883 8.70711L11.293 4.29289C11.6836 3.90237 12.3167 3.90237 12.7073 4.29289L17.1215 8.70711C17.512 9.09763 17.512 9.7308 17.1215 10.1213C16.7309 10.5118 16.0978 10.5118 15.7073 10.1213L13.0002 7.41421L13.0002 19C13.0002 19.5523 12.5524 20 12.0002 20C11.4479 20 11.0002 19.5523 11.0002 19L11.0002 7.41421L8.29304 10.1213Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
