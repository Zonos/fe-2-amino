import React from 'react';

import { useStableUniqueId } from 'hooks';

export const ST = () => {
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
          d="M0 0V24H32V0H0Z"
          fill="#FBCD17"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V8H32V0H0Z"
          fill="#73BE4A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 16V24H32V16H0Z"
          fill="#73BE4A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V24L10 12L0 0Z"
          fill="#C51918"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.0018 13.8707L15.1311 15L15.5578 12.7962L14 11.1469L16.1094 11.0578L17.0018 9L17.8942 11.0578H20L18.4458 12.7962L18.9137 15L17.0018 13.8707Z"
          fill="#272727"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.0018 13.8707L23.1311 15L23.5578 12.7962L22 11.1469L24.1094 11.0578L25.0018 9L25.8942 11.0578H28L26.4458 12.7962L26.9137 15L25.0018 13.8707Z"
          fill="#272727"
        />
      </g>
    </svg>
  );
};
