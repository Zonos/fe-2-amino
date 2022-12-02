import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const MK = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => (
  <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
    <path fill="#d20000" d="M0 0h640v480H0z" />
    <path
      fill="#ffe600"
      d="M0 0h96l224 231.4L544 0h96L0 480h96l224-231.4L544 480h96zm640 192v96L0 192v96zM280 0l40 205.7L360 0zm0 480 40-205.7L360 480z"
    />
    <circle
      cx="320"
      cy="240"
      r="77.1"
      fill="#ffe600"
      stroke="#d20000"
      strokeWidth="17.1"
    />
  </FlagIconBase>
));
