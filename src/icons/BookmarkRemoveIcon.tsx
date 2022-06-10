import React from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { type IconProps } from 'src/types/IconProps';

export const BookmarkRemoveIcon = ({ size, color, className }: IconProps) => {
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
        d="M4 7C4 4.23858 6.23858 2 9 2H14.9999C17.7614 2 19.9999 4.23858 19.9999 7V18.9892C19.9999 21.5429 17.0126 22.9289 15.0627 21.2799L12.6457 19.2358C12.273 18.9205 11.727 18.9205 11.3542 19.2358L8.93724 21.2799C6.98734 22.9289 4 21.543 4 18.9892V7ZM9 4C7.34315 4 6 5.34315 6 7V18.9892C6 19.8405 6.99578 20.3025 7.64575 19.7528L10.0628 17.7087C11.1811 16.7629 12.8189 16.7629 13.9372 17.7087L16.3542 19.7528C17.0042 20.3024 17.9999 19.8405 17.9999 18.9892V7C17.9999 5.34315 16.6568 4 14.9999 4H9Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.29289 7.29289C9.68342 6.90237 10.3166 6.90237 10.7071 7.29289L12 8.58579L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L13.4142 10L14.7071 11.2929C15.0976 11.6834 15.0976 12.3166 14.7071 12.7071C14.3166 13.0976 13.6834 13.0976 13.2929 12.7071L12 11.4142L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071C8.90237 12.3166 8.90237 11.6834 9.29289 11.2929L10.5858 10L9.29289 8.70711C8.90237 8.31658 8.90237 7.68342 9.29289 7.29289Z"
        fill="currentColor"
      />
    </IconBase>
  );
};
