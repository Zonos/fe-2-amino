import type { Color } from 'src/types';

export const ZonosLogoIcon = ({
  className,
  size,
  color = 'black',
}: {
  className?: string;
  size?: number;
  color?: Color;
}) => (
  <svg
    className={className}
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    color={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2.70652C6.45314 2.70652 1.95652 7.20314 1.95652 12.75C1.95652 13.6981 2.08777 14.6149 2.33286 15.4835C2.34822 15.5379 2.40598 15.5682 2.45967 15.5504L3.78186 15.1136C3.91144 15.0708 4.05141 15.1398 4.09634 15.2687L4.17028 15.4807C5.29925 18.7181 8.37911 21.0399 12 21.0399C13.4738 21.0399 14.8565 20.6557 16.0547 19.9823C18.5833 18.5615 20.2899 15.8547 20.2899 12.75C20.2899 10.4843 19.3814 8.43124 17.9077 6.9344C17.8673 6.89343 17.8008 6.89572 17.7628 6.93884L16.8474 7.97673C16.7561 8.08031 16.598 8.0902 16.4945 7.99881L16.3233 7.8477C15.1708 6.83047 13.658 6.21377 12 6.21377C8.39014 6.21377 5.46377 9.14014 5.46377 12.75C5.46377 15.0367 6.63788 17.0497 8.41786 18.2182C8.46636 18.25 8.53149 18.2329 8.55898 18.1819L9.21255 16.967C9.27782 16.8457 9.42892 16.8001 9.55045 16.8649L9.75116 16.9721C10.421 17.3297 11.1861 17.5326 12 17.5326C14.6414 17.5326 16.7826 15.3914 16.7826 12.75C16.7826 10.3078 14.9521 8.29314 12.5883 8.00321C12.5296 7.99601 12.4783 8.04229 12.4783 8.10143V8.70414C12.4783 8.75478 12.5163 8.79731 12.5665 8.80444C14.4993 9.07946 15.9855 10.7412 15.9855 12.75C15.9855 14.9511 14.2011 16.7355 12 16.7355C9.79887 16.7355 8.01449 14.9511 8.01449 12.75C8.01449 10.7412 9.5007 9.07946 11.4335 8.80444C11.4837 8.79731 11.5217 8.75478 11.5217 8.70414V7.26087C11.5217 7.1228 11.6337 7.01087 11.7717 7.01087H12C15.1696 7.01087 17.7391 9.58037 17.7391 12.75C17.7391 15.9196 15.1696 18.4891 12 18.4891C11.2271 18.4891 10.489 18.3361 9.81515 18.0585C9.76719 18.0387 9.71181 18.0579 9.68723 18.1036L9.00819 19.3658C8.94288 19.4872 8.79161 19.5328 8.67007 19.4678L8.46925 19.3603C6.11233 18.0989 4.50725 15.6123 4.50725 12.75C4.50725 8.61187 7.86187 5.25725 12 5.25725C13.6942 5.25725 15.2578 5.82002 16.513 6.76832C16.5551 6.80014 16.6147 6.79455 16.6496 6.75497L17.5921 5.68631C17.6834 5.58273 17.8415 5.57285 17.945 5.66424L18.1162 5.81534C20.035 7.50891 21.2464 9.98829 21.2464 12.75C21.2464 16.0156 19.5533 18.8851 16.999 20.5298C16.9553 20.5579 16.9398 20.6147 16.9638 20.6609L17.2403 21.1933C17.2671 21.2449 17.3324 21.2629 17.3815 21.2316C20.1849 19.4491 22.0435 16.3163 22.0435 12.75C22.0435 7.20314 17.5469 2.70652 12 2.70652ZM15.9982 21.0895C16.0473 21.0659 16.1064 21.0852 16.1315 21.1335L16.7815 22.3852C16.8464 22.5101 17.0016 22.5569 17.1247 22.4886L17.3298 22.3747C20.7103 20.4989 23 16.8922 23 12.75C23 6.67487 18.0751 1.75 12 1.75C5.92487 1.75 1 6.67487 1 12.75C1 14.008 1.21137 15.2176 1.60091 16.3447L1.67446 16.5575C1.71913 16.6868 1.85933 16.7561 1.98917 16.7132L3.34475 16.2654C3.39469 16.2489 3.44887 16.2741 3.46921 16.3226C4.86635 19.6548 8.15917 21.9964 12 21.9964C13.4314 21.9964 14.7878 21.6708 15.9982 21.0895ZM12 9.72101C10.3271 9.72101 8.97101 11.0771 8.97101 12.75C8.97101 14.4229 10.3271 15.779 12 15.779C13.6729 15.779 15.029 14.4229 15.029 12.75C15.029 11.0771 13.6729 9.72101 12 9.72101Z"
      fill="currentColor"
    />
  </svg>
);
