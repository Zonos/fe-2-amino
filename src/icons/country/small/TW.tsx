import React from 'react';

import { useStableUniqueId } from 'hooks';

export const TW = () => {
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
          fill="#EF0000"
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
            d="M0 0V7H9V0H0Z"
            fill="#2E42A5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.36479 5.40542L3.62396 6.32968L3.44451 5.15883L2.34081 5.58885L2.77082 4.48514L1.59998 4.30569L2.52423 3.56486L1.59998 2.82403L2.77082 2.64458L2.34081 1.54088L3.44451 1.97089L3.62396 0.800049L4.36479 1.7243L5.10562 0.800049L5.28507 1.97089L6.38877 1.54088L5.95876 2.64458L7.1296 2.82403L6.20535 3.56486L7.1296 4.30569L5.95876 4.48514L6.38877 5.58885L5.28507 5.15883L5.10562 6.32968L4.36479 5.40542ZM4.36479 4.99604C5.15521 4.99604 5.79596 4.35528 5.79596 3.56486C5.79596 2.77445 5.15521 2.13369 4.36479 2.13369C3.57437 2.13369 2.93362 2.77445 2.93362 3.56486C2.93362 4.35528 3.57437 4.99604 4.36479 4.99604ZM5.50973 3.56486C5.50973 4.1972 4.99712 4.7098 4.36479 4.7098C3.73246 4.7098 3.21985 4.1972 3.21985 3.56486C3.21985 2.93253 3.73246 2.41992 4.36479 2.41992C4.99712 2.41992 5.50973 2.93253 5.50973 3.56486Z"
            fill="#FEFFFF"
          />
        </g>
      </g>
    </svg>
  );
};
