import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const MM = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(2);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <defs>
        <path
          id={`${ids[0]}`}
          fill="#fff"
          d="m0-.5.2.5h-.4z"
          transform="scale(8.844)"
        />
        <g id={`${ids[1]}`}>
          <use xlinkHref="#a" width="18" height="12" transform="rotate(-144)" />
          <use xlinkHref="#a" width="18" height="12" transform="rotate(-72)" />
          <use xlinkHref="#a" width="18" height="12" />
          <use xlinkHref="#a" width="18" height="12" transform="rotate(72)" />
          <use xlinkHref="#a" width="18" height="12" transform="rotate(144)" />
        </g>
      </defs>
      <path fill="#fecb00" d="M0-.1h640V160H0z" />
      <path fill="#ea2839" d="M0 320h640v160H0z" />
      <path fill="#34b233" d="M0 160h640v160H0z" />
      <use
        xlinkHref="#b"
        width="18"
        height="12"
        x="9"
        y="6.4"
        transform="matrix(40 0 0 40 -40 0)"
      />
    </FlagIconBase>
  );
});
