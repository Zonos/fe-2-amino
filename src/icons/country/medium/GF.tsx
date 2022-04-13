import React from 'react';

import { useStableUniqueId } from 'hooks';

export const GF = () => {
  const ids = useStableUniqueId(1);
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
        <rect width="20" height="15" fill="#5EAA22" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0L20 15H0V0Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.95666 9.00393L7.77814 10.515L8.47426 7.9269L6.875 6.27363L9.04048 6.18424L9.95666 3.625L10.8728 6.18424H13.0346L11.4391 7.9269L12.2381 10.3622L9.95666 9.00393Z"
          fill="#E21835"
        />
      </g>
    </svg>
  );
};
