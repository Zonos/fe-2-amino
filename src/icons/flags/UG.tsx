import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const UG = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 24 25"
      width={width}
    >
      <path
        d="M24 18.667V18H0v.667a2.667 2.667 0 0 0 2.667 2.666h18.666A2.667 2.667 0 0 0 24 18.667Z"
        fill="#D90001"
      />
      <path d="M0 15.334h24V18H0v-2.666Z" fill="#FCDC02" />
      <path d="M0 12.667h24v2.666H0v-2.666Z" fill="#141414" />
      <path d="M0 10h24v2.667H0V10Z" fill="#D90001" />
      <path d="M0 7.333h24V10H0V7.333Z" fill="#FCDC02" />
      <path
        d="M0 6.667v.666h24v-.666A2.667 2.667 0 0 0 21.333 4H2.667A2.667 2.667 0 0 0 0 6.667Z"
        fill="#141414"
      />
      <path
        d="M12 15.333A2.667 2.667 0 1 0 12 10a2.667 2.667 0 0 0 0 5.333Z"
        fill="#fff"
      />
      <path
        d="m11.563 10.688-.178-.47s.386-.134.761 0c.286.104.313.47.313.47l-.448.135-.448-.136Z"
        fill="#D90000"
      />
      <path
        d="M11.73 10.615v-.456s.073-.029.281 0a.441.441 0 0 1 .302.174l-.292.355-.292-.073Z"
        fill="#FCDC02"
      />
      <path
        d="M11.83 11.93c-.055-.096 0-.666.16-.707.159-.042.465-.542 0-.708-.466-.167-.563.32-.563.32s-.46.134-.403.25c.055.11.445-.042.528.054.083.097-.041.237-.375.626-.333.39-.111.916.042 1.053.152.136.333.239.472.364.138.124.298.194.298.194v.403s-.465.041-.687.014c-.222-.027-.375.125-.43.305-.057.18.083.278.083.14 0-.14.055-.056.068.055.012.111.112.07.112-.07 0-.138.055-.083.069-.014.014.07.111-.027.125-.11.014-.084.139-.126.25-.154.112-.027.41.028.41.028v.736s-.618.041-.674.125c-.055.084.375.07.375.07s-.125.236-.07.25c.057.014.445-.236.598-.264.153-.029.389.069.417 0 .028-.07-.375-.167-.417-.237-.042-.069-.125-.708-.125-.708s.18-.014.403 0c.222.014.167-.18.028-.375-.139-.194-.014-.25.222-.208.236.042.417 0 .417-.375 0-.376-1.278-.959-1.333-1.056Zm.486 1.806h-.153l.056-.278s.194.278.097.278Z"
        fill="#141414"
      />
      <path
        d="M11.65 11.208c.019-.166-.25-.152-.265 0-.014.153.237.237.264 0Z"
        fill="#D90000"
      />
      <path
        d="M11.833 12.031c.077-.027.938.365 1.167.47.23.103.202.5.163.738-.038.24-.174.313-.174.313s-.15-.387-.625-.573c-.638-.25-.823-.844-.53-.948Z"
        fill="#9CA69C"
      />
      <path
        d="M12.802 12.49c.28.073.875.207.927.812.052.604-.566.959-.566.959l.104-.188-.184.063.08-.136-.288.063s.483-.386.314-.73c.013.287-.179.365-.179.365s.165-.397-.552-.833l.187-.048-.186-.15.396.15-.188-.233.374.146-.239-.24Z"
        fill="#D90000"
      />
      <path
        d="M11.73 10.89a.068.068 0 1 1-.137 0c0-.037.03-.067.068-.067.038 0 .068.03.068.068Z"
        fill="#9CA69C"
      />
    </FlagIconBase>
  ),
);
