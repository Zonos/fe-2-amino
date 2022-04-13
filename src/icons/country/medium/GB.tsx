import React from 'react';

import { useStableUniqueId } from 'hooks';

export const GB = () => {
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
        <rect width="20" height="15" fill="#F7FCFF" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 0H8.5V6.25H0V8.75H8.5V15H11V8.75H20V6.25H11V0Z"
          fill="#F50302"
        />
      </g>
    </svg>
  );
};
