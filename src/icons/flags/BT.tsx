import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const BT = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 24 24"
      width={width}
    >
      <path
        d="M.795 19.897c.482.475 1.142.77 1.872.77h18.666A2.667 2.667 0 0 0 24 18V6a2.64 2.64 0 0 0-.535-1.587L.795 19.897Z"
        fill="#FF4E11"
      />
      <path
        d="M21.333 3.333H2.667A2.667 2.667 0 0 0 0 6v12c0 .743.305 1.414.795 1.897l22.67-15.484a2.655 2.655 0 0 0-2.132-1.08Z"
        fill="#FFD521"
      />
      <path
        d="M21.283 6.986c-.24.016-.369.193-.514.193h-.257s.208-.29.321-.37c.112-.08.53-.112.626-.192a.34.34 0 0 0 .112-.193c-.208.145-.69.064-.898.112-.208.048-.386.273-.386.273s.24-.482.305-.691c.064-.209.064-.562.321-.755.257-.192.097-.434.097-.434s-.065.16-.24.306c-.177.144-.354.128-.338.402.017.272.032.272-.096.4-.128.13-.128.097-.337.45-.209.354-.306-.015-.756.146-.45.16-.658-.29-1.011-.241-.353.048-1.189-.113-1.525-.225-.338-.113-.161-.258-.981-.642-.819-.386-1.333-.016-1.012-.033.159-.008.403.055.61.12-.257-.019-.465.089-.465.089s.45.128.819.449c.37.321 0 .29-.482 0a2.278 2.278 0 0 0-1.43-.305c-.433.048-.32.192-.08.176.241-.016.788.145 1.222.306.433.16-.033.193-.033.193-.948-.563-1.365-.113-1.108-.21.258-.096.546.13.996.37.45.242-.642.097-.642.097s-.498-.208-.981-.257c-.482-.048-.85.417-.69.642.16.225.465.096.465.096-.346-.1-.241-.353-.016-.417.225-.064 1.093.16 1.334.257.24.096.337.466-.321.16-.659-.305-.418.049-.418.049-.643-.05.29.369-.113.257-.401-.113-.867.048-1.252.048-.386 0-.53.418-.53.418s.224-.129.506-.225c.281-.096 1.068.096 1.068.096-.321.322-.306.916-.306.916-.336.08-.658.69-.658.69.128-.208.578-.273.578-.273s.08.177-.128.434c-.208.257-.144.578-.144.578s.096-.257.225-.385c.127-.13.45-.113.45-.113-.145.337.401.546.401.546-.16.288.146.61.096.595-.047-.016-.562.16-.562.16s.708.016.337.112c-.37.096-1.043-.29-1.043-.29l-.787-.353s.337.322-.048.274c-.386-.048-.771.145-1.109-.08-.337-.226-.9-.354-.787-.145.112.21.273.418.273.418-.61-.13-.305.417-.754.37-.45-.05-.081.385-.514.256-.434-.129-.852.353-.852.353.145-.08.61.048.61.048-.176.064-.096.401-.096.401-.418.111-.305.74-.305.74-.353 0-.417.24-.562.4-.144.161-.482.161-.482.161.236.184.7.059.867.006-.152.098-.128.54-.128.54-.29.049-.032.482-.096.434-.065-.048-.225.064-.386.192a.88.88 0 0 1-.369.161c.112.145.37.16.37.16s-.194.37-.435.45c-.24.08-.915.24-1.092.258a2.97 2.97 0 0 1-.915-.097c-.353-.096-.723 0-1.012-.033-.29-.032-.466.258-.466.258s.24-.08.45-.032c.208.047.273.24.497.144.225-.097.691.129.691.129s-.16.096-.385.177c-.225.08-.53.176-.788.224-.256.048-.562.418-.353.24.209-.176.337-.031.626-.08.29-.048.563-.064.563-.064s-.193 0-.338.177c-.144.177-.546.338-.771.338-.225 0-.594.113-.803.385-.209.273-.466.322-.466.322s.16.176.402 0c.24-.178.289-.258.642-.322a5.71 5.71 0 0 0 .723-.193c-.193.161-.305.354-.626.402-.321.049-.82.433-1.012.627-.193.192-.53.338-.53.338.32.192.482-.049.82-.241.337-.193.513-.065.915-.178.402-.112.354-.449.482-.465.128-.015.466 0 .562-.16.097-.16.032-.29.274-.29.24 0 .336-.112.336-.112-.096.208-.336.386-.336.386.289.08.514-.193.803-.37.29-.177.482-.177.482-.177s-.177.305-.37.337c-.193.032-.417.37-.417.37.128-.273.738-.225.964-.418.224-.192.53-.514.722-.627.193-.112.386-.352.723-.657.337-.306.931-.241.931-.29 0-.048-.016.45-.016.45l-.562.048.354.257c-.225-.097-.546.353-.546.353l.556-.065.118.322c.177-.37.306-.29.306-.29.192.225.208.74.208.74s-.256-.066-.546.272c-.289.338.241.98.241.98s-.097.144 0 .418c.096.273.594.562 1.092.401.498-.16.45-.834.45-.834s.177-.178.144-.531c-.032-.354-.193-.546-.193-.546s.306-.112.498.097c.193.207.241.69.241.69s.193-.9-.096-1.124c-.289-.224-.996-.209-.996-.209-.016-.37-.337-.578-.418-.819-.08-.24.048-.835.048-.835l.401.033s-.032.144.257.353c.29.208.755.064.755.064s.53.048.787-.417c.257-.466-.225-.836-.225-.836-.08-.739-1.172-.32-1.172-.32.112-.498.594-.498.594-.498s-.562-.29-.883-.178c-.321.113-.21.916-.466.884-.257-.032-.29-.82-.08-1.43.208-.61 1.268-.643 2.28-.24 1.011.4 2.441.48 2.441.48-.047.194-.304.484-.304.484l-.45-.178.272.338c-.096.24-.353.418-.353.418.273.192.578-.193.578-.193l.113.466.273-.386s.561.402 1.027.578c.466.177 1.366.338 1.366.338s-.305.145.016.658c.321.514 1.06.658 1.06.658s.562.257 1.075-.193c.515-.45.097-1.268.097-1.268 0-.947-1.012-.65-1.012-.65.208-.41.699-.684.699-.684-.795-.465-1.132.45-1.727.643-.594.193-1.638-.37-1.686-.37-.048 0 .032-.096.048-.305.016-.208.498-.61.738-1.108.242-.498.178-1.317.178-1.317.32-.32.755-.08.755-.08-.016.337-.225.481-.225.481.24.016.353-.21.353-.21-.113.354.257.772.257.772l.112-.546.338.386-.208-.707c.642 0 1.316-.466 1.316-.466s.322.466.964.466c.642 0 1.285-.69 1.285-.996 0-.306-.578-.739-.578-.739s.225-.514-.626-.514c-.85 0-1.108 1.037-1.108 1.037s-.354-.153-.836-.025c-.481.128-1.268-.273-1.75-.514-.483-.24-1.157-.9-1.157-.9 0-.224.126-.578.126-.578s.693.048.485.128c-.21.08-.755.242-.32.274.432.032.85-.145.721 0-.128.144-.61.482-.417.482s.45-.242.579-.274c.128-.032.352.048.674.048.086 0 .176-.05.262-.12.33.158.82.624 1.055.859.29.288.465-.097.595-.273.074-.102-.13-.293-.349-.466l.107-.128c.018-.02.046-.034.072-.05l.369.134c.002.278-.007.655-.007.655.178-.126.186-.38.189-.593.253.088.474.154.615.159.466.016.77-.145 1.204-.193a.392.392 0 0 1 .466.354s.177-.128-.08-.386c-.257-.257-.595-.24-.595-.24 0-.37-.446-.354-.446-.354.373.209-.003.434-.003.434.048-.21-.418-.336-.418-.336s.305.143.113.319c-.12.11-.285.11-.491.078.024-.11.066-.28.136-.431.114-.241-.08-.482-.08-.482L20 7.641s.69-.112.883-.208c.193-.097.385-.178.867-.161.483.016.595-.257.595-.257-.21.13-.821-.045-1.062-.03ZM18.087 8.03c.161-.112.258-.016.258-.016l.126.29.162-.354.225.177-.127.224.482-.064-.048.16s-.172.155-.34.29a6.044 6.044 0 0 1-.996-.398c.053-.09.15-.234.258-.31Zm.546.85a.318.318 0 0 0-.108.123c-.122-.091-.236-.172-.293-.218a1.14 1.14 0 0 0-.205-.124c.204.052.42.12.637.197l-.031.023Zm.46-.065a.965.965 0 0 1 .086-.014l.002.035-.088-.021Zm.296.066c.044-.182.192-.29.192-.29-.006.128.015.24.04.334l-.232-.044Z"
        fill="#fff"
      />
    </FlagIconBase>
  ),
);
