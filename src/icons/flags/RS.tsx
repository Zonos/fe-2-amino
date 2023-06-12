import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const RS = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(3);
  return (
    <FlagIconBase ref={ref} height={height} viewBox="0 0 16 12" width={width}>
      <g clipPath={`url(#${ids[2]})`}>
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
            d="M0 0v12h16V0H0Z"
            fill="#4857A1"
            fillRule="evenodd"
          />
          <mask
            height="12"
            id={`${ids[1]}`}
            maskUnits="userSpaceOnUse"
            width="16"
            x="0"
            y="0"
          >
            <path
              clipRule="evenodd"
              d="M0 0v12h16V0H0Z"
              fill="#fff"
              fillRule="evenodd"
            />
          </mask>
          <g clipRule="evenodd" fillRule="evenodd" mask={`url(#${ids[1]})`}>
            <path d="M0 0v4h16V0H0Z" fill="#C51918" />
            <path d="M0 8v4h16V8H0Z" fill="#F7FCFF" />
            <path
              d="m5.26 1.348-.064-.244.171.047-.002-.01c.754.07 1.922.447 2.142.84.085.151.002.28-.106.448l-.05.078c-.054.088-.103.171-.149.25-.17.288-.3.512-.505.624l.004.64-3.369-.028-.004-.644c-.175-.12-.298-.329-.452-.591a6.88 6.88 0 0 0-.2-.329c-.107-.168-.19-.296-.105-.448.166-.296.913-.589 1.593-.744.128-.043.262-.083.394-.121l.055.037a3.72 3.72 0 0 1 .17-.02l.08.171h.264s.166.464.166.721a.86.86 0 0 1-.166.47v.178l.091.008c0-.016.001-.032.004-.05.015-.084.064-.146.109-.138.045.008.07.083.054.168a.29.29 0 0 1-.01.038c.178.023.377.055.566.088.072-.132.16-.261.243-.385.216-.32.406-.6.229-.768a.512.512 0 0 0-.175-.09 5.826 5.826 0 0 0-.82-.138l-.007-.035a31.083 31.083 0 0 0-.15-.023Zm1.282 1.55.152.032.001.098c.334-.238.568-.778.588-.955.012-.105-.163-.227-.439-.34.126.235-.05.469-.271.76-.084.112-.174.231-.256.362l.083.016a.266.266 0 0 1 .01-.081c.022-.084.075-.142.12-.13.044.012.062.09.04.172a.273.273 0 0 1-.028.067ZM4.82 2.675v-.198s-.143-.15-.166-.465a2.396 2.396 0 0 1 .065-.629c-.2.026-.411.064-.617.11-.165.04-.298.088-.355.142-.177.167.013.448.23.768.08.12.164.245.235.371.121-.025.244-.048.358-.066a.282.282 0 0 1-.01-.053c-.008-.086.023-.16.069-.163.045-.004.088.062.096.148a.286.286 0 0 1 0 .046c.033-.005.065-.008.095-.011Zm-.978.18a5.15 5.15 0 0 0-.255-.36c-.226-.3-.405-.537-.262-.777-.323.121-.54.251-.529.356.019.167.227.655.53.91V2.98l.308-.077a.273.273 0 0 1-.031-.065c-.027-.082-.013-.16.03-.174.044-.014.1.041.127.123.01.029.014.057.014.083l.068-.016Z"
              fill="#F6C540"
            />
            <path
              d="M4.297 1.342a.145.145 0 0 0 .082.025c.077 0 .14-.059.14-.132 0-.072-.063-.131-.14-.131a.141.141 0 0 0-.125.072.145.145 0 0 0-.2.036.145.145 0 0 0-.09-.03c-.077 0-.14.059-.14.131l.001.012a.143.143 0 0 0-.109-.049.138.138 0 0 0-.138.112.143.143 0 0 0-.11-.05.138.138 0 0 0-.137.104.145.145 0 0 0-.082-.025.14.14 0 0 0-.133.09.146.146 0 0 0-.062-.013.138.138 0 0 0-.138.109.149.149 0 0 0-.028-.003.136.136 0 0 0-.14.13.149.149 0 0 0-.025-.002.136.136 0 0 0-.138.159.149.149 0 0 0-.028-.003c-.077 0-.14.059-.14.132 0 .055.036.103.087.122a.125.125 0 0 0-.004.034c0 .055.036.103.087.122a.125.125 0 0 0-.004.034c0 .071.06.129.134.132a.129.129 0 0 0-.052.102c0 .073.063.132.14.132.078 0 .14-.06.14-.132a.136.136 0 0 0-.134-.132.129.129 0 0 0 .051-.102.132.132 0 0 0-.087-.122.125.125 0 0 0 .005-.034.132.132 0 0 0-.088-.122.125.125 0 0 0 .002-.061c.01.002.019.003.029.003a.136.136 0 0 0 .14-.13.149.149 0 0 0 .025.002c.07 0 .127-.047.138-.11a.14.14 0 0 0 .16-.088.146.146 0 0 0 .146-.01.128.128 0 0 0 .023.048.126.126 0 0 0-.027.078c0 .07.06.129.134.131a.129.129 0 0 0-.051.103c0 .055.036.103.087.122a.125.125 0 0 0-.004.034c0 .055.036.103.087.122a.125.125 0 0 0-.005.034c0 .073.063.132.14.132.078 0 .14-.06.14-.132a.132.132 0 0 0-.087-.122.125.125 0 0 0 .004-.034.132.132 0 0 0-.087-.122.125.125 0 0 0 .005-.034c0-.071-.06-.13-.135-.132a.126.126 0 0 0 .025-.18.126.126 0 0 0 0-.156.127.127 0 0 0 .025-.058c.026.03.066.05.11.05.078 0 .14-.059.14-.132v-.012a.143.143 0 0 0 .226-.011c.025.019.056.03.09.03.054 0 .102-.03.125-.073Zm-.83.26a.143.143 0 0 0 .114-.054.143.143 0 0 0-.113-.054c.014 0 .026-.011.026-.024a.026.026 0 0 0-.026-.025.026.026 0 0 0-.026.025c0 .013.012.024.026.024-.03 0-.06.009-.082.025a.132.132 0 0 0-.055-.077.125.125 0 0 0 .024.106.126.126 0 0 0-.023.108.132.132 0 0 0 .054-.08.145.145 0 0 0 .082.025Zm0 .048a.143.143 0 0 0-.112.054.143.143 0 0 0 .113.053.143.143 0 0 0 .113-.053.143.143 0 0 0-.113-.054Zm0 0c.015 0 .027-.011.027-.024a.026.026 0 0 0-.026-.025.026.026 0 0 0-.026.025c0 .013.012.024.026.024Zm-.08-.073a.137.137 0 0 1-.032-.03.137.137 0 0 1 .03-.028.125.125 0 0 1 .001.058Zm.382.629a.147.147 0 0 0-.053-.01.139.139 0 0 0-.135.098.15.15 0 0 0 .052.01.14.14 0 0 0 .136-.098Zm-.083-.156a.147.147 0 0 0-.053-.01.139.139 0 0 0-.135.098c.016.006.034.01.053.01.065 0 .12-.042.135-.098Zm-.13-.166h-.005a.145.145 0 0 0-.089.03h.006a.145.145 0 0 0 .088-.03Zm-.745.546h-.006a.145.145 0 0 0-.088.03h.006a.145.145 0 0 0 .088-.03Zm-.036-.224a.139.139 0 0 1-.135.098.147.147 0 0 1-.053-.01.139.139 0 0 1 .136-.098.13.13 0 0 1 .052.01Zm-.083-.156a.139.139 0 0 1-.135.098.147.147 0 0 1-.053-.01.139.139 0 0 1 .136-.098.13.13 0 0 1 .052.01Zm-.107-.163a.136.136 0 0 0 .109.102.136.136 0 0 0-.109-.102Zm.277-.025a.134.134 0 0 1-.114-.13V1.73a.134.134 0 0 1 .114.13v.002Zm.164-.107a.134.134 0 0 1-.11-.152.134.134 0 0 1 .11.152Zm.16-.088a.131.131 0 0 1-.077-.118c0-.015.003-.028.007-.041a.131.131 0 0 1 .078.118.125.125 0 0 1-.007.04Zm.42-.177a.127.127 0 0 1-.028-.102.127.127 0 0 1 .028.102Zm.22-.165a.123.123 0 0 0 .03.071.127.127 0 0 0-.03-.07Zm.256.06a.126.126 0 0 1-.029-.173c.032.024.052.06.052.101a.128.128 0 0 1-.023.072Zm.215-.043a.13.13 0 0 1-.058-.107c0-.02.005-.04.015-.059a.13.13 0 0 1 .057.107.125.125 0 0 1-.014.06Zm-1.409.414c.014 0 .026-.01.026-.024 0-.013-.012-.024-.026-.024-.014 0-.026.01-.026.024 0 .013.012.024.026.024Zm-.165.128c.014 0 .025-.01.025-.024s-.011-.024-.025-.024c-.015 0-.026.01-.026.024 0 .013.011.024.026.024Zm-.166.156c.014 0 .026-.01.026-.024s-.012-.024-.026-.024c-.014 0-.026.01-.026.024 0 .013.012.024.026.024Zm.083.156c.014 0 .025-.01.025-.024s-.011-.024-.025-.024c-.014 0-.026.01-.026.024 0 .013.012.024.026.024Zm.083.156c.014 0 .025-.01.025-.024a.025.025 0 0 0-.025-.024c-.015 0-.026.01-.026.024 0 .013.011.024.026.024Zm.108.21c0 .013-.011.024-.026.024-.014 0-.025-.01-.025-.024 0-.013.011-.024.025-.024.015 0 .026.01.026.024Zm.223-.912a.025.025 0 0 0 .025-.024.025.025 0 0 0-.025-.025.026.026 0 0 0-.026.025c0 .013.012.024.026.024Zm.195-.077c.015 0 .026-.01.026-.024s-.011-.024-.026-.024c-.014 0-.025.01-.025.024 0 .013.011.024.025.024Zm.467-.14c.014 0 .026-.012.026-.025 0-.013-.012-.024-.026-.024-.014 0-.025.01-.025.024s.011.024.025.024Zm.249-.095a.025.025 0 0 0 .025-.025.025.025 0 0 0-.025-.024c-.014 0-.026.011-.026.024 0 .014.012.025.026.025Zm.206-.03a.026.026 0 0 0 .026-.025c0-.013-.012-.024-.026-.024-.014 0-.025.01-.025.024s.011.024.025.024Zm.208-.048a.026.026 0 0 0 .026-.025c0-.013-.012-.024-.026-.024-.014 0-.026.011-.026.024 0 .014.012.025.026.025Zm-.911.546c.014 0 .026-.011.026-.024a.026.026 0 0 0-.026-.025.026.026 0 0 0-.026.025c0 .013.012.024.026.024Zm.083.234c.014 0 .025-.01.025-.024s-.011-.024-.025-.024c-.014 0-.026.01-.026.024 0 .013.012.024.026.024Zm.082.156c.015 0 .026-.01.026-.024s-.011-.024-.026-.024c-.014 0-.025.01-.025.024 0 .013.011.024.025.024Zm.083.156c.014 0 .026-.01.026-.024 0-.013-.012-.024-.026-.024-.014 0-.025.01-.025.024 0 .013.011.024.025.024Zm3.644.234c.014 0 .026-.01.026-.024 0-.013-.012-.024-.026-.024-.014 0-.025.01-.025.024 0 .013.011.024.025.024Zm-.14-.024c0 .073.063.132.14.132.077 0 .14-.06.14-.132a.129.129 0 0 0-.051-.102.136.136 0 0 0 .134-.132.125.125 0 0 0-.005-.034.132.132 0 0 0 .088-.122.125.125 0 0 0-.005-.034.132.132 0 0 0 .088-.122c0-.073-.063-.132-.14-.132-.01 0-.02 0-.029.003a.125.125 0 0 0 .003-.027c0-.073-.063-.132-.14-.132-.009 0-.017 0-.026.002a.136.136 0 0 0-.14-.13.118.118 0 0 0-.027.003.138.138 0 0 0-.138-.11.146.146 0 0 0-.063.015.14.14 0 0 0-.133-.091c-.03 0-.059.01-.081.025a.138.138 0 0 0-.137-.104.143.143 0 0 0-.11.05.138.138 0 0 0-.139-.112.143.143 0 0 0-.109.05v-.013c0-.072-.062-.131-.14-.131a.145.145 0 0 0-.088.03.145.145 0 0 0-.2-.035.141.141 0 0 0-.125-.073c-.078 0-.14.059-.14.131 0 .073.062.132.14.132.03 0 .059-.01.082-.025a.145.145 0 0 0 .214.043c.025.036.068.06.118.06a.143.143 0 0 0 .109-.049v.012c0 .073.062.132.14.132.044 0 .084-.02.11-.05a.127.127 0 0 0 .025.058.126.126 0 0 0 0 .156.126.126 0 0 0 .024.18.136.136 0 0 0-.134.132c0 .011.002.023.005.034a.132.132 0 0 0-.088.122c0 .012.002.023.005.034a.132.132 0 0 0-.088.122c0 .073.063.132.14.132.078 0 .14-.06.14-.132a.125.125 0 0 0-.004-.034.132.132 0 0 0 .087-.122.125.125 0 0 0-.005-.034.132.132 0 0 0 .088-.122.129.129 0 0 0-.052-.103.136.136 0 0 0 .135-.131c0-.03-.01-.057-.027-.078a.128.128 0 0 0 .023-.048.145.145 0 0 0 .145.01.14.14 0 0 0 .16.089.14.14 0 0 0 .138.109c.01 0 .018 0 .026-.002.001.072.063.13.14.13.01 0 .02-.001.029-.003a.126.126 0 0 0 .001.06.132.132 0 0 0-.087.123c0 .012.001.023.005.034a.132.132 0 0 0-.088.122c0 .041.02.078.052.102a.136.136 0 0 0-.135.132Zm-.44-.985a.145.145 0 0 1-.195-.03.145.145 0 0 1 .195-.029.125.125 0 0 0 0 .059Zm.03-.03a.126.126 0 0 1 .024.109.132.132 0 0 1-.055-.08.137.137 0 0 0 .032-.028Zm0 0a.137.137 0 0 0-.03-.028.132.132 0 0 1 .055-.077.125.125 0 0 1-.024.106Zm-.225.747a.139.139 0 0 0-.136-.098.147.147 0 0 0-.052.01c.016.056.07.098.135.098a.147.147 0 0 0 .053-.01Zm.082-.156a.139.139 0 0 0-.135-.098.147.147 0 0 0-.052.01c.015.056.07.098.135.098a.147.147 0 0 0 .052-.01Zm.036-.225a.145.145 0 0 0-.088-.03l-.006.001c.024.018.055.03.089.03h.005Zm.108-.21a.143.143 0 0 0-.113-.053.143.143 0 0 0-.113.054.143.143 0 0 0 .113.053.143.143 0 0 0 .113-.053Zm-.942-.36a.13.13 0 0 0 .058-.108.125.125 0 0 0-.015-.059.13.13 0 0 0-.058.107.14.14 0 0 0 .015.06Zm.214.042a.126.126 0 0 0 .029-.173.126.126 0 0 0-.029.173Zm.257-.06a.127.127 0 0 1-.03.071.127.127 0 0 1 .03-.07Zm.22.165a.127.127 0 0 0 .028-.102.127.127 0 0 0-.029.102Zm.419.177a.131.131 0 0 0 .077-.118.125.125 0 0 0-.007-.041.131.131 0 0 0-.077.118c0 .014.002.028.007.04Zm.16.088a.134.134 0 0 0 .11-.152.134.134 0 0 0-.11.152Zm.333.234a.136.136 0 0 0 .108-.102.136.136 0 0 0-.108.102Zm-.055-.259v.002a.135.135 0 0 1-.114.13V1.86c0-.065.05-.119.114-.13Zm.056.32a.147.147 0 0 1 .053-.01c.065 0 .12.042.135.098a.147.147 0 0 1-.052.01.139.139 0 0 1-.136-.098Zm-.082.156a.147.147 0 0 1 .052-.01c.065 0 .12.042.135.098a.147.147 0 0 1-.052.01.139.139 0 0 1-.135-.098Zm.052.254a.145.145 0 0 1-.088-.03h.005a.14.14 0 0 1 .088.03h-.005Zm0-.108c.014 0 .026-.01.026-.024 0-.013-.012-.024-.026-.024-.014 0-.026.01-.026.024 0 .013.012.024.026.024Zm.083-.156c.014 0 .026-.01.026-.024s-.012-.024-.026-.024c-.014 0-.026.01-.026.024 0 .013.012.024.026.024Zm.083-.156c.014 0 .025-.01.025-.024s-.011-.024-.025-.024c-.015 0-.026.01-.026.024 0 .013.011.024.026.024Zm-.166-.156c.014 0 .026-.01.026-.024s-.012-.024-.026-.024c-.014 0-.026.01-.026.024 0 .013.012.024.026.024Zm-.166-.128c.015 0 .026-.01.026-.024 0-.013-.011-.024-.026-.024-.014 0-.025.01-.025.024 0 .013.011.024.025.024Zm-.165-.106a.025.025 0 0 0 .025-.024.025.025 0 0 0-.025-.025.026.026 0 0 0-.026.025c0 .013.012.024.026.024Zm-.196-.077c.014 0 .026-.01.026-.024s-.012-.024-.026-.024c-.014 0-.025.01-.025.024 0 .013.011.024.025.024Zm-.218-.08c.014 0 .025-.01.025-.023a.025.025 0 0 0-.025-.025.026.026 0 0 0-.026.025c0 .013.012.024.026.024Zm-.249-.06c.014 0 .026-.012.026-.025 0-.013-.012-.024-.026-.024-.014 0-.025.01-.025.024s.011.024.025.024Zm-.248-.095a.025.025 0 0 0 .025-.025.025.025 0 0 0-.025-.024c-.014 0-.026.011-.026.024 0 .014.012.025.026.025Zm-.207-.03a.026.026 0 0 0 .026-.025c0-.013-.012-.024-.026-.024-.014 0-.025.01-.025.024s.011.024.025.024Zm-.207-.048a.025.025 0 0 0 .025-.025.025.025 0 0 0-.025-.024c-.014 0-.026.011-.026.024 0 .014.012.025.026.025Zm.91.39c.015 0 .026-.011.026-.024a.025.025 0 0 0-.025-.025.026.026 0 0 0-.026.025c0 .013.012.024.026.024Zm0 .156c.015 0 .026-.011.026-.024a.025.025 0 0 0-.025-.025.026.026 0 0 0-.026.025c0 .013.012.024.026.024Zm-.082.234c.014 0 .026-.01.026-.024s-.012-.024-.026-.024c-.014 0-.026.01-.026.024 0 .013.012.024.026.024Zm-.083.156c.014 0 .026-.01.026-.024s-.012-.024-.026-.024c-.014 0-.026.01-.026.024 0 .013.012.024.026.024Zm-.083.156c.014 0 .026-.01.026-.024 0-.013-.012-.024-.026-.024-.014 0-.025.01-.025.024 0 .013.011.024.025.024Z"
              fill="#fff"
            />
            <path
              d="m5.11.46-.219.007-.004.341-.404.005.002.208.4-.006-.006.39.219-.007.005-.385.397-.006V.8l-.393.005.004-.344Z"
              fill="#F6C540"
            />
            <path
              d="M2.02 4.003h5.943v4.756s-.18 2.37-2.972 2.37c-2.791 0-2.971-2.37-2.971-2.37V4.003Z"
              fill="#C51918"
            />
            <path
              d="M3.813 4.167c-.054 0-.138.037-.25.08-.11.04-.227.131-.113.221s.277.289.277.215c0-.074.195-.146.195-.11 0 .036-.06.11.098.11s.24.044.07.044c-.168 0-.186.073-.296.073-.11 0-.344-.074-.344-.117 0-.044.136.214.277.214.142 0 .222.125.293.062.07-.062.063-.062.177-.062.115 0 .073-.253.073-.253s-.402-.477-.457-.477Zm2.294 0c.054 0 .138.037.25.08.11.04.227.131.113.221s-.277.289-.277.215c0-.074-.195-.146-.195-.11 0 .036.06.11-.098.11s-.24.044-.07.044c.168 0 .187.073.296.073.11 0 .344-.074.344-.117 0-.044-.135.214-.277.214-.141 0-.222.125-.293.062-.07-.062-.062-.062-.177-.062-.114 0-.073-.253-.073-.253s.402-.477.457-.477Z"
              fill="#E8AA00"
            />
            <path
              d="M6.835 4.685c.114.25-.759 1.18-.759 1.18h-.098c-.04 0-.117-.095-.21-.21a2.918 2.918 0 0 0-.205-.24c-.135-.138-.064-.253.003-.361.02-.033.04-.066.054-.098a.447.447 0 0 0 .038-.128.634.634 0 0 1 .039-.143c.042-.116.188-.265.29-.369.04-.04.072-.073.09-.095.054-.068.012-.068-.101-.067h-.051c-.152 0-.44.067-.527.145-.087.078-.177.095-.31.095-.134 0-.051.085.07.142-.13.023-.214.228-.264.41-.026-.182-.086-.387-.216-.41.121-.057.203-.142.07-.142s-.224-.017-.31-.095c-.087-.078-.376-.145-.527-.145H3.86c-.114-.001-.155-.001-.1.067.017.022.05.055.089.095.101.104.248.253.29.369a.634.634 0 0 1 .038.143.49.49 0 0 0 .038.128.875.875 0 0 0 .054.098c.067.108.139.223.004.36-.072.074-.143.162-.206.24-.092.116-.169.21-.21.21H3.76s-.873-.93-.759-1.18c.044-.096.115-.187.174-.263.093-.12.156-.2.03-.2-.204 0-1.018.487-1.018 1.584s.075 1.72.25 2.158c.119.298.01.588-.071.803a.834.834 0 0 0-.07.247c0 .195.32.024.32-.098 0-.058.044.029.09.12.051.1.105.205.105.127 0-.083.05-.171.096-.248.035-.061.067-.116.067-.156 0-.04.045-.04.095-.037.064.002.137.004.137-.079 0-.056.023-.067.051-.081.048-.023.11-.054.11-.305 0-.186.04-.12.086-.044.041.07.088.147.113.044.003-.01.03-.053.061-.107a2.04 2.04 0 0 0 .127-.227 1.67 1.67 0 0 1-.293.557 5.629 5.629 0 0 0-.255.358s.15.08.255 0c.06-.044.063-.002.067.043.004.036.007.074.038.074a.33.33 0 0 1 .054.006.259.259 0 0 0 .033.004c-.035.084-.066.218.039.129.075-.064.128-.09.163-.108.04-.02.057-.028.057-.07 0-.041.016-.027.042-.005.022.02.052.044.083.044.041 0 .05-.053.062-.131a1.027 1.027 0 0 1 .056-.225c.046-.134.067-.197.119-.027.024.08.067.135.104.184.05.067.091.12.06.2-.011.03-.026.066-.042.104-.055.13-.122.288-.122.413 0 .075-.072.176-.14.271-.079.112-.152.215-.097.257.103.077-.021.337-.125.47-.104.133.767.439.919.439.002 0 .004-.001.006-.004v.004s1.089-.05 1.089-.439c-.104-.133-.228-.393-.126-.47.056-.042-.018-.145-.097-.257-.067-.095-.14-.196-.14-.27 0-.126-.066-.285-.121-.414-.016-.038-.031-.073-.043-.105-.03-.08.01-.132.06-.199a.574.574 0 0 0 .105-.184c.052-.17.073-.107.119.027l.015.044c.022.065.032.129.04.18.013.079.021.132.062.132.032 0 .061-.025.084-.044.025-.022.042-.036.042.005 0 .042.016.05.057.07.035.018.087.044.163.108.105.09.074-.045.039-.129.01 0 .02-.002.032-.004a.33.33 0 0 1 .054-.006c.031 0 .035-.038.038-.074.005-.045.009-.087.067-.043.105.08.256 0 .256 0s-.162-.245-.256-.358a1.67 1.67 0 0 1-.293-.557c.02.05.08.15.127.228a.825.825 0 0 1 .061.106c.026.103.072.025.114-.044.046-.076.085-.142.085.044 0 .251.063.282.11.305.029.014.052.025.052.081 0 .083.073.08.137.079.05-.002.095-.004.095.037 0 .04.032.095.067.156.045.077.096.165.096.248 0 .078.053-.027.104-.128.046-.09.09-.177.09-.119 0 .122.32.293.32.098a.834.834 0 0 0-.069-.247c-.081-.215-.19-.505-.071-.803.174-.437.25-1.061.25-2.158S6.835 4.22 6.63 4.22c-.125 0-.063.08.03.2.06.076.13.167.174.264Zm-.759 3.213Zm.069 1.017c0-.027.02.004.039.05-.024 0-.04-.01-.04-.05Zm-2.493.05c.024 0 .039-.01.039-.05 0-.027-.02.004-.039.05Zm.101-1.043Z"
              fill="#F7FCFF"
            />
            <path
              d="M3.884 5.941h2.215v1.65s-.238.821-1.108.821c-.87 0-1.107-.821-1.107-.821V5.94Z"
              fill="#C51918"
            />
            <path
              d="M5.29 5.917h-.58v.947h-.828v.338h.828V8.42h.58V7.202h.828v-.338H5.29v-.947Z"
              fill="#F7FCFF"
            />
            <path
              d="M3.437 9.664c.269-.31.521-.585.297-.78-.225-.196-.493-.027-.762.283s-.437.643-.213.838c.225.195.409-.032.678-.341Zm2.931 0c-.27-.31-.522-.585-.297-.78.224-.196.492-.027.761.283.27.31.438.643.214.838-.225.195-.409-.032-.678-.341Z"
              fill="#E8AA00"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[2]}`}>
          <rect fill="#fff" height="12" rx="1" width="16" />
        </clipPath>
      </defs>
    </FlagIconBase>
  );
});
