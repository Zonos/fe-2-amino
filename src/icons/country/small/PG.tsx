import React from 'react';

import { useStableUniqueId } from 'hooks';

export const PG = () => {
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
        <rect width="16" height="12" fill="#E11C1B" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0L16 12H0V0Z"
          fill="#1D1D1D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.54169 9.13434H4.2076L4.52429 8.3877L4.89653 9.12931L5.57879 9.16662L4.99572 9.80125L5.29511 10.5658L4.55397 10.1402L3.86958 10.5696L4.12775 9.82727L3.54169 9.13434Z"
          fill="#EEEEF6"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.54169 7.13434H2.2076L2.52429 6.3877L2.89653 7.12931L3.57879 7.16662L2.99572 7.80125L3.29511 8.56578L2.55397 8.1402L1.86958 8.56959L2.12775 7.82727L1.54169 7.13434Z"
          fill="#EEEEF6"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.54169 6.13434H4.2076L4.52429 5.3877L4.89653 6.12931L5.57879 6.16662L4.99572 6.80125L5.29511 7.56578L4.55397 7.1402L3.86958 7.56959L4.12775 6.82727L3.54169 6.13434Z"
          fill="#EEEEF6"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.85559 8.282L5.31333 8.26678L5.47856 7.79468L5.66407 8.26426L6.08527 8.30475L5.70598 8.57292L6.01188 9.0478L5.48116 8.84929L5.02117 9.05419L5.26409 8.58598L4.85559 8.282Z"
          fill="#EEEEF6"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.85559 7.282L6.31333 7.26678L6.47856 6.79468L6.66407 7.26426L7.08527 7.30475L6.70598 7.57292L7.01188 8.0478L6.48116 7.84929L6.02117 8.05419L6.26409 7.58598L5.85559 7.282Z"
          fill="#EEEEF6"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5419 1C10.5419 1 8.99756 1.3081 9.431 3.45492H9.21067C9.21067 3.45492 9.22869 3.3429 9.01686 3.27721C8.80502 3.21153 8.84744 3.23619 8.73813 3.27721C8.62881 3.31824 7.96373 3.27721 7.96373 3.27721V3.35939L8.43438 3.56265C8.43438 3.56265 8.42278 3.7319 8.61953 3.82569C8.81629 3.91947 8.95916 3.96466 8.95916 3.96466C8.95916 3.96466 8.98828 4.15143 8.80391 4.15143C8.61953 4.15143 7.87799 3.91106 7.61425 4.50162C7.35052 5.09218 7 5.52548 7 5.52548H7.39546L7.28934 5.65736H7.73463L7.61425 5.72568C7.61425 5.72568 8.16513 5.71955 8.20809 5.65736C8.25104 5.59516 8.20809 5.82597 8.20809 5.82597C8.20809 5.82597 8.74173 5.58228 8.77097 5.52548L9.02005 5.69634L9.091 5.4072L9.35826 5.52548L9.431 5.24999C9.431 5.24999 10.187 6.51439 10.7605 6.44182V6.23197L11.2837 6.44182L11.3502 6.3485C11.3502 6.3485 11.9823 6.60627 12.1769 6.63016L12.0381 6.3485H12.1769L12.0381 5.82597H12.1769L11.8993 5.4072L11.9771 5.29382L11.9256 5.14481C11.9256 5.14481 12.9433 5.46902 12.8974 5.98484C12.8515 6.50066 12.3983 6.70881 12.3983 6.70881C12.3983 6.70881 11.9636 6.84196 11.571 6.81331C11.571 6.81331 11.8827 7.18144 12.5421 7.0567C13.2015 6.93196 13.42 6.2926 13.42 6.2926C13.42 6.2926 13.7224 6.92061 13.4735 7.25082C13.2245 7.58102 12.1163 7.81285 12.1163 7.81285C12.1163 7.81285 12.5173 8.04795 12.8974 7.98771C13.2776 7.92747 13.8688 7.59658 13.9834 7.0567C14.0981 6.51682 13.588 5.52059 13.357 5.4072L13.2657 5.06157L13.4735 5.14481L13.0473 4.10258L13.2539 4.14786L12.6509 3.39778L12.817 3.34664L11.9839 2.74783L12.2332 2.68198C12.2332 2.68198 11.6174 2.36993 10.915 2.74783L10.9217 2.61727L10.7371 2.64848L10.748 2.50486L10.9315 2.22691L10.6561 2.12079C10.6561 2.12079 10.8787 1.78634 10.8453 1.79093C10.8453 1.79093 10.5972 1.86214 10.6112 1.83229C10.6112 1.83229 10.7364 1.50995 10.7035 1.51858C10.7035 1.51858 10.4157 1.61645 10.4583 1.56748L10.5689 1.37055L10.5419 1Z"
          fill="#FBCD17"
        />
      </g>
    </svg>
  );
};
