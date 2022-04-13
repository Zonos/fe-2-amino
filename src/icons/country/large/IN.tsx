import React from 'react';

import { useStableUniqueId } from 'hooks';

export const IN = () => {
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
          fill="#F7FCFF"
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
            d="M0 0V8H32V0H0Z"
            fill="#FF8C1A"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 16V24H32V16H0Z"
            fill="#5EAA22"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 12C12 14.2091 13.7909 16 16 16C18.2091 16 20 14.2091 20 12C20 9.79086 18.2091 8 16 8C13.7909 8 12 9.79086 12 12ZM19 12C19 13.6569 17.6569 15 16 15C14.3431 15 13 13.6569 13 12C13 10.3431 14.3431 9 16 9C17.6569 9 19 10.3431 19 12Z"
            fill="#3D58DB"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.9944 12.8607L15.4236 15.9813L15.7551 12.8263L14.3282 15.6596L15.5351 12.7258L13.3678 15.0424L15.3523 12.5675L12.6201 14.1796L15.2216 12.364L12.1459 13.1411L15.1534 12.132L11.9834 12.011L15.1534 11.8901L12.1459 10.881L15.2216 11.6581L12.6201 9.84251L15.3523 11.4546L13.3678 8.9797L15.5351 11.2963L14.3282 8.36247L15.7551 11.1958L15.4236 8.04083L15.9944 11.1614L16.5653 8.04083L16.2338 11.1958L17.6607 8.36247L16.4538 11.2963L18.6211 8.9797L16.6366 11.4546L19.3688 9.84251L16.7673 11.6581L19.843 10.881L16.8355 11.8901L20.0055 12.011L16.8355 12.132L19.843 13.1411L16.7673 12.364L19.3688 14.1796L16.6366 12.5675L18.6211 15.0424L16.4538 12.7258L17.6607 15.6596L16.2338 12.8263L16.5653 15.9813L15.9944 12.8607Z"
            fill="#3D58DB"
          />
        </g>
      </g>
    </svg>
  );
};
