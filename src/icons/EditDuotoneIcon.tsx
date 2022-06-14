import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const EditDuotoneIcon = ({
  size,
  color,
  className,
  secondaryColor,
}: IconProps & { secondaryColor?: string }) => {
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
        d="M4.074 15.735a2 2 0 0 0-.56 1.091l-.5 3.064a1 1 0 0 0 1.148 1.149l3.064-.502a2 2 0 0 0 1.091-.56l12.15-12.149a2 2 0 0 0 0-2.828l-1.415-1.414a2 2 0 0 0-2.828 0l-12.15 12.15Z"
        fill="currentColor"
      />
      <path
        d="m5.62 14.19 9.192-9.192 4.243 4.242-9.193 9.193L5.62 14.19Z"
        fill={secondaryColor || '#CACACE'}
      />
    </IconBase>
  );
};
