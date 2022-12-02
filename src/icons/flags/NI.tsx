import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const NI = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(4);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 16 12">
      <g clipPath={`url(#${ids[3]})`}>
        <mask
          id={`${ids[0]}`}
          width="16"
          height="12"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M0 0h16v12H0z" />
        </mask>
        <g mask={`url(#${ids[0]})`}>
          <path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M0 0v12h16V0H0Z"
            clipRule="evenodd"
          />
          <mask
            id={`${ids[1]}`}
            width="16"
            height="12"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M0 0v12h16V0H0Z"
              clipRule="evenodd"
            />
          </mask>
          <g mask={`url(#${ids[1]})`}>
            <path
              fill="#0080EC"
              fillRule="evenodd"
              d="M0 0v4h16V0H0Zm0 8v4h16V8H0Z"
              clipRule="evenodd"
            />
            <path
              fill="#D0AB00"
              fillRule="evenodd"
              d="M8 4c.094 0 .187.007.278.02l-.1.637a1.368 1.368 0 0 0-.436.013l-.046-.647c.1-.015.2-.023.304-.023Zm.576.084-.174.622a1.355 1.355 0 0 1 .952 1.339l.644.054L10 6a2 2 0 0 0-1.424-1.916Zm1.18 2.873a2 2 0 0 1-1.608 1.038v-.648c.37-.04.696-.23.915-.508l.694.118Zm-3.468.078a2 2 0 0 0 1.598.962V7.35a1.353 1.353 0 0 1-.968-.535l-.63.22Zm-.286-.95a2 2 0 0 1 1.274-1.95l.167.63c-.468.211-.794.68-.798 1.225l-.643.096Z"
              clipRule="evenodd"
            />
            <path
              fill="#7CDFFF"
              fillRule="evenodd"
              d="M7.987 4.475 6.62 6.84h2.758l-1.39-2.365Z"
              clipRule="evenodd"
            />
            <mask
              id={`${ids[2]}`}
              width="4"
              height="3"
              x="6"
              y="4"
              maskUnits="userSpaceOnUse"
            >
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M7.987 4.475 6.62 6.84h2.758l-1.39-2.365Z"
                clipRule="evenodd"
              />
            </mask>
            <g mask={`url(#${ids[2]})`}>
              <path
                stroke="#E31D1C"
                strokeWidth=".5"
                d="M8 7.56a1.195 1.195 0 1 0 0-2.392A1.195 1.195 0 0 0 8 7.56Z"
              />
              <path
                stroke="#FFD018"
                strokeWidth=".5"
                d="M8 7.56a1.195 1.195 0 1 0 0-2.392A1.195 1.195 0 0 0 8 7.56Z"
              />
              <path
                stroke="#4EDD00"
                strokeWidth=".5"
                d="M8 7.56a1.195 1.195 0 1 0 0-2.392A1.195 1.195 0 0 0 8 7.56Z"
              />
              <path
                stroke="#3D58DB"
                strokeWidth=".5"
                d="M8 7.56a1.195 1.195 0 1 0 0-2.392A1.195 1.195 0 0 0 8 7.56Z"
              />
              <path fill="#3D58DB" d="M6.509 6.109h3.127v.909H6.509z" />
              <path
                fill="#97C923"
                fillRule="evenodd"
                d="m6.718 6.495.624-.62.191.31.134-.377.148.283.156-.215.202.215.185-.283.158.283.181-.215.424.45.076.17-2.479.125v-.126Z"
                clipRule="evenodd"
              />
            </g>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[3]}`}>
          <rect width="16" height="12" fill="#fff" rx="1" />
        </clipPath>
      </defs>
    </FlagIconBase>
  );
});
