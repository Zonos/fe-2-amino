import React from 'react';

import { useStableUniqueId } from 'hooks';

export const IQ = () => {
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
          fill="#F7FCFF"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V5H20V0H0Z"
            fill="#BF2714"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 10V15H20V10H0Z"
            fill="#272727"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.33539 8.007C3.90389 8.82288 3.125 9.375 3.125 9.375C3.125 9.375 3.80593 9.375 4.06672 8.82852H9.64007V7.62488C9.64007 7.62488 9.5235 7.04687 9.02722 7.04687C8.53094 7.04687 8.41912 7.62488 8.41912 7.62488H6.45882L8.35551 5.95054L7.98674 5.625L5.88001 7.48476V7.87907H8.8707V7.64695C8.8707 7.64695 8.88749 7.51257 9.02722 7.51257C9.16695 7.51257 9.13294 7.64695 9.13294 7.64695V8.14274H5.36413V7.4648L4.95605 7.64695V8.14274C4.95605 8.14274 4.45626 8.007 4.14041 8.007C3.82457 8.007 3.80593 7.64695 3.80593 7.64695L3.33539 8.007ZM10.9041 8.05331L11.2098 8.81442H9.99353V5.75898L10.5065 5.92321V8.05331H10.9041ZM16.5694 8.05331L16.875 8.81442H15.6588V5.75898L16.1718 5.92321V8.05331H16.5694ZM15.0634 5.7906L14.7465 6.00509V8.05121H14.4237V6.41018L13.892 6.71675V8.05121H13.5351V7.12469L13.1309 7.38485V7.63638C13.1309 7.63638 12.3533 7.68998 12.3533 8.78927H15.0603L15.0634 5.7906ZM4.68236 9.35353C4.78014 9.35353 4.8594 9.28356 4.8594 9.19725C4.8594 9.11093 4.78014 9.04096 4.68236 9.04096C4.58459 9.04096 4.50533 9.11093 4.50533 9.19725C4.50533 9.28356 4.58459 9.35353 4.68236 9.35353ZM13.6966 6.02604C13.5591 6.20724 13.142 6.02604 13.142 6.02604L14.3248 5.889C14.2027 6.12749 13.6966 6.02604 13.6966 6.02604Z"
            fill="#009C4E"
          />
        </g>
      </g>
    </svg>
  );
};
