import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const HT = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(4);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 16 12">
      <g clipPath={`url(#${ids[3]})`}>
        <mask
          id={`${ids[0]}`}
          width="16"
          height="12"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M0 0h16v12H0z" />
        </mask>
        <g mask={`url(#${ids[0]})`}>
          <path
            fill="#2E42A5"
            fillRule="evenodd"
            d="M0 0v12h16V0H0Z"
            clipRule="evenodd"
          />
          <mask
            id={`${ids[1]}`}
            width="16"
            height="12"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M0 0v12h16V0H0Z"
              clipRule="evenodd"
            />
          </mask>
          <g mask={`url(#${ids[1]})`}>
            <path
              fill="#E31D1C"
              fillRule="evenodd"
              d="M0 6v6h16V6H0Z"
              clipRule="evenodd"
            />
            <path fill="#fff" d="M3 2h10v8H3z" />
            <mask
              id={`${ids[2]}`}
              width="10"
              height="8"
              x="3"
              y="2"
              maskUnits="userSpaceOnUse"
            >
              <path fill="#fff" d="M3 2h10v8H3z" />
            </mask>
            <g mask={`url(#${ids[2]})`}>
              <path
                fill="#279E19"
                fillRule="evenodd"
                d="M3 8.385s2.4-1.064 5-.999c2.6.065 5 1.248 5 1.248V10H3V8.385Z"
                clipRule="evenodd"
              />
              <path
                fill="#026A16"
                fillRule="evenodd"
                d="M5.72 3.51a.094.094 0 0 0-.006.111c.16.254.866 1.257 2.01 1.257 1.103 0 1.924-.93 2.157-1.226a.1.1 0 0 0-.026-.15C9.685 3.4 9.302 3.2 8.86 3.2c-.597 0-1.135.255-1.135.255S6.924 3.2 6.414 3.2a.893.893 0 0 0-.694.31Z"
                clipRule="evenodd"
              />
              <path
                fill="#C51918"
                fillRule="evenodd"
                d="m7.895 7.407-.896-.567c-.524.242-.786.722-.786 1.44l.694 1.139h2.117l.5-1.14s.196-1.473-.5-1.71l-1.13.838Z"
                clipRule="evenodd"
              />
              <path
                fill="#0A328C"
                fillRule="evenodd"
                d="M5.934 5.816s-1.353.47-1.353 2.202l1.805.357s-.022-.993.518-1.458l-.97-1.101Z"
                clipRule="evenodd"
              />
              <path
                fill="#FFD018"
                d="m5.268 5.264.215-.218L8 7.523l-.215.218-2.517-2.477Zm-.787.581.177-.252 3.237 2.463-.177.252L4.48 5.845Zm-.538.965.14-.276 3.676 2.004-.139.276-3.677-2.003Z"
              />
              <path
                fill="#FECA00"
                fillRule="evenodd"
                d="m4.59 8.004 2.421.317-.136.396h-.384l.262.224.589.161v-.385h.516v.819H6.753l-.424-.595s-.357.411-.704.411c-.348 0-.69-.133-.69-.582v-.312L4.59 8.32v-.317Z"
                clipRule="evenodd"
              />
              <path
                fill="#0A328C"
                fillRule="evenodd"
                d="M9.808 5.723s1.586.563 1.586 2.295l-1.82.356s-.083-1.28-.644-1.746l.878-.905Z"
                clipRule="evenodd"
              />
              <path
                fill="#FFD018"
                d="m10.68 5.264-.225-.218-2.712 2.277.225.217 2.711-2.276Zm.819.581-.185-.252-3.37 2.463v.461l3.555-2.672Z"
              />
              <path
                fill="#FFD018"
                d="m12.058 6.811-.143-.278-4.058 1.972.143.278 4.058-1.972Z"
              />
              <path
                fill="#FECA00"
                fillRule="evenodd"
                d="m11.385 8.004-2.522.317.142.396h.4l-.272.224-.614.161v-.385H7.98v.819h1.152l.441-.595s.371.411.733.411.72-.133.72-.582v-.312l.358-.137v-.317Z"
                clipRule="evenodd"
              />
              <path
                fill="#FECA00"
                fillRule="evenodd"
                d="M7.692 4.679s-.164 1.203-.164 1.693.164 3.094.164 3.094h.42V6.372c0-.409-.247-1.693-.247-1.693h-.173Z"
                clipRule="evenodd"
              />
            </g>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[3]}`}>
          <rect width="16" height="12" fill="#fff" rx="1" />
        </clipPath>
      </defs>
    </FlagIconBase>
  );
});
