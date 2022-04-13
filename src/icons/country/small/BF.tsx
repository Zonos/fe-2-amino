import React from 'react';

import { useStableUniqueId } from 'hooks';

export const BF = () => {
  const ids = useStableUniqueId(2);
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="12"
      >
        <rect width="16" height="12" fill="white" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V12H16V0H0Z"
          fill="#5EAA22"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="16"
          height="12"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V12H16V0H0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V6H16V0H0Z"
            fill="#C51918"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.01768 7.88539L5.66622 9.66502L6.4186 6.76657L4.21313 5.0019H6.84179L8.01736 2.42896L9.19293 5.0019H11.8216L9.59272 6.76888L10.3685 9.66502L8.01768 7.88539Z"
            fill="#FECA00"
          />
        </g>
      </g>
    </svg>
  );
};
