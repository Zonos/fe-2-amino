import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const BZ = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(3);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 16 12">
      <g clipPath={`url(#${ids[2]})`}>
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
            fill="#0168B4"
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
              fill="#E93C43"
              fillRule="evenodd"
              d="M0 0v2h16V0H0Zm0 10v2h16v-2H0Z"
              clipRule="evenodd"
            />
            <path fill="#F7FCFF" d="M8 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M4.5 6a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0ZM11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              clipRule="evenodd"
            />
            <path
              fill="#5B8C39"
              fillRule="evenodd"
              d="M5 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm5.3 0a2.3 2.3 0 1 1-4.6 0 2.3 2.3 0 0 1 4.6 0Z"
              clipRule="evenodd"
            />
            <path
              fill="#5B8C39"
              fillRule="evenodd"
              d="m6.5 7 1.47-.188L9.5 7v.5l-1.53-.188L6.5 7.5V7Z"
              clipRule="evenodd"
            />
            <path
              fill="#769DF1"
              fillRule="evenodd"
              d="M7 5h2s.141 3-1 3-1-3-1-3Z"
              clipRule="evenodd"
            />
            <path fill="#FECA00" d="M8 5h1v1H8z" />
            <path fill="#F6F7F8" d="M7 5h1v1H7z" opacity=".6" />
            <rect
              width="2"
              height="1"
              x="7"
              y="4"
              fill="#5B8C39"
              opacity=".66"
              rx=".5"
            />
            <path
              fill="#E9AD35"
              fillRule="evenodd"
              d="M6.9 6.4c.276 0 .5-.448.5-1s-.224-1-.5-1-.5.448-.5 1 .224 1 .5 1Z"
              clipRule="evenodd"
            />
            <path
              fill="#5C2216"
              fillRule="evenodd"
              d="M9.1 6.4c.276 0 .5-.448.5-1s-.224-1-.5-1-.5.448-.5 1 .224 1 .5 1Z"
              clipRule="evenodd"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[2]}`}>
          <rect width="16" height="12" fill="#fff" rx="1" />
        </clipPath>
      </defs>
    </FlagIconBase>
  );
});
