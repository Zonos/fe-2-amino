import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const MH = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => (
  <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
    <g fillRule="evenodd">
      <path fill="#3b5aa3" d="M0 0h639.9v480H0z" />
      <path fill="#e2ae57" d="M0 467 639.9 0v87L0 480v-13z" />
      <path
        fill="#fff"
        d="M22.4 480 640 179.2l-.1-95.5L0 480h22.4zm153-464.8L169 118l-27-65.6 10.4 69.8-41.9-56.4 27.5 64.3-55-42.6 42.8 53.6-62.1-27.6 54.4 41.2-67.7-9 64 25.4L14 180.3l100.6 6.7-63.7 26.2 67-9-54.3 40 63-27.6-43 54 54.6-41.3-27 62.9 43.6-54.7-11.8 68.1 27.5-63.7 6.2 100.7 9.7-100.4 23.7 64-9-69 43.4 54.8-28.6-64 54.6 44-43.4-54.9 64.9 27-57.4-41.9 69.9 11.8-67-25.7 104.1-6.5-104-9.7 68.5-22.8-71 9 58.6-41-66 26.5 45.6-55.3-55.6 43.4 26.7-66.4-43.1 56.4 9.3-70.4-25.7 66.5-9.6-102.8z"
      />
    </g>
  </FlagIconBase>
));
