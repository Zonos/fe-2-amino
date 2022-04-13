import React from 'react';

import { useStableUniqueId } from 'hooks';

export const BQSE = () => {
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
          d="M0 0H16V12H0V0Z"
          fill="#00268D"
        />
        <path d="M0.5 0.5H15.5V11.5H0.5V0.5Z" fill="#00268D" stroke="#E31D1C" />
        <rect x="7.5" width="1" height="12" fill="#E31D1C" />
        <rect
          y="6.5"
          width="1"
          height="16"
          transform="rotate(-90 0 6.5)"
          fill="#E31D1C"
        />
        <path
          d="M8.25725 2.57125L8 2.4169L7.74275 2.57125L2.74275 5.57125L2.02817 6L2.74275 6.42875L7.74275 9.42875L8 9.5831L8.25725 9.42875L13.2572 6.42875L13.9718 6L13.2572 5.57125L8.25725 2.57125Z"
          fill="white"
          stroke="#E31D1C"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="1"
          y="1"
          width="14"
          height="10"
        >
          <path
            d="M8.25725 2.57125L8 2.4169L7.74275 2.57125L2.74275 5.57125L2.02817 6L2.74275 6.42875L7.74275 9.42875L8 9.5831L8.25725 9.42875L13.2572 6.42875L13.9718 6L13.2572 5.57125L8.25725 2.57125Z"
            fill="white"
            stroke="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            d="M4.82256 7.80005C5.00189 7.80005 13.75 7.80005 13.75 7.80005L12.8061 6.84294C12.8061 6.84294 10.9185 4.95044 10.7971 4.86371C10.6756 4.77697 10.4749 4.73954 10.2466 5.0152C10.0182 5.29086 9.88725 4.86371 9.69713 4.86371C9.50701 4.86371 9.42662 4.86371 9.15076 5.21739C8.8749 5.57107 7.88153 6.84294 7.88153 6.84294H6.42168C6.42168 6.84294 6.17542 6.63401 6.03507 6.70856C5.89472 6.7831 5.10415 5.88398 4.82256 5.81681C4.54096 5.74963 4.35568 6.06053 4.35568 6.30793C4.35568 6.55533 4.22317 6.08123 3.95374 6.22039C3.68431 6.35956 3.77118 6.70856 3.77118 6.70856C3.77118 6.70856 4.64322 7.80005 4.82256 7.80005Z"
            fill="#059334"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.00318 5.53415L6.38564 6L6.61224 5.23048L6 4.75943H6.76276L7.00318 4L7.25801 4.75943H8L7.39309 5.23048L7.62378 6L7.00318 5.53415Z"
            fill="#FEDA00"
          />
        </g>
      </g>
    </svg>
  );
};
