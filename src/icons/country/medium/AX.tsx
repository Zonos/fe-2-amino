import React from 'react';

import { useStableUniqueId } from 'hooks';

export const AX = () => {
  const ids = useStableUniqueId(2);
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="15"
      >
        <rect width="20" height="15" fill="white" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V15H20V0H0Z"
          fill="#0061C1"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="20"
          height="15"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V15H20V0H0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            d="M6 -0.5H5.5V0V5.5H0H-0.5V6V9V9.5H0H5.5V15V15.5H6H9H9.5V15V9.5H20H20.5V9V6V5.5H20H9.5V0V-0.5H9H6Z"
            fill="#D21034"
            stroke="#FFCE00"
          />
        </g>
      </g>
    </svg>
  );
};
