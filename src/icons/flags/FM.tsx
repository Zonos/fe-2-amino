import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const FM = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <defs>
        <clipPath id={`${ids[0]}`}>
          <path fillOpacity=".7" d="M-81.3 0h682.6v512H-81.3z" />
        </clipPath>
      </defs>
      <g
        fillRule="evenodd"
        strokeWidth="1pt"
        clipPath={`url(#${ids[0]})`}
        transform="translate(76.3) scale(.94)"
      >
        <path fill="#6797d6" d="M-252 0H772v512H-252z" />
        <path
          fill="#fff"
          d="m259.8 123-32.4 22.2 12.4-35.9-32.5-22.2h40.1l12.4-35.9 12.4 36h40l-32.4 22.1 12.4 35.9M259.8 390l-32.4-22.2 12.4 36-32.5 22.1h40.1l12.4 35.9 12.4-36 40 .1-32.4-22.2 12.4-35.9m-188.4-92.4L79.3 306l1.4-38-37.5-11.7 38.4-11.7 1.3-38 22.3 30.8 38.4-11.8-24.6 30.7 22.4 30.7m274.2-11.7 24.6 30.7-1.4-38 37.5-11.7-38.4-11.7-1.3-38-22.3 30.8-38.4-11.8 24.6 30.7-22.4 30.7"
        />
      </g>
    </FlagIconBase>
  );
});
