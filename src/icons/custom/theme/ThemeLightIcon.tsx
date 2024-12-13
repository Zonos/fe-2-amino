import { forwardRef } from 'react';

import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';
import { ThemeIconBase } from 'src/icons/icon-base/_ThemeIconBase';

export const ThemeLightIcon = forwardRef<SVGSVGElement, { className?: string }>(
  ({ className }, ref) => {
    const ids = useStableUniqueId(1);
    return (
      <ThemeIconBase ref={ref} className={className}>
        <g clipPath={`url(#${ids[0]})`}>
          <rect fill="#fff" height="64" rx="4" width="110" />
          <rect fill="#EAEBED" height="8" rx="2" width="40" x="7.999" y="33" />
          <rect fill="#EAEBED" height="8" rx="2" width="80" x="65" y="17" />
          <rect fill="#EAEBED" height="6" rx="2" width="35" x="65" y="53" />
          <rect fill="#EAEBED" height="4" rx="2" width="6.148" x="65" y="41" />
          <rect
            fill="#EAEBED"
            height="4"
            rx="2"
            width="18.444"
            x="77.296"
            y="41"
          />
          <rect fill="#EAEBED" height="4" rx="2" width="4" x="101.889" y="41" />
          <rect fill="#EAEBED" height="4" rx="2" width="6.148" x="65" y="33" />
          <rect
            fill="#EAEBED"
            height="4"
            rx="2"
            width="18.444"
            x="77.296"
            y="33"
          />
          <rect fill="#EAEBED" height="4" rx="2" width="4" x="101.889" y="33" />
          <rect fill="#EAEBED" height="6" rx="2" width="40" x="8" y="45" />
          <rect fill="#EAEBED" height="6" rx="2" width="32" x="8" y="59" />
          <path d="M56 11h1v61h-1z" fill="#EAEBED" />
          <path
            d="M18.418 22.163a.045.045 0 0 1-.045-.046v-.078a.04.04 0 0 1 .009-.026l1.409-2.046h-1.294a.045.045 0 0 1-.045-.046v-.168c0-.026.02-.046.045-.046h1.662c.024 0 .044.02.044.046v.064c0 .01-.003.019-.008.026l-1.428 2.049h1.392c.024 0 .044.02.044.046v.179c0 .025-.02.046-.044.046h-1.741Zm9.525 0a.044.044 0 0 1-.035-.017l-1.468-1.853v1.824c0 .025-.02.046-.045.046h-.177a.045.045 0 0 1-.044-.046v-2.364c0-.026.02-.046.044-.046h.076c.013 0 .026.006.034.017l1.466 1.855v-1.826c0-.026.02-.046.044-.046h.174c.024 0 .044.02.044.046v2.364c0 .025-.02.046-.044.046h-.07Zm7.064 0c-.347 0-.786-.138-.98-.523a.044.044 0 0 1 .02-.06l.156-.079a.044.044 0 0 1 .06.02c.13.257.473.392.744.392.206 0 .687-.043.687-.44.003-.31-.364-.38-.718-.449-.415-.08-.886-.173-.886-.634a.566.566 0 0 1 .162-.423c.158-.16.44-.257.755-.257.361 0 .648.07.876.41a.044.044 0 0 1-.014.063l-.144.085a.044.044 0 0 1-.06-.015c-.156-.25-.409-.287-.659-.29-.066 0-.65.011-.65.42 0 .248.264.315.666.39l.024.005c.428.082.914.175.914.698-.004.637-.73.687-.953.687ZM23.19 19.959c-.274 0-.506.088-.671.254-.175.176-.27.432-.268.722.003.47.298.978.939.978.648 0 .943-.507.943-.978 0-.486-.292-.976-.943-.976Zm0 2.207c-.826 0-1.202-.64-1.202-1.235 0-.61.372-1.224 1.202-1.224.348 0 .645.113.859.328.223.224.345.545.343.904-.003.59-.38 1.227-1.202 1.227Zm7.848-2.207c-.274 0-.506.088-.671.254-.175.175-.27.432-.268.722.003.47.298.978.939.978.647 0 .942-.507.942-.978 0-.486-.291-.976-.942-.976Zm0 2.207c-.826 0-1.202-.64-1.202-1.235 0-.61.372-1.224 1.202-1.224.348 0 .645.113.859.328.223.224.345.545.343.904-.003.59-.38 1.227-1.202 1.227Z"
            fill="#101116"
          />
          <path
            d="M23.19 20c-.262 0-.485.083-.642.242-.167.168-.258.414-.256.693.003.452.285.938.899.938.62 0 .902-.486.902-.938 0-.465-.279-.935-.902-.935Zm0 1.953c-.668 0-.975-.528-.979-1.018-.001-.3.098-.567.28-.75.173-.174.415-.266.7-.266.679 0 .983.51.983 1.016 0 .49-.308 1.018-.983 1.018ZM31.04 20c-.263 0-.486.083-.643.241-.167.168-.258.415-.256.694.002.452.285.938.899.938.62 0 .902-.486.902-.938 0-.465-.28-.935-.902-.935Zm0 1.953c-.669 0-.977-.528-.98-1.018-.001-.3.098-.567.28-.75.173-.174.415-.266.7-.266.678 0 .982.51.982 1.016 0 .49-.307 1.018-.982 1.018Zm-12.543-2.206c-.002 0-.004.002-.004.006v.169c0 .003.002.005.004.005h1.371l-1.453 2.108v.082c0 .003.002.005.004.005h1.74c.003 0 .005-.002.005-.005v-.18c0-.002-.002-.005-.004-.005h-1.47l1.473-2.111v-.068c0-.004-.001-.006-.003-.006h-1.663Zm1.663 2.456h-1.741a.085.085 0 0 1-.085-.086v-.078c0-.017.005-.034.015-.049l1.366-1.982h-1.218a.085.085 0 0 1-.084-.086v-.17c0-.047.038-.085.084-.085h1.663c.046 0 .084.038.084.086v.064a.086.086 0 0 1-.015.05l-1.384 1.985h1.315c.046 0 .084.038.084.086v.179a.085.085 0 0 1-.084.086Zm6.24-2.025 1.543 1.944h.07c.002 0 .004-.002.004-.005v-2.364c0-.004-.002-.006-.004-.006h-.174c-.002 0-.005.002-.005.006v1.942l-1.536-1.946-.079-.002c-.002 0-.004.002-.004.006v2.364c0 .003.002.005.004.005h.177c.002 0 .005-.002.005-.005v-1.94Zm1.613 2.025h-.07a.084.084 0 0 1-.065-.032l-1.397-1.762v1.708a.085.085 0 0 1-.085.086h-.177a.085.085 0 0 1-.085-.086v-2.364c0-.048.038-.086.085-.086h.076c.025 0 .05.011.066.032l1.393 1.765v-1.711c0-.048.038-.086.085-.086h.174c.046 0 .084.038.084.086v2.364a.085.085 0 0 1-.084.086Zm6.215-.663-.163.076c.184.375.608.507.943.507.213 0 .909-.047.912-.648 0-.489-.447-.575-.88-.658l-.025-.005c-.343-.063-.698-.13-.698-.428 0-.448.62-.461.69-.461.262.003.527.043.693.31l.15-.085c-.217-.331-.494-.398-.842-.398-.304 0-.576.092-.727.246a.527.527 0 0 0-.15.394c0 .428.434.513.853.595.354.068.754.144.75.488 0 .433-.508.48-.726.48-.284 0-.642-.142-.78-.413Zm.78.663c-.359 0-.814-.143-1.017-.545a.084.084 0 0 1 .038-.114l.157-.078a.086.086 0 0 1 .114.037c.123.243.449.37.708.37.194 0 .646-.04.646-.4.003-.277-.331-.341-.685-.409-.41-.08-.918-.18-.918-.674a.604.604 0 0 1 .173-.45c.165-.17.458-.27.784-.27.374 0 .672.072.91.427.012.02.017.044.012.066a.086.086 0 0 1-.04.055l-.144.085a.087.087 0 0 1-.115-.028c-.145-.234-.386-.269-.625-.272-.061 0-.609.011-.609.38 0 .2.195.27.633.35l.025.005c.421.081.946.182.946.738-.005.675-.761.727-.993.727ZM23.19 19.747c-.803 0-1.162.595-1.162 1.185 0 .575.364 1.194 1.162 1.194.794 0 1.158-.616 1.162-1.187.001-.348-.116-.659-.332-.875-.206-.207-.493-.317-.83-.317Zm0 2.46c-.853 0-1.242-.661-1.242-1.275 0-.63.384-1.265 1.242-1.265.359 0 .666.117.887.34.23.232.357.563.355.932-.003.61-.394 1.267-1.242 1.267Zm7.848-2.46c-.803 0-1.162.595-1.162 1.185 0 .575.364 1.194 1.162 1.194.794 0 1.158-.616 1.161-1.187.002-.348-.116-.659-.33-.875-.207-.207-.494-.317-.831-.317Zm0 2.46c-.854 0-1.242-.661-1.242-1.275 0-.63.384-1.265 1.242-1.265.359 0 .666.117.887.34.23.232.357.563.355.932-.003.61-.393 1.267-1.242 1.267Z"
            fill="#101116"
          />
          <path
            clipRule="evenodd"
            d="M12 17.902a3.348 3.348 0 0 0-3.222 4.263.03.03 0 0 0 .038.02l.453-.15a.074.074 0 0 1 .093.046l.028.08a2.764 2.764 0 1 0 4.576-2.852.03.03 0 0 0-.043.001l-.314.356a.074.074 0 0 1-.104.006l-.064-.056a2.179 2.179 0 1 0-2.632 3.459.03.03 0 0 0 .042-.01l.224-.418a.074.074 0 0 1 .1-.03l.075.04a1.594 1.594 0 1 0 .942-2.99.03.03 0 0 0-.033.03v.208a.03.03 0 0 0 .026.03 1.329 1.329 0 1 1-.37 0 .03.03 0 0 0 .025-.03v-.494c0-.04.033-.074.074-.074H12a1.913 1.913 0 1 1-.732 3.681.03.03 0 0 0-.038.014l-.232.431a.074.074 0 0 1-.1.03l-.075-.04a2.497 2.497 0 1 1 2.684-4.195.03.03 0 0 0 .04-.004l.323-.366a.074.074 0 0 1 .104-.006l.064.056a3.08 3.08 0 0 1-.375 4.907.03.03 0 0 0-.01.039l.095.184a.03.03 0 0 0 .042.011A3.348 3.348 0 0 0 12 17.902Zm1.336 6.126a.03.03 0 0 1 .04.013l.222.43c.02.036.065.05.102.03l.076-.043a3.667 3.667 0 1 0-5.243-2.01l.028.08a.074.074 0 0 0 .093.046l.464-.153a.03.03 0 0 1 .037.017 3.083 3.083 0 0 0 4.18 1.59ZM12 20.24a1.01 1.01 0 1 0 0 2.02 1.01 1.01 0 0 0 0-2.02Z"
            fill="#101116"
            fillRule="evenodd"
          />
          <path d="M0 11h111" stroke="#EAEBED" />
          <circle cx="5.5" cy="5.5" fill="#D92141" r="1.5" />
          <circle cx="10.5" cy="5.5" fill="#FABC00" r="1.5" />
          <circle cx="15.5" cy="5.5" fill="#2B9C4D" r="1.5" />
          <rect fill="#EAEBED" height="4" rx="2" width="6.148" x="65" y="63" />
          <rect
            fill="#EAEBED"
            height="4"
            rx="2"
            width="18.444"
            x="77.296"
            y="63"
          />
          <rect fill="#EAEBED" height="4" rx="2" width="4" x="101.889" y="63" />
        </g>
        <defs>
          <clipPath id={ids[0]}>
            <rect fill="#fff" height="64" rx="4" width="110" />
          </clipPath>
        </defs>
      </ThemeIconBase>
    );
  },
);
