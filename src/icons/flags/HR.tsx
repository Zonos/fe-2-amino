import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const HR = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 24 25"
      width={width}
    >
      <path d="M0 9.267h24v6.8H0v-6.8Z" fill="#EEE" />
      <path
        d="M24 18.667a2.667 2.667 0 0 1-2.667 2.666H2.667A2.667 2.667 0 0 1 0 18.667V16h24v2.667Z"
        fill="#171796"
      />
      <path
        d="M21.333 4H2.667A2.667 2.667 0 0 0 0 6.667v2.666h24V6.667A2.667 2.667 0 0 0 21.333 4Z"
        fill="#D52B1E"
      />
      <path
        d="M7.606 5.624v7.69a4.394 4.394 0 0 0 8.788 0v-7.69H7.606Z"
        fill="#D52B1E"
      />
      <path
        d="M9.5 12.667h1.667v1.667H9.5v-1.667Zm1.667 1.667h1.666V16h-1.666v-1.666Zm0-3.334h1.666v1.667h-1.666V11Zm1.666 1.667H14.5v1.667h-1.667v-1.667Zm0-3.333H14.5V11h-1.667V9.334ZM14.5 11h1.56v1.667H14.5V11Zm-5-1.666h1.667V11H9.5V9.334Zm5 6.666h.537c.417-.471.726-1.04.889-1.666H14.5V16Zm-1.667 0v1.288a4.048 4.048 0 0 0 1.667-.781V16h-1.667ZM9.5 16v-1.666H8.074A4.03 4.03 0 0 0 8.964 16H9.5Zm-1.56-5H9.5v1.667H7.94V11Zm1.56 5v.507c.481.377 1.047.65 1.667.78V16H9.5Z"
        fill="#fff"
      />
      <path
        d="m16.505 6.094-1.332.527-.886-1.121-1.219.75L12 5.3l-1.069.951L9.714 5.5l-.887 1.123-1.33-.529-.748 1.387.887 1.908.117-.055c.52-.242 1.069-.441 1.629-.592l.027-.007a9.974 9.974 0 0 1 1.682-.3l.042-.005c.47-.04 1.264-.04 1.734 0l.039.004c.55.049 1.119.15 1.69.302l.023.006c.557.15 1.105.349 1.627.592l.117.055.887-1.907-.745-1.387Z"
        fill="#171796"
      />
      <path
        d="m11.092 6.454.147 1.709A9.76 9.76 0 0 1 12 8.129c.275 0 .54.017.76.034l.148-1.709L12 5.646l-.908.808Zm5.294-.035-1.132.449-.445 1.659a10.4 10.4 0 0 1 1.429.52l.724-1.558-.576-1.07Zm-8.771-.001-.578 1.07.725 1.558c.46-.207.94-.382 1.43-.52l-.447-1.66-1.13-.448Z"
        fill="#0193DD"
      />
    </FlagIconBase>
  ),
);
