import React from 'react';

import { IconProps } from 'types';

import { IconBase } from './IconBase';

export const PuzzleIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6C16 6.16919 15.9894 6.33608 15.969 6.5H17.4765C19.1238 6.5 20.4636 7.82841 20.4767 9.47609L20.5 12.3934C20.5028 12.7522 20.3132 13.0851 20.0031 13.2656C19.693 13.4461 19.3099 13.4466 18.9993 13.267C18.7061 13.0974 18.3659 13 18 13C16.8954 13 16 13.8954 16 15C16 16.1046 16.8954 17 18 17C18.3659 17 18.7061 16.9026 18.9993 16.733C19.3087 16.5541 19.69 16.5538 19.9996 16.7324C20.3092 16.911 20.5 17.2412 20.5 17.5987V19.4998C20.5 21.1566 19.157 22.5 17.5 22.5H6.50001C4.84317 22.5 3.50003 21.1569 3.50002 19.5L3.5 9.5C3.5 7.84308 4.84333 6.5 6.50011 6.5L8.03105 6.5C8.01055 6.33608 8 6.16919 8 6ZM6.50011 8.5C5.94775 8.5 5.5 8.94779 5.5 9.5L5.50002 19.5C5.50002 20.0523 5.94774 20.5 6.50001 20.5H17.5C18.0522 20.5 18.5 20.0522 18.5 19.4998V18.969C18.3361 18.9894 18.1692 19 18 19C15.7909 19 14 17.2091 14 15C14 12.7909 15.7909 11 18 11C18.1654 11 18.3286 11.0101 18.489 11.0297L18.4768 9.49203C18.4724 8.94308 18.0259 8.5 17.4765 8.5L14.5987 8.5C14.2412 8.5 13.911 8.30924 13.7324 7.99964C13.5538 7.69003 13.5541 7.30866 13.733 6.99928C13.9026 6.70612 14 6.36595 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6C10 6.36595 10.0974 6.70612 10.267 6.99927C10.4459 7.30866 10.4462 7.69003 10.2676 7.99964C10.089 8.30924 9.75876 8.5 9.40135 8.5L6.50011 8.5Z"
      fill="currentColor"
    />
  </IconBase>
);
