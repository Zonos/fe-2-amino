import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const NI = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(3);
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
          fill="#F7FCFF"
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
            d="M0 0v4h16V0H0zM0 8v4h16V8H0z"
            fill="#0080EC"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4c.094 0 .187.007.278.02l-.1.637a1.368 1.368 0 00-.436.013l-.046-.647c.1-.015.2-.023.304-.023zm.576.084l-.174.622a1.355 1.355 0 01.952 1.339l.644.054L10 6a2 2 0 00-1.424-1.916zm1.18 2.873a2 2 0 01-1.608 1.038v-.648c.37-.04.696-.23.915-.508l.694.118zm-3.468.078a2 2 0 001.598.962V7.35a1.353 1.353 0 01-.968-.535l-.63.22zm-.286-.95a2 2 0 011.274-1.95l.167.63c-.468.211-.794.68-.798 1.225l-.643.096z"
            fill="#D0AB00"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.987 4.475L6.62 6.84h2.758l-1.39-2.365z"
            fill="#7CDFFF"
          />
          <mask
            id={`${ids[2]}`}
            maskUnits="userSpaceOnUse"
            x="6"
            y="4"
            width="4"
            height="3"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.987 4.475L6.62 6.84h2.758l-1.39-2.365z"
              fill="#fff"
            />
          </mask>
          <g mask={`url(#${ids[2]})`}>
            <path
              d="M8 7.56a1.195 1.195 0 100-2.392A1.195 1.195 0 008 7.56z"
              stroke="#E31D1C"
              strokeWidth=".5"
            />
            <path
              d="M8 7.56a1.195 1.195 0 100-2.392A1.195 1.195 0 008 7.56z"
              stroke="#FFD018"
              strokeWidth=".5"
            />
            <path
              d="M8 7.56a1.195 1.195 0 100-2.392A1.195 1.195 0 008 7.56z"
              stroke="#4EDD00"
              strokeWidth=".5"
            />
            <path
              d="M8 7.56a1.195 1.195 0 100-2.392A1.195 1.195 0 008 7.56z"
              stroke="#3D58DB"
              strokeWidth=".5"
            />
            <path fill="#3D58DB" d="M6.509 6.109h3.127v.909H6.509z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.718 6.495l.624-.62.191.31.134-.377.148.283.156-.215.202.215.185-.283.158.283.181-.215.424.45.076.17-2.479.125v-.126z"
              fill="#97C923"
            />
          </g>
        </g>
      </g>
    </CountryIconBase>
  );
});
