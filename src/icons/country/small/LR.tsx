import React from 'react';

import { useStableUniqueId } from 'hooks';

export const LR = () => {
  const ids = useStableUniqueId(1);
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
          d="M0 0H16V12H0V0Z"
          fill="#F7FCFF"
        />
        <rect x="0.0135498" y="2.75" width="16" height="1.5" fill="#E31D1C" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H16V1.5H0V0Z"
          fill="#E31D1C"
        />
        <rect x="-0.0294189" y="5.5" width="16" height="1.5" fill="#E31D1C" />
        <rect
          x="0.0559082"
          y="8.19995"
          width="16"
          height="1.5"
          fill="#E31D1C"
        />
        <rect x="0.0507812" y="10.75" width="16" height="1.5" fill="#E31D1C" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H8V7H0V0Z"
          fill="#3D58DB"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.06624 4.60654L2.60555 5.6197L3.07229 3.8844L2 2.77589L3.45195 2.71595L4.06624 1L4.68053 2.71595H6.13L5.06018 3.8844L5.59596 5.51728L4.06624 4.60654Z"
          fill="#F7FCFF"
        />
      </g>
    </svg>
  );
};
