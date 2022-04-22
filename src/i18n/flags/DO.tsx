import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const DO = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(2);
  return (
    <CountryIconBase
      height={height}
      width={width}
      ref={ref}
      viewBox="0 0 16 12"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="12"
      >
        <path fill="#fff" d="M0 0h16v12H0z" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0v12h16V0H0z"
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
            d="M0 0v12h16V0H0z"
            fill="#fff"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 0h2v5h7v2H9v5H7V7H0V5h7V0z"
            fill="#F7FCFF"
          />
          <path fill="#4257BF" d="M0 0h7v5H0zM9 7h7v5H9z" />
          <path
            d="M6.818 5.555l.498.048c-.085.89.026 1.265.206 1.265v.5c-.623 0-.815-.65-.704-1.813zM9.213 5.555l-.497.048c.085.89-.026 1.265-.206 1.265v.5c.622 0 .815-.65.703-1.813z"
            fill="#309404"
          />
          <path
            fill="#003994"
            d="M7.364 5.346h.473v.738h-.473zM8.09 6.223h.474v.375c0 .2-.163.364-.364.364h-.11v-.739z"
          />
          <path
            fill="#DE2110"
            d="M8.055 5.3h.473v.738h-.473zM7.364 6.223h.472v.739h-.109a.364.364 0 01-.363-.364v-.375z"
          />
          <path
            d="M7.167 5.305l-.334-.372c.353-.318.721-.483 1.1-.483.38 0 .747.165 1.1.483l-.334.372c-.267-.241-.521-.355-.766-.355-.244 0-.498.114-.766.355z"
            fill="#00319C"
          />
          <path
            d="M7.204 7.797l-.335-.372c.353-.318.721-.483 1.1-.483.38 0 .748.165 1.1.483l-.334.372c-.267-.24-.521-.355-.766-.355-.244 0-.498.114-.765.355z"
            fill="#DE2110"
          />
        </g>
      </g>
    </CountryIconBase>
  );
});
