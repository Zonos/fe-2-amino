import React from 'react';

import { useStableUniqueId } from 'hooks';

export const FI = () => {
  const ids = useStableUniqueId(2);
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
          d="M0 0V24H32V0H0Z"
          fill="#F7FCFF"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V24H32V0H0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            d="M10.8185 1H9.8185V2V10.323H0H-1V11.323V13.323V14.323H0H9.8185V24V25H10.8185H12.8185H13.8185V24V14.323H32H33V13.323V11.323V10.323H32H13.8185V2V1H12.8185H10.8185Z"
            fill="#2E42A5"
            stroke="#2E42A5"
            strokeWidth="2"
          />
        </g>
      </g>
    </svg>
  );
};
