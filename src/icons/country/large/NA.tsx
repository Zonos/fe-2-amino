import React from 'react';

import { useStableUniqueId } from 'hooks';

export const NA = () => {
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
          fill="#009933"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V24L32 0H0Z"
            fill="#3195F9"
          />
          <path
            d="M-1.01247 27.0936L-0.481916 28.0548L0.425719 27.437L35.2576 3.72766L35.9597 3.24976L35.6017 2.47955L33.2599 -2.55963L32.7686 -3.61671L31.7986 -2.97039L-3.55716 20.5861L-4.3227 21.0962L-3.87818 21.9015L-1.01247 27.0936Z"
            fill="#E31D1C"
            stroke="#F7FCFF"
            strokeWidth="2"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.22953 9.2447L4.93544 10.8592L4.62197 8.81396L2.694 9.56511L3.44515 7.63714L1.3999 7.32368L3.01441 6.02958L1.3999 4.73549L3.44515 4.42202L2.694 2.49405L4.62197 3.2452L4.93544 1.19995L6.22953 2.81446L7.52363 1.19995L7.83709 3.2452L9.76507 2.49405L9.01391 4.42202L11.0592 4.73549L9.44465 6.02958L11.0592 7.32368L9.01391 7.63714L9.76507 9.56511L7.83709 8.81396L7.52363 10.8592L6.22953 9.2447ZM6.22953 8.52958C7.61024 8.52958 8.72953 7.41029 8.72953 6.02958C8.72953 4.64887 7.61024 3.52958 6.22953 3.52958C4.84882 3.52958 3.72953 4.64887 3.72953 6.02958C3.72953 7.41029 4.84882 8.52958 6.22953 8.52958ZM8.22953 6.02958C8.22953 7.13415 7.3341 8.02958 6.22953 8.02958C5.12496 8.02958 4.22953 7.13415 4.22953 6.02958C4.22953 4.92501 5.12496 4.02958 6.22953 4.02958C7.3341 4.02958 8.22953 4.92501 8.22953 6.02958Z"
            fill="#FECA00"
          />
        </g>
      </g>
    </svg>
  );
};
