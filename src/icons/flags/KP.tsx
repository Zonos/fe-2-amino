import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const KP = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <defs>
        <clipPath id={`${ids[0]}`}>
          <path fillOpacity=".7" d="M5 .1h682.6V512H5.1z" />
        </clipPath>
      </defs>
      <g
        fillRule="evenodd"
        clipPath={`url(#${ids[0]})`}
        transform="translate(-4.8 -.1) scale(.93768)"
      >
        <path fill="#fff" stroke="#000" d="M776 511.5H-76V.5h852z" />
        <path fill="#3e5698" d="M776 419H-76v92.5h852z" />
        <path fill="#c60000" d="M776 397.6H-76V114.4h852z" />
        <path fill="#3e5698" d="M776 .6H-76V93h852z" />
        <path
          fill="#fff"
          d="M328.5 256c0 63.5-53 115-118.6 115S91.3 319.5 91.3 256s53-114.8 118.6-114.8c65.5 0 118.6 51.4 118.6 114.9z"
        />
        <path
          fill="#c40000"
          d="m175.8 270.6-57-40.7 71-.2 22.7-66.4 21.1 66.1 71-.4-57.9 41.2 21.3 66.1-57-40.7-58 41.3z"
        />
      </g>
    </FlagIconBase>
  );
});
