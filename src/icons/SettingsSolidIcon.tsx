import React, { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const SettingsSolidIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, className }, ref) => (
    <IconBase
      ref={ref}
      size={size}
      color={color}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.5 2A1.5 1.5 0 0 0 10 3.5v.364a.522.522 0 0 1-.373.494 7.95 7.95 0 0 0-1.353.56.522.522 0 0 1-.612-.085l-.258-.258a1.5 1.5 0 0 0-2.122 0l-.707.707a1.5 1.5 0 0 0 0 2.122l.258.258a.52.52 0 0 1 .086.612 7.95 7.95 0 0 0-.561 1.353.522.522 0 0 1-.494.373H3.5A1.5 1.5 0 0 0 2 11.5v1A1.5 1.5 0 0 0 3.5 14h.364c.229 0 .426.155.494.373.146.47.334.923.56 1.353a.522.522 0 0 1-.085.612l-.258.258a1.5 1.5 0 0 0 0 2.122l.707.707a1.5 1.5 0 0 0 2.122 0l.258-.259a.522.522 0 0 1 .612-.085c.43.227.882.415 1.353.561a.522.522 0 0 1 .373.494v.364a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-.364c0-.229.155-.426.373-.494a7.953 7.953 0 0 0 1.353-.56.522.522 0 0 1 .612.084l.258.259a1.5 1.5 0 0 0 2.122 0l.707-.707a1.5 1.5 0 0 0 0-2.122l-.259-.258a.522.522 0 0 1-.085-.613c.227-.429.415-.881.561-1.352a.522.522 0 0 1 .494-.373h.364a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5h-.364a.522.522 0 0 1-.494-.373 7.953 7.953 0 0 0-.56-1.353.522.522 0 0 1 .084-.612l.259-.258a1.5 1.5 0 0 0 0-2.122l-.707-.707a1.5 1.5 0 0 0-2.122 0l-.258.258a.522.522 0 0 1-.613.086 7.95 7.95 0 0 0-1.352-.561.522.522 0 0 1-.373-.494V3.5A1.5 1.5 0 0 0 12.5 2h-1Zm.5 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        clipRule="evenodd"
      />
    </IconBase>
  )
);
