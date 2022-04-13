import React from 'react';

import { useStableUniqueId } from 'hooks';

export const BQSE = () => {
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
          d="M0 0H32V24H0V0Z"
          fill="#00268D"
        />
        <path
          d="M1 1H31V23H1V1Z"
          fill="#00268D"
          stroke="#E31D1C"
          strokeWidth="2"
        />
        <rect x="15" width="2" height="24" fill="#E31D1C" />
        <rect
          y="13"
          width="2"
          height="32"
          transform="rotate(-90 0 13)"
          fill="#E31D1C"
        />
        <path
          d="M16.4472 6.10557L16 5.88197L15.5528 6.10557L5.55279 11.1056L3.76393 12L5.55279 12.8944L15.5528 17.8944L16 18.118L16.4472 17.8944L26.4472 12.8944L28.2361 12L26.4472 11.1056L16.4472 6.10557Z"
          fill="white"
          stroke="#E31D1C"
          strokeWidth="2"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="1"
          y="4"
          width="30"
          height="16"
        >
          <path
            d="M16.4472 6.10557L16 5.88197L15.5528 6.10557L5.55279 11.1056L3.76393 12L5.55279 12.8944L15.5528 17.8944L16 18.118L16.4472 17.8944L26.4472 12.8944L28.2361 12L26.4472 11.1056L16.4472 6.10557Z"
            fill="white"
            stroke="white"
            strokeWidth="2"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            d="M11.6088 16C11.8778 16 25 16 25 16L23.5841 14.7239C23.5841 14.7239 20.7528 12.2005 20.5706 12.0849C20.3884 11.9692 20.0874 11.9193 19.7449 12.2869C19.4023 12.6544 19.2059 12.0849 18.9207 12.0849C18.6355 12.0849 18.5149 12.0849 18.1011 12.5565C17.6874 13.028 16.1973 14.7239 16.1973 14.7239H14.0075C14.0075 14.7239 13.6381 14.4453 13.4276 14.5447C13.2171 14.6441 12.0312 13.4452 11.6088 13.3557C11.1864 13.2661 10.9085 13.6806 10.9085 14.0105C10.9085 14.3404 10.7098 13.7082 10.3056 13.8938C9.90147 14.0794 10.0318 14.5447 10.0318 14.5447C10.0318 14.5447 11.3398 16 11.6088 16Z"
            fill="#059334"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.5048 11.3012L14.5785 12L14.9184 10.8457L14 10.1391H15.1441L15.5048 9L15.887 10.1391H17L16.0896 10.8457L16.4357 12L15.5048 11.3012Z"
            fill="#FEDA00"
          />
        </g>
      </g>
    </svg>
  );
};
