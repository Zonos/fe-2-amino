import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const ChevronUpSolidIcon = ({ size, color, className }: IconProps) => {
  return (
    <IconBase
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        d="M17.707 15.364a1 1 0 0 0 0-1.414L12.05 8.293a1 1 0 0 0-1.414 0L4.979 13.95a1 1 0 0 0 1.414 1.414l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
