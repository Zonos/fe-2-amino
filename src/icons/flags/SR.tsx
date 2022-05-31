import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const SR = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <path fill="#377e3f" d="M.1 0h640v480H.1z" />
      <path fill="#fff" d="M.1 96h640v288H.1z" />
      <path fill="#b40a2d" d="M.1 144h640v192H.1z" />
      <path
        fill="#ecc81d"
        d="m320 153.2 56.4 173.6-147.7-107.3h182.6L263.6 326.8z"
      />
    </FlagIconBase>
  );
});
