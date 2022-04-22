import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const KI = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(3);
  return (
    <CountryIconBase
      height={height}
      width={width}
      ref={ref}
      viewBox="0 0 16 12"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="12"
      >
        <path fill="#fff" d="M0 0h16v12H0z" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0v12h16V0H0z"
          fill="#E31D1C"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="16"
          height="12"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0v12h16V0H0z"
            fill="#fff"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.662 8.589l.229-.497.228.497.136-.53.315.448.038-.544.39.385-.06-.543.454.31-.157-.523.501.224-.248-.487.534.132-.332-.435.549.035-.406-.369.547-.063-.465-.291.527-.159-.51-.204.49-.25-.54-.11.437-.332-.55-.014.37-.403-.543.084.291-.463-.52.179.204-.508-.48.269.11-.536-.424.35.01-.547-.353.419-.087-.54-.273.475-.183-.515-.184.515-.272-.474-.088.539-.354-.419.011.546-.423-.349.109.536-.48-.269.204.508-.52-.18.292.464-.544-.084.37.403-.55.014.437.332-.539.11.49.25-.51.204.526.159-.465.291.547.063-.406.37.55-.036-.333.435.534-.132-.248.487.501-.224-.156.523.453-.31-.06.543.39-.385.038.544.315-.447.136.529z"
            fill="#FFC84A"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-.396 6.96l1.307-.53a.781.781 0 01.594.002l1.816.756c.205.085.437.08.638-.017l1.464-.703c.21-.1.454-.103.666-.005l1.533.709a.781.781 0 00.652.001l1.57-.715a.781.781 0 01.65.001l1.55.715a.781.781 0 00.643.006l1.693-.745a.781.781 0 01.579-.02l1.518.545v5.007H-.44l.044-5.007z"
            fill="#F7FCFF"
          />
          <mask
            id={`${ids[2]}`}
            maskUnits="userSpaceOnUse"
            x="-1"
            y="6"
            width="18"
            height="6"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M-.396 6.96l1.307-.53a.781.781 0 01.594.002l1.816.756c.205.085.437.08.638-.017l1.464-.703c.21-.1.454-.103.666-.005l1.533.709a.781.781 0 00.652.001l1.57-.715a.781.781 0 01.65.001l1.55.715a.781.781 0 00.643.006l1.693-.745a.781.781 0 01.579-.02l1.518.545v5.007H-.44l.044-5.007z"
              fill="#fff"
            />
          </mask>
          <g mask={`url(#${ids[2]})`}>
            <path
              d="M-.396 8.123l1.307-.53a.781.781 0 01.594.002l1.816.755c.205.086.437.08.638-.016l1.464-.703c.21-.101.454-.103.666-.005l1.533.708a.781.781 0 00.652.002l1.57-.716a.781.781 0 01.65.002l1.55.715a.781.781 0 00.643.006l1.693-.746a.781.781 0 01.579-.02l1.518.546M-.396 9.788l1.307-.531a.781.781 0 01.594.003l1.816.755a.78.78 0 00.638-.017l1.464-.703c.21-.1.454-.102.666-.005L7.622 10a.78.78 0 00.652.002l1.57-.716a.781.781 0 01.65.001l1.55.716a.78.78 0 00.643.005l1.693-.745a.781.781 0 01.579-.02l1.518.546"
              stroke="#015989"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M-.396 11.114l.546-.222a2.781 2.781 0 012.114.01l1.057.44c.205.085.437.079.638-.018l.615-.295a2.78 2.78 0 012.37-.017l.678.313a.78.78 0 00.652.002l.734-.335a2.78 2.78 0 012.32.005l.716.331a.782.782 0 00.643.006l.962-.424a2.782 2.782 0 012.061-.072l.767.276v1.657H-.304l-.092-1.657z"
              fill="#015989"
            />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.8 1.2s.713.142.947.142c.235 0 .763-.359 1.069-.24.306.12.894.685.894.685s.833-.625 1.34-.625c.506 0 1.437.068 1.437.068s-.214.557-.818.651c-.603.094-1.325.556-1.325.556h.98c.15 0 .645.277.645.277s-.702.222-.903.222h-.423s-.427.367-.954.289c-.528-.078-.897-.417-.897-.417s-.745-.049-.745-.128c0 0-.284-.146-.37 0-.086.145.37-.196.37-.196s.412-.334.551-.334c.14 0 .605.287.605.287l.111-.115-.576-.44C5.56 2.003 4.8 1.198 4.8 1.198z"
            fill="#FFC84A"
          />
        </g>
      </g>
    </CountryIconBase>
  );
});
