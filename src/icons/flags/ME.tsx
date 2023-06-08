import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const ME = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(4);
  return (
    <FlagIconBase ref={ref} height={height} viewBox="0 0 16 12" width={width}>
      <g clipPath={`url(#${ids[3]})`}>
        <mask
          height="12"
          id={`${ids[0]}`}
          maskUnits="userSpaceOnUse"
          width="16"
          x="0"
          y="0"
        >
          <path d="M0 0h16v12H0z" fill="#fff" />
        </mask>
        <g mask={`url(#${ids[0]})`}>
          <path
            clipRule="evenodd"
            d="M0 0h16v12H0V0Z"
            fill="#E8AA00"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d="M2 2h12v8H2V2Z"
            fill="#C51918"
            fillRule="evenodd"
          />
          <mask
            height="8"
            id={`${ids[1]}`}
            maskUnits="userSpaceOnUse"
            width="12"
            x="2"
            y="2"
          >
            <path
              clipRule="evenodd"
              d="M2 2h12v8H2V2Z"
              fill="#fff"
              fillRule="evenodd"
            />
          </mask>
          <g mask={`url(#${ids[1]})`}>
            <path
              clipRule="evenodd"
              d="M10.115 7.876c.204 0 .37-.17.37-.378a.374.374 0 0 0-.37-.379.374.374 0 0 0-.369.379c0 .208.165.378.37.378Z"
              fill="#1E5E91"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d="M5.314 6.166c-.969-1.126.42-3.08.42-3.08s.207 1.167.975 1.953c0 .055-.072.138-.146.22a1.087 1.087 0 0 0-.13.168c-.068.123.164.193.276.193.05 0 .078.073.104.14.03.08.057.15.117.061.108-.161-.108-.517-.108-.517l.342-.36.115-.233h-.115v-.24l-.081.066s-.09-.214-.261-.214c-.172 0-.225-.098-.225-.098h.225c.113 0-.018-.15-.113-.227-.042-.035-.107-.023-.165-.012-.072.013-.134.024-.134-.055 0-.088.068-.1.147-.113a.356.356 0 0 0 .152-.05c.074-.053.173-.037.28-.02.057.01.116.02.175.02h.278c.1 0-.163.163-.163.163l.163.144.242.248-.12.072.25.242s-.086.138 0 .138c.034 0 .057.029.072.063.015-.034.038-.063.073-.063.085 0 0-.138 0-.138l.25-.242-.121-.072.242-.248.163-.144s-.263-.163-.163-.163h.279c.059 0 .118-.01.174-.02.108-.017.207-.033.28.02.045.032.1.041.152.05.079.014.147.025.147.113 0 .08-.062.068-.134.055-.058-.011-.122-.023-.165.012-.094.077-.225.227-.113.227h.226s-.054.098-.226.098c-.171 0-.26.214-.26.214l-.081-.066v.24h-.116l.116.233.341.36s-.215.356-.107.517c.059.09.086.02.117-.062.025-.066.053-.14.103-.14.113 0 .345-.07.277-.192-.028-.05-.08-.109-.13-.167-.074-.083-.147-.166-.147-.221.768-.786.976-1.952.976-1.952s1.388 1.953.42 3.079c-.969 1.126-1.68.786-1.68.786s.858.799.953.799c.013 0-.017-.074-.047-.147-.029-.072-.058-.144-.045-.143.028.001.082.067.137.133a.776.776 0 0 0 .117.125c.02.013.095-.014.166-.038.06-.02.115-.04.13-.033.059.03.043.09.029.148l-.01.044c-.002.013.074-.037.154-.089.085-.054.173-.112.18-.103l.004.006c.029.034.075.09-.265.351 0 .05.002.092.003.125.005.107.006.135-.067.135a.466.466 0 0 0-.13.035c-.134.048-.316.112-.448-.035-.183-.204-1.31-1.024-1.31-1.024l-.12.067s.412 1.14.633 1.147c.11.004-.057.11-.278.252-.223.142-.502.32-.606.464-.03.042-.055-.023-.073-.164-.018.141-.042.206-.073.164-.103-.144-.382-.322-.606-.464-.22-.141-.387-.248-.277-.252.22-.008.633-1.147.633-1.147l-.12-.067-.45.515s-.678.305-.86.51c-.133.146-.314.082-.449.034a.454.454 0 0 0-.13-.035c-.115 0-.154-.161 0-.359.09-.116.229-.132.36-.146a.544.544 0 0 0 .25-.066c.164-.107.433-.386.433-.386l.397-.356s-.712.34-1.68-.786Z"
              fill="#F6C540"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d="m6.217 8.515-.438-.767S5.207 6.43 5.207 6.27c0-.16-.23-.634-.23-.497 0 .138-.02 1.242-.02 1.242l.985 1.43v.17h.13l.145-.099Z"
              fill="#F6C540"
              fillRule="evenodd"
            />
            <path
              d="m9.72 7.483.067-.221.813.245-.066.22-.813-.244Z"
              fill="#F6C540"
            />
            <path
              d="m10.154 7.08.22.072-.215.69-.22-.073.215-.689Z"
              fill="#F6C540"
            />
            <path
              clipRule="evenodd"
              d="M8.069 2.646a1.306 1.306 0 0 0-.102-.035l-.003.01a.485.485 0 0 0-.116-.008V2.61l-.007.002a.957.957 0 0 0-.194.045c-.364.041-.552.202-.532.478.011.141.059.242.138.3v.084s.416.27.624.27c.208 0 .624-.27.624-.27v-.053c.114-.045.183-.158.196-.331.021-.284-.18-.446-.565-.481l-.001.011a1.685 1.685 0 0 0-.062-.02Zm.432.655v-.367a.25.25 0 0 1 .058.192c-.006.08-.025.138-.058.175Zm-1.248-.182v-.04.04Z"
              fill="#F6C540"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d="M6.977 5.18s.569-.107.877-.107c.276 0 .877.107.877.107 0 .68.191 1.096 0 1.56-.192.465-.66.242-.87.686-.271-.421-.637-.19-.884-.79-.247-.6.15-.876 0-1.456Z"
              fill="#1E5E91"
              fillRule="evenodd"
            />
            <mask
              height="3"
              id={`${ids[2]}`}
              maskUnits="userSpaceOnUse"
              width="3"
              x="6"
              y="5"
            >
              <path
                clipRule="evenodd"
                d="M6.977 5.18s.569-.107.877-.107c.276 0 .877.107.877.107 0 .68.191 1.096 0 1.56-.192.465-.66.242-.87.686-.271-.421-.637-.19-.884-.79-.247-.6.15-.876 0-1.456Z"
                fill="#fff"
                fillRule="evenodd"
              />
            </mask>
            <g mask={`url(#${ids[2]})`}>
              <path d="M6.977 6.599h1.754v.851H6.977z" fill="#5EAA22" />
            </g>
            <path
              clipRule="evenodd"
              d="M7.9 6.4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
              fill="#F6C540"
              fillRule="evenodd"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[3]}`}>
          <rect fill="#fff" height="12" rx="1" width="16" />
        </clipPath>
      </defs>
    </FlagIconBase>
  );
});
