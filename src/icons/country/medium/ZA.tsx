import React from 'react';

import { useStableUniqueId } from 'hooks';

export const ZA = () => {
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
          d="M0 0H20V15H0V0Z"
          fill="#F7FCFF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V5H20V0H0Z"
          fill="#E31D1C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 10V15H20V10H0Z"
          fill="#3D58DB"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="-2"
          y="-4.25"
          width="24"
          height="24"
          fill="black"
        >
          <rect fill="white" x="-2" y="-4.25" width="24" height="24" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.64286 6.25L0 -1.25V16.25L9.64286 8.75H20V6.25H9.64286Z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.64286 6.25L0 -1.25V16.25L9.64286 8.75H20V6.25H9.64286Z"
          fill="#5EAA22"
        />
        <path
          d="M0 -1.25L0.767426 -2.23669L-1.25 -3.8058V-1.25H0ZM9.64286 6.25L8.87543 7.23669L9.21397 7.5H9.64286V6.25ZM0 16.25H-1.25V18.8058L0.767426 17.2367L0 16.25ZM9.64286 8.75V7.5H9.21397L8.87543 7.76331L9.64286 8.75ZM20 8.75V10H21.25V8.75H20ZM20 6.25H21.25V5H20V6.25ZM-0.767426 -0.26331L8.87543 7.23669L10.4103 5.26331L0.767426 -2.23669L-0.767426 -0.26331ZM1.25 16.25V-1.25H-1.25V16.25H1.25ZM8.87543 7.76331L-0.767426 15.2633L0.767426 17.2367L10.4103 9.73669L8.87543 7.76331ZM20 7.5H9.64286V10H20V7.5ZM18.75 6.25V8.75H21.25V6.25H18.75ZM9.64286 7.5H20V5H9.64286V7.5Z"
          fill="#F7FCFF"
          mask={`url(#${ids[1]})`}
        />
        <path
          d="M0.375 3.25L-0.625 2.5V3.75V11.25V12.5L0.375 11.75L5.375 8L6.04167 7.5L5.375 7L0.375 3.25Z"
          fill="#272727"
          stroke="#FECA00"
          strokeWidth="1.25"
        />
      </g>
    </svg>
  );
};
