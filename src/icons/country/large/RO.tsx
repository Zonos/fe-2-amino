import React from 'react';

import { useStableUniqueId } from 'hooks';

export const RO = () => {
  const ids = useStableUniqueId(1);
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="32"
        height="24"
      >
        <rect width="32" height="24" fill="white" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 0H22V24H10V0Z"
          fill="#FBCD17"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 0H32V24H22V0Z"
          fill="#E11C1B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H10V24H0V0Z"
          fill="#2E42A5"
        />
      </g>
    </svg>
  );
};
