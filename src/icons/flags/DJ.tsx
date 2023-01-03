import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const DJ = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <defs>
        <clipPath id={`${ids[0]}`}>
          <path fillOpacity=".7" d="M-40 0h682.7v512H-40z" />
        </clipPath>
      </defs>
      <g
        fillRule="evenodd"
        clipPath={`url(#${ids[0]})`}
        transform="translate(37.5) scale(.94)"
      >
        <path fill="#0c0" d="M-40 0h768v512H-40z" />
        <path fill="#69f" d="M-40 0h768v256H-40z" />
        <path fill="#fffefe" d="m-40 0 382.7 255.7L-40 511V0z" />
        <path
          fill="red"
          d="M119.8 292 89 270l-30.7 22.4L69.7 256l-30.6-22.5 37.9-.3 11.7-36.3 12 36.2h37.9l-30.5 22.7 11.7 36.4z"
        />
      </g>
    </FlagIconBase>
  );
});
