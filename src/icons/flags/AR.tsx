import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const AR = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => {
    const uniqueId = useId();
    return (
      <FlagIconBase
        ref={ref}
        borderRadius={borderRadius}
        height={height}
        viewBox="0 0 640 480"
        width={width}
      >
        <path d="M0 0h640v480H0z" fill="#74acdf" />
        <path d="M0 160h640v160H0z" fill="#fff" />
        <g id={`${uniqueId}-0`} transform="translate(-64) scale(.96)">
          <path
            d="m396.8 251.3 28.5 62s.5 1.2 1.3.9c.8-.4.3-1.5.3-1.5l-23.7-64m-.7 24.1c-.4 9.4 5.4 14.6 4.7 23-.8 8.5 3.8 13.2 5 16.5 1 3.3-1.3 5.2-.3 5.7s3-2.1 2.4-6.8c-.7-4.6-4.2-6-3.4-16.3.8-10.3-4.2-12.7-3-22"
            fill="#f6b40e"
            id={`${uniqueId}-1`}
            stroke="#85340a"
            strokeWidth="1.1"
          />
          <use
            height="100%"
            transform="rotate(22.5 400 250)"
            width="100%"
            xlinkHref={`#${uniqueId}-1`}
          />
          <use
            height="100%"
            transform="rotate(45 400 250)"
            width="100%"
            xlinkHref={`#${uniqueId}-1`}
          />
          <use
            height="100%"
            transform="rotate(67.5 400 250)"
            width="100%"
            xlinkHref={`#${uniqueId}-1`}
          />
          <path
            d="M404.3 274.4c.5 9 5.6 13 4.6 21.3 2.2-6.5-3.1-11.6-2.8-21.2m-7.7-23.8 19.5 42.6-16.3-43.9"
            fill="#85340a"
            id={`${uniqueId}-2`}
          />
          <use
            height="100%"
            transform="rotate(22.5 400 250)"
            width="100%"
            xlinkHref={`#${uniqueId}-2`}
          />
          <use
            height="100%"
            transform="rotate(45 400 250)"
            width="100%"
            xlinkHref={`#${uniqueId}-2`}
          />
          <use
            height="100%"
            transform="rotate(67.5 400 250)"
            width="100%"
            xlinkHref={`#${uniqueId}-2`}
          />
        </g>
        <use
          height="100%"
          transform="rotate(90 320 240)"
          width="100%"
          xlinkHref={`#${uniqueId}-0`}
        />
        <use
          height="100%"
          transform="rotate(180 320 240)"
          width="100%"
          xlinkHref={`#${uniqueId}-0`}
        />
        <use
          height="100%"
          transform="rotate(-90 320 240)"
          width="100%"
          xlinkHref={`#${uniqueId}-0`}
        />
        <circle
          cx="320"
          cy="240"
          fill="#f6b40e"
          r="26.7"
          stroke="#85340a"
          strokeWidth="1.4"
        />
        <path
          d="M329.1 234.3c-1.8 0-3.6.8-4.6 2.4 2 1.9 6.6 2 9.7-.2a7 7 0 0 0-5.1-2.2zm0 .4c1.7 0 3.4.8 3.6 1.6-2 2.3-5.3 2-7.4.4a4.3 4.3 0 0 1 3.8-2z"
          fill="#843511"
          id={`${uniqueId}-3`}
        />
        <use
          height="100%"
          transform="matrix(-1 0 0 1 640.2 0)"
          width="100%"
          xlinkHref={`#${uniqueId}-5`}
        />
        <use
          height="100%"
          transform="matrix(-1 0 0 1 640.2 0)"
          width="100%"
          xlinkHref={`#${uniqueId}-4`}
        />
        <use
          height="100%"
          transform="translate(18.1)"
          width="100%"
          xlinkHref={`#${uniqueId}-6`}
        />
        <use
          height="100%"
          transform="matrix(-1 0 0 1 640.2 0)"
          width="100%"
          xlinkHref={`#${uniqueId}-7`}
        />
        <path
          d="M316 243.7a1.9 1.9 0 1 0 1.8 2.9 4 4 0 0 0 2.2.6h.2a3.9 3.9 0 0 0 2.3-.6 1.9 1.9 0 1 0 1.8-3c.5.3.8.7.8 1.3 0 .6-.5 1.2-1.2 1.2a1.2 1.2 0 0 1-1.2-1.2 3 3 0 0 1-2.6 1.7 3 3 0 0 1-2.5-1.7 1.2 1.2 0 0 1-1.3 1.2c-.6 0-1.2-.6-1.2-1.2s.3-1 .8-1.2zm2 5.5c-2.1 0-3 1.8-4.8 3 1-.4 1.9-1.2 3.3-2s2.7.2 3.5.2c.8 0 2-1 3.5-.2 1.4.8 2.3 1.6 3.3 2-1.9-1.2-2.7-3-4.8-3a5.5 5.5 0 0 0-2 .6 5.5 5.5 0 0 0-2-.7z"
          fill="#85340a"
        />
        <path
          d="M317.2 251.6c-.8 0-1.8.2-3.4.6 3.7-.8 4.5.5 6.2.5 1.6 0 2.4-1.3 6.1-.5-4-1.2-4.9-.4-6.1-.4-.8 0-1.4-.3-2.8-.2z"
          fill="#85340a"
        />
        <path
          d="M314 252.2h-.8c4.3.5 2.3 3 6.8 3s2.5-2.5 6.8-3c-4.5-.4-3.1 2.3-6.8 2.3-3.5 0-2.4-2.3-6-2.3zm9.7 6.7a3.7 3.7 0 0 0-7.4 0 3.8 3.8 0 0 1 7.4 0z"
          fill="#85340a"
        />
        <path
          d="M303.4 234.3c4.7-4.1 10.7-4.8 14-1.7a8 8 0 0 1 1.5 3.5c.4 2.3-.3 4.8-2.1 7.4l.8.4a14.6 14.6 0 0 0 1.6-9.4 13.3 13.3 0 0 0-.6-2.3c-4.5-3.7-10.7-4-15.2 2z"
          fill="#85340a"
          id={`${uniqueId}-4`}
        />
        <path
          d="M310.8 233c2.7 0 3.3.7 4.5 1.7 1.2 1 1.9.8 2 1 .3.2 0 .8-.3.6-.5-.2-1.3-.6-2.5-1.6s-2.5-1-3.7-1c-3.7 0-5.7 3-6.2 2.8-.3-.2 2.1-3.5 6.2-3.5z"
          fill="#85340a"
          id={`${uniqueId}-5`}
        />
        <use
          height="100%"
          transform="translate(-18.4)"
          width="100%"
          xlinkHref={`#${uniqueId}-3`}
        />
        <circle
          cx="310.9"
          cy="236.3"
          fill="#85340a"
          id={`${uniqueId}-6`}
          r="1.9"
        />
        <path
          d="M305.9 237.5c3.5 2.7 7 2.5 9 1.3 2-1.3 2-1.7 1.6-1.7-.4 0-.8.4-2.4 1.3-1.7.8-4.1.8-8.2-.9z"
          fill="#85340a"
          id={`${uniqueId}-7`}
        />
      </FlagIconBase>
    );
  },
);
