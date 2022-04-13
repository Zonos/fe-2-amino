import React from 'react';

import { useStableUniqueId } from 'hooks';

export const HM = () => {
  const ids = useStableUniqueId(3);
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
          fill="#2E42A5"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="9"
          height="7"
        >
          <rect width="9" height="7" fill="white" />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            d="M-1.00214 6.49981L0.978339 7.36841L9.04494 0.944269L10.0896 -0.346497L7.97176 -0.636808L4.68159 2.13154L2.03334 3.99675L-1.00214 6.49981Z"
            fill="#F7FCFF"
          />
          <path
            d="M-0.731018 7.10849L0.277943 7.61255L9.71445 -0.466309H8.29775L-0.731018 7.10849Z"
            fill="#F50100"
          />
          <path
            d="M10.0021 6.49981L8.02166 7.36841L-0.0449371 0.944269L-1.08959 -0.346497L1.02824 -0.636808L4.31841 2.13154L6.96666 3.99675L10.0021 6.49981Z"
            fill="#F7FCFF"
          />
          <path
            d="M9.93457 6.93661L8.92561 7.44067L4.90745 3.9817L3.71615 3.59523L-1.1901 -0.342034H0.226597L5.13009 3.50178L6.43256 3.96519L9.93457 6.93661Z"
            fill="#F50100"
          />
          <mask
            id={`${ids[2]}`}
            maskUnits="userSpaceOnUse"
            x="-1"
            y="-1"
            width="11"
            height="9"
            fill="black"
          >
            <rect fill="white" x="-1" y="-1" width="11" height="9" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.99226 0H3.99226V3H0V4H3.99226V7H4.99226V4H9V3H4.99226V0Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.99226 0H3.99226V3H0V4H3.99226V7H4.99226V4H9V3H4.99226V0Z"
            fill="#F50100"
          />
          <path
            d="M3.99226 0V-0.75H3.24226V0H3.99226ZM4.99226 0H5.74226V-0.75H4.99226V0ZM3.99226 3V3.75H4.74226V3H3.99226ZM0 3V2.25H-0.75V3H0ZM0 4H-0.75V4.75H0V4ZM3.99226 4H4.74226V3.25H3.99226V4ZM3.99226 7H3.24226V7.75H3.99226V7ZM4.99226 7V7.75H5.74226V7H4.99226ZM4.99226 4V3.25H4.24226V4H4.99226ZM9 4V4.75H9.75V4H9ZM9 3H9.75V2.25H9V3ZM4.99226 3H4.24226V3.75H4.99226V3ZM3.99226 0.75H4.99226V-0.75H3.99226V0.75ZM4.74226 3V0H3.24226V3H4.74226ZM0 3.75H3.99226V2.25H0V3.75ZM0.75 4V3H-0.75V4H0.75ZM3.99226 3.25H0V4.75H3.99226V3.25ZM4.74226 7V4H3.24226V7H4.74226ZM4.99226 6.25H3.99226V7.75H4.99226V6.25ZM4.24226 4V7H5.74226V4H4.24226ZM9 3.25H4.99226V4.75H9V3.25ZM8.25 3V4H9.75V3H8.25ZM4.99226 3.75H9V2.25H4.99226V3.75ZM4.24226 0V3H5.74226V0H4.24226Z"
            fill="#F7FCFF"
            mask={`url(#${ids[2]})`}
          />
        </g>
        <path
          d="M4.40798 9.83417L3.81755 10.3798L3.87602 9.57799L3.0813 9.45658L3.74464 9.00237L3.34406 8.30532L4.11277 8.54075L4.40798 7.79297L4.70319 8.54075L5.4719 8.30532L5.07132 9.00237L5.73466 9.45658L4.93994 9.57799L4.99841 10.3798L4.40798 9.83417Z"
          fill="#F7FCFF"
        />
        <path
          d="M10.776 6.06905L10.3824 6.43281L10.4213 5.89827L9.89152 5.81732L10.3337 5.51452L10.0667 5.04982L10.5792 5.20677L10.776 4.70825L10.9728 5.20677L11.4853 5.04982L11.2182 5.51452L11.6604 5.81732L11.1306 5.89827L11.1696 6.43281L10.776 6.06905Z"
          fill="#F7FCFF"
        />
        <path
          d="M11.7147 2.37667L11.3211 2.74043L11.3601 2.20588L10.8302 2.12494L11.2725 1.82213L11.0054 1.35744L11.5179 1.51439L11.7147 1.01587L11.9115 1.51439L12.424 1.35744L12.1569 1.82213L12.5991 2.12494L12.0693 2.20588L12.1083 2.74043L11.7147 2.37667Z"
          fill="#F7FCFF"
        />
        <path
          d="M14.0613 4.22286L13.6677 4.58662L13.7067 4.05208L13.1769 3.97113L13.6191 3.66833L13.352 3.20363L13.8645 3.36058L14.0613 2.86206L14.2581 3.36058L14.7706 3.20363L14.5035 3.66833L14.9458 3.97113L14.416 4.05208L14.4549 4.58662L14.0613 4.22286Z"
          fill="#F7FCFF"
        />
        <path
          d="M12.184 9.53048L11.7904 9.89424L11.8294 9.35969L11.2995 9.27875L11.7418 8.97594L11.4747 8.51125L11.9872 8.6682L12.184 8.16968L12.3808 8.6682L12.8933 8.51125L12.6262 8.97594L13.0684 9.27875L12.5386 9.35969L12.5776 9.89424L12.184 9.53048Z"
          fill="#F7FCFF"
        />
        <path
          d="M13.8266 6.6478L13.4267 6.85805L13.5031 6.41272L13.1795 6.09734L13.6267 6.03237L13.8266 5.6272L14.0266 6.03237L14.4737 6.09734L14.1502 6.41272L14.2266 6.85805L13.8266 6.6478Z"
          fill="#F7FCFF"
        />
      </g>
    </svg>
  );
};
