import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const PE = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(5);
  return (
    <FlagIconBase ref={ref} height={height} viewBox="0 0 16 12" width={width}>
      <g clipPath={`url(#${ids[4]})`}>
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
            d="M4 0h8.5v12H4V0Z"
            fill="#F7FCFF"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d="M12 0h4v12h-4V0ZM0 0h4v12H0V0Z"
            fill="#F50101"
            fillRule="evenodd"
          />
          <path
            d="m7.87 4.373.017.18c-.499.051-.769-.193-.769-.7 0-.502.264-.769.76-.772l.002.182c-.402.003-.588.19-.588.59 0 .398.18.56.579.52Zm.222 0-.017.18c.5.051.769-.193.769-.7 0-.502-.264-.769-.76-.772l-.001.182c.402.003.587.19.587.59 0 .398-.18.56-.578.52Z"
            fill="#A2BB6A"
          />
          <mask
            fill="#000"
            height="6"
            id={`${ids[1]}`}
            maskUnits="userSpaceOnUse"
            width="5"
            x="5.588"
            y="3.441"
          >
            <path d="M5.588 3.441h5v6h-5z" fill="#fff" />
            <path
              clipRule="evenodd"
              d="m8.043 4.453.021-.012v.023c.096.053.339.178.496.178.2 0 .473-.201.473-.201l.456.643s-.307.643-.072 1.43c.234.785-.013 1.391-1.057 1.458 0 0-.206.04-.296.102v.057c0-.014-.008-.028-.02-.04-.014.012-.021.026-.021.04v-.057c-.09-.063-.296-.102-.296-.102C6.683 7.905 6.435 7.3 6.67 6.513c.235-.786-.072-1.429-.072-1.429l.456-.643s.272.2.472.2c.158 0 .4-.124.497-.177v-.023l.02.012Z"
              fillRule="evenodd"
            />
          </mask>
          <path
            clipRule="evenodd"
            d="m8.043 4.453.021-.012v.023c.096.053.339.178.496.178.2 0 .473-.201.473-.201l.456.643s-.307.643-.072 1.43c.234.785-.013 1.391-1.057 1.458 0 0-.206.04-.296.102v.057c0-.014-.008-.028-.02-.04-.014.012-.021.026-.021.04v-.057c-.09-.063-.296-.102-.296-.102C6.683 7.905 6.435 7.3 6.67 6.513c.235-.786-.072-1.429-.072-1.429l.456-.643s.272.2.472.2c.158 0 .4-.124.497-.177v-.023l.02.012Z"
            fill="#E8AA00"
            fillRule="evenodd"
          />
          <path
            d="M8.064 4.44h.5v-.88l-.756.451.256.43Zm-.02.013-.247.435.246.14.247-.14-.247-.435Zm.02.011h-.5v.295l.259.143.241-.438Zm.969-.023.408-.29-.295-.416-.41.303.297.403Zm.456.643.45.215.127-.264-.17-.24-.407.289Zm-.072 1.43-.48.142.48-.143ZM8.36 7.971l-.032-.499-.031.002-.03.006.093.491Zm-.296.102-.284-.412-.216.15v.262h.5Zm-.02.016.35-.356-.35-.344-.35.344.35.356Zm-.021-.016h.5V7.81l-.216-.149-.284.412Zm-.296-.102.093-.49-.03-.007-.031-.002-.032.5ZM6.598 5.084l-.408-.289-.17.24.127.264.451-.215Zm.456-.643.297-.403-.41-.303-.295.417.408.289Zm.969.023.241.438.259-.143v-.295h-.5Zm0-.023.256-.43-.756-.45v.88h.5Zm.041 0-.256-.43s.001 0 0 0l-.011.007.493.87a2.254 2.254 0 0 0 .027-.016l.002-.001h.001l-.256-.43Zm.5.023v-.023h-1v.023h1Zm-.741.438c.056.031.16.086.277.134.101.041.278.106.46.106v-1c.021 0 .023.003 0-.003a.719.719 0 0 1-.082-.029 1.746 1.746 0 0 1-.172-.084l-.483.876Zm.737.24c.234 0 .447-.106.55-.16a2.072 2.072 0 0 0 .217-.137l.002-.001v-.001l-.296-.402-.297-.403h.001l-.003.002a.891.891 0 0 1-.18.099c-.026.008-.021.003.006.003v1Zm.065-.412.456.643.816-.578-.456-.643-.816.578Zm.864.354a62.671 62.671 0 0 0-.452-.215v.001l-.001.002-.002.004a.943.943 0 0 0-.02.046 2.604 2.604 0 0 0-.141.492c-.058.315-.081.755.065 1.242l.958-.286a1.665 1.665 0 0 1 .046-1.074l-.001.001V5.3l-.452-.215Zm-.551 1.572c.098.33.059.507.007.59-.043.068-.178.199-.617.227l.064.998c.605-.039 1.116-.244 1.399-.692.274-.434.24-.954.105-1.409l-.958.286ZM8.36 7.972l-.093-.49h-.001a.055.055 0 0 0-.005 0 2.057 2.057 0 0 0-.15.036c-.063.018-.21.06-.331.144l.568.823c-.023.016-.035.019-.018.013a.58.58 0 0 1 .106-.03.842.842 0 0 1 .016-.004h.002l-.094-.492Zm.204.16v-.058h-1v.057h1Zm-.87.315a.443.443 0 0 1-.13-.316h1a.557.557 0 0 0-.17-.397l-.7.713Zm0-.713a.557.557 0 0 0-.171.397h1a.443.443 0 0 1-.13.316l-.7-.713Zm.829.397v-.057h-1v.057h1Zm-.796-.159-.094.491h.002a.86.86 0 0 1 .122.035c.017.006.005.003-.019-.013l.569-.823a1.143 1.143 0 0 0-.331-.144 2.103 2.103 0 0 0-.155-.037l-.094.491ZM6.19 6.37c-.136.455-.17.975.105 1.41.283.447.794.652 1.399.691l.064-.998c-.44-.028-.574-.16-.617-.228-.052-.082-.091-.258.007-.589L6.19 6.37Zm.407-1.286-.451.215-.001-.002v-.001h-.001l.004.009a1.604 1.604 0 0 1 .081.289c.037.203.05.477-.039.776l.958.286a2.665 2.665 0 0 0-.096-1.78l-.002-.004V4.87l-.452.214Zm.048-.932-.456.643.816.578.456-.643-.816-.578Zm.88-.01c.028 0 .033.005.008-.003a1.074 1.074 0 0 1-.184-.101l-.296.403-.297.402h.001l.002.002.005.004a1.358 1.358 0 0 0 .06.04c.037.025.09.059.152.092.102.055.315.16.55.16v-1Zm.255-.116c-.04.022-.105.057-.173.084a.719.719 0 0 1-.081.029c-.024.006-.022.003 0 .003v1c.182 0 .358-.065.46-.106.117-.048.22-.103.277-.134l-.483-.876Zm.742.438v-.023h-1v.023h1Zm-.5-.023-.256.43h.001l.002.001.006.004.02.012.494-.87-.01-.006-.002-.001-.255.43Z"
            fill="#E8AA00"
            mask={`url(#${ids[1]})`}
          />
          <mask
            height="6"
            id={`${ids[2]}`}
            maskUnits="userSpaceOnUse"
            width="5"
            x="6"
            y="3"
          >
            <mask
              fill="#000"
              height="6"
              id={`${ids[3]}`}
              maskUnits="userSpaceOnUse"
              width="5"
              x="5.588"
              y="3.441"
            >
              <path d="M5.588 3.441h5v6h-5z" fill="#fff" />
              <path
                clipRule="evenodd"
                d="m8.043 4.453.021-.012v.023c.096.053.339.178.496.178.2 0 .473-.201.473-.201l.456.643s-.307.643-.072 1.43c.234.785-.013 1.391-1.057 1.458 0 0-.206.04-.296.102v.057c0-.014-.008-.028-.02-.04-.014.012-.021.026-.021.04v-.057c-.09-.063-.296-.102-.296-.102C6.683 7.905 6.435 7.3 6.67 6.513c.235-.786-.072-1.429-.072-1.429l.456-.643s.272.2.472.2c.158 0 .4-.124.497-.177v-.023l.02.012Z"
                fillRule="evenodd"
              />
            </mask>
            <path
              clipRule="evenodd"
              d="m8.043 4.453.021-.012v.023c.096.053.339.178.496.178.2 0 .473-.201.473-.201l.456.643s-.307.643-.072 1.43c.234.785-.013 1.391-1.057 1.458 0 0-.206.04-.296.102v.057c0-.014-.008-.028-.02-.04-.014.012-.021.026-.021.04v-.057c-.09-.063-.296-.102-.296-.102C6.683 7.905 6.435 7.3 6.67 6.513c.235-.786-.072-1.429-.072-1.429l.456-.643s.272.2.472.2c.158 0 .4-.124.497-.177v-.023l.02.012Z"
              fill="#fff"
              fillRule="evenodd"
            />
            <path
              d="M8.064 4.44h.5v-.88l-.756.451.256.43Zm-.02.013-.247.435.246.14.247-.14-.247-.435Zm.02.011h-.5v.295l.259.143.241-.438Zm.969-.023.408-.29-.295-.416-.41.303.297.403Zm.456.643.45.215.127-.264-.17-.24-.407.289Zm-.072 1.43-.48.142.48-.143ZM8.36 7.971l-.032-.499-.031.002-.03.006.093.491Zm-.296.102-.284-.412-.216.15v.262h.5Zm-.02.016.35-.356-.35-.344-.35.344.35.356Zm-.021-.016h.5V7.81l-.216-.149-.284.412Zm-.296-.102.093-.49-.03-.007-.031-.002-.032.5ZM6.598 5.084l-.408-.289-.17.24.127.264.451-.215Zm.456-.643.297-.403-.41-.303-.295.417.408.289Zm.969.023.241.438.259-.143v-.295h-.5Zm0-.023.256-.43-.756-.45v.88h.5Zm.041 0-.256-.43s.001 0 0 0l-.011.007.493.87a2.254 2.254 0 0 0 .027-.016l.002-.001h.001l-.256-.43Zm.5.023v-.023h-1v.023h1Zm-.741.438c.056.031.16.086.277.134.101.041.278.106.46.106v-1c.021 0 .023.003 0-.003a.719.719 0 0 1-.082-.029 1.746 1.746 0 0 1-.172-.084l-.483.876Zm.737.24c.234 0 .447-.106.55-.16a2.072 2.072 0 0 0 .217-.137l.002-.001v-.001l-.296-.402-.297-.403h.001l-.003.002a.891.891 0 0 1-.18.099c-.026.008-.021.003.006.003v1Zm.065-.412.456.643.816-.578-.456-.643-.816.578Zm.864.354a62.671 62.671 0 0 0-.452-.215v.001l-.001.002-.002.004a.943.943 0 0 0-.02.046 2.604 2.604 0 0 0-.141.492c-.058.315-.081.755.065 1.242l.958-.286a1.665 1.665 0 0 1 .046-1.074l-.001.001V5.3l-.452-.215Zm-.551 1.572c.098.33.059.507.007.59-.043.068-.178.199-.617.227l.064.998c.605-.039 1.116-.244 1.399-.692.274-.434.24-.954.105-1.409l-.958.286ZM8.36 7.972l-.093-.49h-.001a.055.055 0 0 0-.005 0 2.057 2.057 0 0 0-.15.036c-.063.018-.21.06-.331.144l.568.823c-.023.016-.035.019-.018.013a.58.58 0 0 1 .106-.03.842.842 0 0 1 .016-.004h.002l-.094-.492Zm.204.16v-.058h-1v.057h1Zm-.87.315a.443.443 0 0 1-.13-.316h1a.557.557 0 0 0-.17-.397l-.7.713Zm0-.713a.557.557 0 0 0-.171.397h1a.443.443 0 0 1-.13.316l-.7-.713Zm.829.397v-.057h-1v.057h1Zm-.796-.159-.094.491h.002a.86.86 0 0 1 .122.035c.017.006.005.003-.019-.013l.569-.823a1.143 1.143 0 0 0-.331-.144 2.103 2.103 0 0 0-.155-.037l-.094.491ZM6.19 6.37c-.136.455-.17.975.105 1.41.283.447.794.652 1.399.691l.064-.998c-.44-.028-.574-.16-.617-.228-.052-.082-.091-.258.007-.589L6.19 6.37Zm.407-1.286-.451.215-.001-.002v-.001h-.001l.004.009a1.604 1.604 0 0 1 .081.289c.037.203.05.477-.039.776l.958.286a2.665 2.665 0 0 0-.096-1.78l-.002-.004V4.87l-.452.214Zm.048-.932-.456.643.816.578.456-.643-.816-.578Zm.88-.01c.028 0 .033.005.008-.003a1.074 1.074 0 0 1-.184-.101l-.296.403-.297.402h.001l.002.002.005.004a1.358 1.358 0 0 0 .06.04c.037.025.09.059.152.092.102.055.315.16.55.16v-1Zm.255-.116c-.04.022-.105.057-.173.084a.719.719 0 0 1-.081.029c-.024.006-.022.003 0 .003v1c.182 0 .358-.065.46-.106.117-.048.22-.103.277-.134l-.483-.876Zm.742.438v-.023h-1v.023h1Zm-.5-.023-.256.43h.001l.002.001.006.004.02.012.494-.87-.01-.006-.002-.001-.255.43Z"
              fill="#fff"
              mask={`url(#${ids[3]})`}
            />
          </mask>
          <g mask={`url(#${ids[2]})`}>
            <path d="M6.652 4.364h1.391v1.909H6.652z" fill="#67BAFF" />
            <path d="M8.043 4.364h1.391v1.909H8.043z" fill="#fff" />
            <path d="M6.478 6.455h3.478v2.182H6.478z" fill="#C51918" />
            <path d="M8.717 6.137h-.174V4.83h.174v1.307Z" fill="#C9A951" />
            <path
              d="m8.647 5.543-.085.151-.3-.167.085-.152.3.168Zm0-.363-.085.15-.3-.167.085-.152.3.168Z"
              fill="#C9A951"
            />
            <path
              d="m8.61 5.543.085.151.3-.167-.085-.152-.3.168Zm0-.363.085.15.3-.167-.085-.152-.3.168Z"
              fill="#C9A951"
            />
            <path
              clipRule="evenodd"
              d="M7.688 4.785c-.105.092-.037.427-.209.427s-.413-.251-.474-.086c-.061.166 0 .11 0 .251 0 .141-.146.533-.073.6.073.066.147.24.134.158-.012-.081-.068-.201-.045-.332-.022-.134.123-.264.123-.264s-.015.14-.027.192c0 0-.048.105-.028.175 0 0 .049.197.069.21 0 0 .013-.465.028-.542.015-.077.122.086.157.068 0 0 .012.319-.006.357 0 0-.037.075-.024.1 0 0 .035.087.065.061l.016-.087s-.018-.051.01-.168c0 0 .028-.257.04-.201 0 0-.005.121.009.184 0 0 .021.155.026.172 0 0 .105.15.108.087 0 0-.101-.12-.08-.212 0 0-.057-.258.023-.316 0 0 .214-.099.226-.267 0 0 .031-.193.037-.281 0 0-.047-.026.05-.072 0 0 .156-.06.059-.143"
              fill="#D18219"
              fillRule="evenodd"
            />
          </g>
          <path
            d="m6.1 3.843.387.31c-.504.829-.387 1.609-.387 2.11 0 .925.695 1.992 1.905 1.992.9 0 1.878-.7 2.109-1.556.181-.674-.236-2.257-.55-2.67l.372-.186c.488.642 1.414 2.111 1.143 3.116-.352 1.306-1.735 2.296-3.074 2.296C6.13 9.255 5.1 7.673 5.1 6.263c0-.716.41-1.449 1-2.42Z"
            fill="#00A854"
          />
          <path
            clipRule="evenodd"
            d="M8 7.6c.552 0 1-.224 1-.5s-.448-.5-1-.5-1 .224-1 .5.448.5 1 .5Z"
            fill="#FDD200"
            fillRule="evenodd"
          />
          <path d="M6.5 8h3v1h-3z" fill="#CA0000" />
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[4]}`}>
          <rect fill="#fff" height="12" rx="1" width="16" />
        </clipPath>
      </defs>
    </FlagIconBase>
  );
});
