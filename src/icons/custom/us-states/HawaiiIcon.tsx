import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const HawaiiIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase ref={ref} className={className} size={size}>
      <path
        clipRule="evenodd"
        d="m32.893 31.361.452-.226.226-.679 1.131-.904.905-.453.905-.226 1.13-.226.906-.679.452-.905-1.131-.452-.226-.905h-.679v-.905l-.904-.905-2.489-.905-.226.227-1.13-.679-.453-.452-.679.452.453.905.226.452-.905 1.131-.678.905.452.905.452 1.131.227.905-.227 1.357.453.679h.904l.453.452ZM2.13 9.871l-.679.68-.452.452v.452l.226.226.453-.678.678-.227v-.678l-.226-.226Zm3.62-1.582-1.131.679-.452.678.226.679h.678l.679.679h.452l.905-.227.226-.904.453-.68-.679-.678-.905.227-.452-.453Zm11.083 3.846.905 1.13v.905l.905-.452.226.679.226.678h-.678l-1.131-.226-.679-.452v.452l-.452.226-.679-.678-.452-.679-.226-.905.904.226 1.131-.904ZM21.81 15.3l.452.227.678.226h.905v-.226l.453.452h1.583l-.905.679h-.905l-.678-.453-1.357.227h-.453l-.226-.453.453-.226V15.3Zm1.583 2.263h.678l.905.678-.678.679-.679-.226v-.679l-.452-.226.226-.226Zm3.166 2.262-.904.226v.226l.452.226.679-.226-.227-.452Zm.453-1.358.452.453v.678l.227.453.452-.226h.678l.453-.453.452.226.679-.678v-.453l-.679-.452-1.13-.679-.905.453-.453-.227-1.13-1.13-.227.678-.226.453.678.904h.679Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  ),
);
