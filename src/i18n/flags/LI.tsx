import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const LI = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
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
            d="M0 0v6h16V0H0z"
            fill="#2E42A5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.4 5.527s.603.375 2 .375c1.399 0 2.14-.375 2.14-.375s-1.096-.638-2.076-.638-2.065.638-2.065.638z"
            fill="#000"
          />
          <path
            d="M2.435 3.371l-.108.063.036.062H6.69l.028-.087-.12-.038.12.038h0v-.001l.001-.003.003-.01a1.616 1.616 0 00.041-.165c.023-.107.047-.256.054-.422.014-.324-.04-.747-.354-1.02-.296-.257-.71-.385-1.1-.451a6.302 6.302 0 00-1.035-.072c-.53 0-1.015.063-1.802.508a.838.838 0 00-.404.487 1.16 1.16 0 00-.02.552 2.055 2.055 0 00.218.608l.006.01.001.003h.001v.001l.108-.063z"
            fill="#FFD83D"
            stroke="#000"
            strokeWidth=".25"
          />
          <path
            d="M1.943 3.453l.058.11-.058-.11h.001l.003-.002.009-.004a2.363 2.363 0 01.154-.067c.106-.042.265-.097.476-.152.423-.11 1.055-.22 1.902-.22.846 0 1.478.11 1.9.22a4.222 4.222 0 01.6.204l.032.015.008.004.003.001h0l.001.001-.058.11.058-.11.097.051-.038.103-.593 1.585-.04.11-4.515-1.849zm0 0l-.096.05.037.103.576 1.585.04.11.113-.033-.67-1.815zm4.402 1.814h0-3.732.003l.007-.002.031-.009.119-.031c.103-.027.25-.062.427-.097.355-.07.826-.14 1.297-.14.47 0 .933.07 1.279.14a7.53 7.53 0 01.53.128l.03.008.006.003h.002z"
            fill="#FFD83D"
            stroke="#000"
            strokeWidth=".25"
          />
          <mask
            id={`${ids[2]}`}
            maskUnits="userSpaceOnUse"
            x="3.059"
            y="-1"
            width="3"
            height="3"
            fill="#000"
          >
            <path fill="#fff" d="M3.059-1h3v3h-3z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.563 0h-.252l.032.461L4.06.423V.74L4.348.7l-.037.726h.252L4.526.7l.29.04V.424l-.285.04L4.563 0z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.563 0h-.252l.032.461L4.06.423V.74L4.348.7l-.037.726h.252L4.526.7l.29.04V.424l-.285.04L4.563 0z"
            fill="#FFD83D"
          />
          <path
            d="M4.31 0v-.25h-.267l.019.268L4.31 0zm.253 0l.25.017.018-.267h-.268V0zm-.22.461L4.31.71l.304.042-.021-.307-.25.017zM4.06.423l.034-.248-.284-.039v.287h.25zm0 .317h-.25v.286l.284-.039L4.059.74zM4.348.7l.25.012.015-.301-.3.041.035.248zm-.037.726l-.25-.012-.013.262h.263v-.25zm.252 0v.25h.263l-.013-.262-.25.012zM4.526.7L4.56.45 4.26.41l.015.302.25-.012zm.29.04L4.78.988l.285.04V.74h-.25zm0-.316h.25V.134L4.78.175l.035.248zm-.285.04l-.25-.017-.02.309.305-.044-.035-.248zM4.311.25h.252v-.5h-.252v.5zm.282.194L4.56-.018l-.498.036.032.46.499-.034zM4.025.67l.285.04.067-.496-.284-.04-.068.496zm.284.07V.423h-.5V.74h.5zm.005-.288l-.29.04.069.495.289-.04-.068-.495zm.247.987l.036-.727-.499-.025-.037.727.5.025zm.002-.263h-.252v.5h.252v-.5zM4.276.711l.037.728.5-.025-.038-.728-.499.025zM4.85.492l-.29-.04-.07.494.29.041.07-.495zm-.285-.07V.74h.5V.423h-.5zm.001.289l.285-.04L4.78.174l-.285.041.071.495zm-.252-.728l-.032.463.498.035.032-.464-.498-.034z"
            fill="#000"
            mask={`url(#${ids[2]})`}
          />
        </g>
      </g>
    </CountryIconBase>
  );
});
