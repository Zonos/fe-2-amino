import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const HT = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 24 25"
      width={width}
    >
      <path
        d="M24 18.556a2.667 2.667 0 0 1-2.667 2.666H2.667A2.667 2.667 0 0 1 0 18.556v-12a2.667 2.667 0 0 1 2.667-2.667h18.666A2.667 2.667 0 0 1 24 6.556v12Z"
        fill="#D21C33"
      />
      <path
        d="M21.333 3.889H2.667A2.667 2.667 0 0 0 0 6.556v6h24v-6a2.667 2.667 0 0 0-2.667-2.667Z"
        fill="#00209F"
      />
      <path d="M8 9.25h7.937v6.64H8V9.25Z" fill="#fff" />
      <path
        d="M15.937 14.97c-.999-.507-2.352-.824-3.934-.824-1.58 0-3.004.317-4.003.824v.92h7.937v-.92Z"
        fill="#006A16"
      />
      <path
        d="m10.349 11.702.776.874-.097.548-.168-.095-.151.572h-.04l-.071.302-1.32-.111.033-.942.318.092.038-.879.462.314.024-.532.196-.143Z"
        fill="#00209F"
      />
      <path
        d="M12.003 13.41v1.335l-1-.294-.254-.373-.175-.128.095-.337.151-.584h.23l.057-.493.896.874Zm-2.875-.604c.12-.142.342-.047.35 0 .007.048-.088.04-.175.12-.088.079-.064.325-.215.293-.15-.031.04-.413.04-.413Zm.54-.743c.153-.104.341.05.335.097-.006.048-.095.014-.2.066-.106.052-.152.295-.288.223-.136-.073.152-.386.152-.386Zm.635-.455c.166-.083.333.093.321.14-.012.047-.129-.036-.24.002-.112.038-.156.31-.282.22-.126-.088.201-.362.201-.362Z"
        fill="#D21C33"
      />
      <path
        d="m9.963 11.238.516.314-.057.15 1.391 1.54v.12l-1.446-1.62-.188-.032-.216-.473Zm-.74.464s.517.199.517.223c0 .024.095.182.095.182l1.882 1.526-.055.072-1.867-1.525-.27-.12-.302-.358Zm-.548.783s.596.083.604.107l.048.16 2.184 1.19-.095.057-2.129-1.177-.246-.016-.366-.321Z"
        fill="#F1B517"
      />
      <path
        d="m9.192 13.617 2.245.274-.213.256-.333.033.249.334-.12.136-.334-.366s-.103.532-.556.532c-.453 0-.597-.452-.597-.604 0-.151.04-.23.04-.23h-.429l.048-.365Z"
        fill="#F1B517"
      />
      <path
        d="m13.63 11.654-.811.962.033.556.209-.143.15.572h.04l.072.302 1.318-.111-.032-.942-.317.092-.04-.879-.46.314-.025-.532-.137-.19Z"
        fill="#00209F"
      />
      <path
        d="M12.003 13.41v1.335l.958-.294.232-.373.164-.128-.1-.337-.157-.584-.177.132-.062-.545-.858.794Zm2.789-.604c-.12-.142-.343-.047-.35 0-.008.048.088.04.175.12.088.079.064.325.215.293.15-.031-.04-.413-.04-.413Zm-.54-.743c-.153-.104-.34.05-.335.097.006.048.095.014.201.066.106.052.15.295.288.223.135-.073-.153-.386-.153-.386Zm-.635-.455c-.166-.083-.332.093-.32.14.012.047.128-.036.239.002.112.038.157.31.283.22.126-.088-.202-.362-.202-.362Z"
        fill="#D21C33"
      />
      <path
        d="m13.957 11.238-.515.314.1.15-1.347 1.54v.12l1.402-1.62.167-.032.193-.473Zm.74.464s-.516.199-.516.223c0 .024-.096.182-.096.182l-1.882 1.526.056.072 1.866-1.525.27-.12.302-.358Zm.548.783s-.596.083-.604.107a6.43 6.43 0 0 0-.047.16l-2.185 1.19.096.057 2.128-1.176.247-.016.365-.322Z"
        fill="#F1B517"
      />
      <path
        d="m14.729 13.617-2.244.274.212.256.332.033-.248.334.12.136.334-.366s.104.532.556.532c.454 0 .596-.452.596-.603 0-.151-.039-.23-.039-.23h.429l-.048-.366Z"
        fill="#F1B517"
      />
      <path
        d="M15.24 15.317s-.393.014-.806-.075c-.413-.09-.484-.252-.663-.216-.18.036-.596.19-.936.234-.342.043-.832.058-.832.058s-.45-.014-.792-.058c-.341-.044-.718-.198-.898-.234-.179-.036-.251.126-.664.216-.413.09-.808.075-.808.075l.108.19-.108.094c.934.017 1.365-.284 1.365-.284.467.31 1.797.318 1.797.318s1.371-.009 1.838-.318c0 0 .45.301 1.384.284l-.099-.093.114-.19Z"
        fill="#fff"
      />
      <path
        d="M12.195 12.485c0 .993-.087 1.8-.195 1.8-.107 0-.195-.807-.195-1.8 0-.994.088-1.8.195-1.8.108 0 .195.806.195 1.8Z"
        fill="#F1B517"
      />
      <path d="M11.623 14.173h.762v.763h-.762v-.763Z" fill="#D21C33" />
      <path
        d="M12.433 14.125c0 .088-.183.159-.41.159-.226 0-.409-.072-.409-.159 0-.087.183-.159.41-.159.226 0 .409.072.409.159Z"
        fill="#fff"
      />
      <path
        d="M12.433 14.888c0 .088-.183.158-.41.158-.226 0-.409-.07-.409-.158s.183-.159.41-.159c.226 0 .409.07.409.159Z"
        fill="#D21C33"
      />
      <path
        d="M13.676 10.352c-.153-.183-.545-.175-.812-.183-.266-.008-.4.087-.281-.04.119-.126.303-.094.497-.103.195-.008.229-.031.11-.094a.823.823 0 0 0-.607-.071c-.273.07-.445.24-.59.27-.146-.03-.328-.2-.6-.27a.834.834 0 0 0-.612.07c-.12.064-.088.087.107.095.195.008.377-.024.496.104.12.127-.016.03-.282.039-.266.008-.66 0-.812.183-.153.182.133.063.284.039.15-.024.373-.031.373-.031s-.373.11-.476.254c-.104.142.031.27.222.158.191-.111.485-.262.644-.278 0 0-.414.172-.596.32-.183.15.008.134.147.134a.692.692 0 0 0 .4-.144c.12-.087-.078.175-.11.342-.032.167.214.128.258 0 .043-.127.186-.381.186-.381s-.063.365-.055.612.09.262.153.15c.063-.11.283.067.283.067s.2-.178.264-.066c.064.11.124.095.132-.151a3.811 3.811 0 0 0-.056-.612s.143.254.187.381c.043.128.29.167.258 0-.031-.166-.23-.43-.11-.342a.69.69 0 0 0 .4.144c.14 0 .33.016.148-.133-.183-.149-.596-.32-.596-.32.16.015.453.166.643.277.191.112.326-.016.222-.158-.103-.144-.476-.254-.476-.254s.222.008.374.03c.15.026.436.144.283-.038Z"
        fill="#006A16"
      />
    </FlagIconBase>
  ),
);
