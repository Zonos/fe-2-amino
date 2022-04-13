import React from 'react';

import { useStableUniqueId } from 'hooks';

export const KG = () => {
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
          fill="#C51918"
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
            d="M7.99104 8.9334C8.04462 8.9334 8.09788 8.932 8.15077 8.92924L8.4593 9.91312L8.53076 8.88523C8.63399 8.86657 8.73537 8.84265 8.83461 8.81377L9.36358 9.70055L9.19406 8.68367C9.28964 8.64197 9.38261 8.59546 9.47264 8.54444L10.1941 9.28686L9.79231 8.33529C9.87527 8.27313 9.95485 8.20679 10.0307 8.13657L10.906 8.69435L10.2937 7.8602C10.36 7.78101 10.4222 7.69836 10.4799 7.61254L11.4609 7.95497L10.6718 7.28387C10.7179 7.19181 10.7593 7.09704 10.7957 6.99986L11.829 7.10859L10.9056 6.63628C10.9288 6.53648 10.9469 6.43475 10.9597 6.33138L11.9904 6.20082L10.982 5.95247C10.9815 5.848 10.9756 5.74481 10.9645 5.64316L11.9363 5.2806L10.899 5.26963C10.8744 5.16822 10.8445 5.06884 10.8097 4.97179L11.6698 4.39755L10.6589 4.62394C10.6113 4.53115 10.559 4.44117 10.5022 4.35432L11.2051 3.59927L10.2746 4.05056C10.2068 3.97123 10.135 3.89547 10.0593 3.82361L10.5674 2.9288L9.76785 3.57997C9.68354 3.51812 9.59584 3.46056 9.50507 3.40761L9.79097 2.42228L9.16541 3.23741C9.06899 3.19654 8.96997 3.16056 8.86866 3.12976L8.91768 2.10701L8.49882 3.04258C8.39581 3.0251 8.291 3.01286 8.18468 3.00612L7.99464 2L7.80469 3.00566C7.69817 3.01216 7.59317 3.02418 7.48995 3.04145L7.0716 2.10701L7.12052 3.12761C7.01864 3.1583 6.91906 3.19424 6.82211 3.23511L6.19832 2.42228L6.48317 3.40402C6.39157 3.45716 6.30308 3.51499 6.21802 3.57719L5.42188 2.9288L5.92745 3.81917C5.85086 3.8916 5.77813 3.96802 5.70962 4.04809L4.78413 3.59927L5.4829 4.34978C5.42525 4.43758 5.37216 4.52859 5.32396 4.62249L4.31947 4.39755L5.17377 4.96791C5.13834 5.06621 5.10799 5.16692 5.08304 5.2697L4.05294 5.2806L5.01789 5.64057C5.00653 5.74364 5.00049 5.84829 5.00005 5.95425L3.9989 6.20082L5.02229 6.33045C5.03521 6.43528 5.05364 6.53842 5.07729 6.63957L4.16028 7.10859L5.18667 7.00059C5.22357 7.09902 5.26559 7.19499 5.3124 7.28817L4.52836 7.95497L5.5035 7.61458C5.56203 7.70132 5.62504 7.78483 5.69221 7.86478L5.08332 8.69435L5.95427 8.13929C6.03095 8.21004 6.11138 8.27685 6.19524 8.33939L5.79523 9.28686L6.51409 8.54707C6.60478 8.59825 6.69843 8.64486 6.79473 8.68659L6.6257 9.70055L7.15361 8.81555C7.25323 8.84431 7.35499 8.86807 7.45861 8.88654L7.52998 9.91312L7.8384 8.92961C7.88896 8.93213 7.93985 8.9334 7.99104 8.9334ZM10.241 5.95784C10.241 7.20025 9.22562 8.20742 7.97304 8.20742C6.72045 8.20742 5.70503 7.20025 5.70503 5.95784C5.70503 4.71544 6.72045 3.70827 7.97304 3.70827C9.22562 3.70827 10.241 4.71544 10.241 5.95784ZM7.98773 7.70904C8.93468 7.70904 9.70234 6.94138 9.70234 5.99442C9.70234 5.75227 9.65214 5.52183 9.56158 5.31297C8.95182 5.35632 8.4867 5.58221 8.17773 5.81518L7.93232 6.00023L7.70315 5.80187C7.4836 5.61183 7.05972 5.39784 6.4089 5.32455C6.32148 5.53034 6.27311 5.75673 6.27311 5.99442C6.27311 6.94138 7.04077 7.70904 7.98773 7.70904ZM6.75096 4.80686C7.06297 4.482 7.50173 4.27981 7.98773 4.27981C8.46614 4.27981 8.8988 4.47575 9.20981 4.79175C8.7204 4.84852 8.30537 4.97122 7.96839 5.16211C7.66795 4.98973 7.26181 4.87321 6.75096 4.80686Z"
            fill="#FFDC17"
          />
        </g>
      </g>
    </svg>
  );
};
