import React from 'react';

import { useStableUniqueId } from 'hooks';

export const CM = () => {
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
          fill="#E11C1B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.0754 14.4903L12.5898 16.908L13.7036 12.7671L11.1448 10.1218L14.6096 9.97881L16.0754 5.88403L17.5413 9.97881H21.0002L18.4473 12.7671L19.7258 16.6636L16.0754 14.4903Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 0H32V24H22V0Z"
          fill="#FBCD17"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H10V24H0V0Z"
          fill="#0B9E7A"
        />
      </g>
    </svg>
  );
};
