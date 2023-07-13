import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const WashingtonIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase ref={ref} className={className} size={size}>
      <path
        clipRule="evenodd"
        d="M34.778 31.224v-.667l.222-.222v-.445l-.444-.889L37 13.667s-12.59-2.181-18.884-3.383C16.263 9.93 12.556 9 12.556 9l-.223.444.223 1.112h.666v.889l-.222.889h-.444l-.223-.445-.222-.444-.667-.89-.444.223.444.222.445.445-.445.222-.666-.445L10.11 11l.222.667 1.111.444.445-.444.444.667-.666.889.222.666.444 1.334.445.222-.222-.667-.445-1.111.222-.667h.445l.444.223v1.554l.445.222-.445.667-.666.667v1.334l-.223 1.111-.444.667-.445-.222-.666.667-.222.222-.667-.222-.445.222-.666-.222.444-.667.667-.667.444.223.445-.445.444.667.222-1.334-.444-.222.222-.889h.667l.222-.667-1.555.89-.445.222-.889.666.445.445h.444l-.444.222h-1.11l.222-.444.889-.89.666-.666v-.667h.445v.445l.666-.667L11 14.11v.667l-.667-.667-.222.223-.667-.667h-.666l-2.445-.889-.889-.444L5 11.889 3.444 11 3 12.111v1.334l.667.889.222.889L3.667 17l.444.666L3.889 19h.667v.444l.888.445-1.11.222-.223.444-.222-.222V21h.889l.444.667h-.666l-.223.889.223.666h-.667l-.222-.444-.223.889h.445l.444.222h.89l.221.222h.667l.222.667.445.222h.666l.667.667.445 1.111-.223 1.556v.444l1.556.445.667.444 1.555-.444.667-.223 1.333.223 1.111.444.222.667.89-.222.222.222 1.555-.222 1.111.222 1.111-.222 2-.223.667-.222 2 .445.667-.445 9.11 1.556Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  ),
);
