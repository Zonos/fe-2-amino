import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const ER = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(2);
  return (
    <FlagIconBase ref={ref} height={height} viewBox="0 0 16 12" width={width}>
      <g clipPath={`url(#${ids[1]})`}>
        <mask
          height="12"
          id={`${ids[0]}`}
          maskUnits="userSpaceOnUse"
          width="17"
          x="0"
          y="0"
        >
          <path d="M0 0h17v12H0z" fill="#fff" />
        </mask>
        <g clipRule="evenodd" fillRule="evenodd" mask={`url(#${ids[0]})`}>
          <path d="M0 0v6h16V0H0Z" fill="#43B764" />
          <path d="M0 6v6h16V6H0Z" fill="#B4D7F4" />
          <path d="m0 0 16.5 6L0 12V0Z" fill="#BE0027" />
          <path
            d="m4.557 8.684-.477.01a4.742 4.742 0 0 1-.096-.128 3.157 3.157 0 0 1-.355-1.458v.13c-.002.58-.002.827.355 1.328.102.198.225.392.37.58l.616-.472-.413.01Z"
            fill="#F3E294"
          />
          <path
            d="M1 6.25a3.25 3.25 0 1 0 6.5 0 3.25 3.25 0 0 0-6.5 0Zm5.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
            fill="#F3E294"
          />
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[1]}`}>
          <rect fill="#fff" height="12" rx="1" width="16" />
        </clipPath>
      </defs>
    </FlagIconBase>
  );
});
