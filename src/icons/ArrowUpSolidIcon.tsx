import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ArrowUpSolidIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M8.293 10.121a1 1 0 0 1-1.414-1.414l4.414-4.414a1 1 0 0 1 1.414 0l4.414 4.414a1 1 0 0 1-1.414 1.414L13 7.414V19a1 1 0 1 1-2 0V7.414l-2.707 2.707Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
