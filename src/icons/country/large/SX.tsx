import React from 'react';

import { useStableUniqueId } from 'hooks';

export const SX = () => {
  const ids = useStableUniqueId(3);
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="32"
        height="24"
      >
        <rect width="32" height="24" fill="white" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V24H32V0H0Z"
          fill="#E31D1C"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V24H32V0H0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 12V24H32V12H0Z"
            fill="#2E42A5"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 -2V26L20 12L0 -2Z"
          fill="#F7FCFF"
        />
        <mask
          id={`${ids[2]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="-2"
          width="20"
          height="28"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 -2V26L20 12L0 -2Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[2]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.12606 10.1888C9.56277 10.1888 10.7275 9.25111 10.7275 8.09441C10.7275 6.9377 9.56277 6 8.12606 6C6.68934 6 5.52466 6.9377 5.52466 8.09441C5.52466 9.25111 6.68934 10.1888 8.12606 10.1888Z"
            fill="#FBCD17"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.35353 6.38528C8.14117 6.38528 7.99027 6.52209 7.99027 6.72803L7.99046 6.75074C7.97905 6.78506 7.97265 6.8233 7.9715 6.86611C7.96855 6.97568 8.00935 7.06706 8.09497 7.15089C8.10024 7.17508 8.10298 7.19513 8.10221 7.20651C8.097 7.18864 8.07633 7.17365 8.03698 7.14512C7.98103 7.10456 7.8873 7.03661 7.74656 6.89404C7.54385 6.68871 7.39086 6.60834 7.2007 6.64028C7.14304 6.64996 7.08661 6.67027 7.01885 6.69741C6.91083 6.73631 6.81139 6.74534 6.62779 6.71029C6.11758 6.61291 5.55797 6.70846 4.95215 6.9892L5.16237 7.44286C5.67942 7.20326 6.13558 7.12537 6.53404 7.20143C6.80776 7.25367 6.99782 7.23641 7.18826 7.16783C7.27032 7.13697 7.27749 7.13438 7.28351 7.13337C7.27747 7.13439 7.28134 7.13811 7.3067 7.16248C7.32379 7.17889 7.35062 7.20468 7.39074 7.24532C7.44789 7.30321 7.50763 7.35561 7.56865 7.40327C7.45137 7.43479 7.45744 7.45643 7.47896 7.53318C7.48773 7.56445 7.49907 7.60488 7.50567 7.65886C7.52025 7.77803 7.49603 7.83949 7.51693 7.86892C7.54024 7.90176 7.61971 7.89473 7.87188 7.88349C7.93975 7.88046 8.03155 7.87346 8.13747 7.86344C8.34519 7.84379 8.58028 7.81516 8.72474 7.79148C8.86506 7.76848 8.90236 7.76008 8.96121 7.71725L8.96122 7.71723C8.98157 7.69229 8.99898 7.67094 9.01341 7.65193C9.49323 7.58143 9.9199 7.53135 10.2996 7.4968C10.4357 7.48441 10.5451 7.47591 10.651 7.46814C10.6635 7.46802 10.6635 7.46802 10.7251 7.45515L10.7251 7.45515C10.752 7.44371 10.7631 7.43898 10.7669 7.4374L10.7669 7.4375C10.7686 7.43674 10.7696 7.43629 10.7669 7.4374L10.8895 7.14712L10.7628 6.994C10.6874 6.9703 10.6791 6.96768 10.6706 6.96731C10.6696 6.96726 10.6685 6.96725 10.6674 6.96724C10.6575 6.96666 10.6539 6.96645 10.6503 6.96633C10.6482 6.96627 10.6461 6.96623 10.6429 6.96618C10.6289 6.96609 10.6197 6.96604 10.6106 6.96601C10.5937 6.96595 10.5767 6.96597 10.5282 6.96603C10.4452 6.96603 10.3796 6.959 10.2848 6.94215L10.1967 6.92595C9.80685 6.85443 9.4453 6.85443 8.67851 6.96876C8.66407 6.95758 8.6497 6.94655 8.63567 6.93602C8.75916 6.91456 8.90955 6.89999 9.06848 6.89152L9.06849 6.89152C9.16457 6.88705 9.16457 6.88705 9.21821 6.88562L9.24168 6.88506L9.23874 6.38531L9.20081 6.38528H8.35353ZM7.93936 7.83281C7.95395 7.82967 7.96989 7.82636 7.98717 7.82287L8.03427 7.81283C8.02564 7.81465 8.01607 7.81665 8.0055 7.81886C7.98676 7.82276 7.96484 7.82733 7.93936 7.83281Z"
            fill="#DA610A"
          />
          <path
            d="M7.92501 8.5807L8.0059 8.08729L8.0868 8.5807C9.07982 8.4179 9.7337 8.4369 10.1126 8.56398C10.549 8.71037 11.0314 8.66893 11.5388 8.49808C11.3777 9.21585 11.2953 9.89425 11.2953 10.5318C11.2953 11.2586 11.4359 11.8458 11.5635 12.3609C11.5669 12.3747 11.5703 12.3885 11.5737 12.4022C11.6987 12.9066 11.8023 13.3247 11.8023 13.8044C11.8023 14.235 11.6595 14.4612 11.4599 14.6025C11.2287 14.7662 10.8432 14.8704 10.2716 14.8704C9.46555 14.8704 8.71153 15.0875 8.01724 15.5122L8.0059 15.504L7.99456 15.5122C7.30027 15.0875 6.54625 14.8704 5.74023 14.8704C5.16856 14.8704 4.78307 14.7662 4.55193 14.6025C4.3523 14.4612 4.20947 14.235 4.20947 13.8044C4.20947 13.3247 4.31308 12.9066 4.4381 12.4022C4.44149 12.3885 4.4449 12.3747 4.44833 12.3609C4.57591 11.8458 4.71651 11.2586 4.71651 10.5318C4.71651 9.89425 4.63407 9.21585 4.47305 8.49808C4.98036 8.66893 5.4628 8.71037 5.89924 8.56398C6.2781 8.4369 6.93198 8.4179 7.92501 8.5807Z"
            fill="#56C6F5"
            stroke="#E31D1C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.78485 10.6242L8.01342 9.93848L7.24199 10.6242H7.47056V11.0195L6.27056 11.767V13.5956H6.04199V13.9385H6.27056H9.75628H10.042V13.5956H9.75628V11.767L8.49914 10.9839V10.6242H8.78485Z"
            fill="#F7FCFF"
          />
          <path
            d="M8.01342 9.93848L8.09647 9.84505L8.01342 9.77123L7.93038 9.84505L8.01342 9.93848ZM8.78485 10.6242V10.7492H9.11362L8.86789 10.5308L8.78485 10.6242ZM7.24199 10.6242L7.15895 10.5308L6.91322 10.7492H7.24199V10.6242ZM7.47056 10.6242H7.59556V10.4992H7.47056V10.6242ZM7.47056 11.0195L7.53666 11.1256L7.59556 11.0889V11.0195H7.47056ZM6.27056 11.767L6.20447 11.661L6.14556 11.6976V11.767H6.27056ZM6.27056 13.5956V13.7206H6.39556V13.5956H6.27056ZM6.04199 13.5956V13.4706H5.91699V13.5956H6.04199ZM6.04199 13.9385H5.91699V14.0635H6.04199V13.9385ZM10.042 13.9385V14.0635H10.167V13.9385H10.042ZM10.042 13.5956H10.167V13.4706H10.042V13.5956ZM9.75628 13.5956H9.63128V13.7206H9.75628V13.5956ZM9.75628 11.767H9.88128V11.6976L9.82237 11.661L9.75628 11.767ZM8.49914 10.9839H8.37414V11.0533L8.43304 11.09L8.49914 10.9839ZM8.49914 10.6242V10.4992H8.37414V10.6242H8.49914ZM7.93038 10.0319L8.7018 10.7176L8.86789 10.5308L8.09647 9.84505L7.93038 10.0319ZM7.32504 10.7176L8.09647 10.0319L7.93038 9.84505L7.15895 10.5308L7.32504 10.7176ZM7.47056 10.4992H7.24199V10.7492H7.47056V10.4992ZM7.34556 10.6242V11.0195H7.59556V10.6242H7.34556ZM7.40447 10.9134L6.20447 11.661L6.33666 11.8731L7.53666 11.1256L7.40447 10.9134ZM6.14556 11.767V13.5956H6.39556V11.767H6.14556ZM6.27056 13.4706H6.04199V13.7206H6.27056V13.4706ZM5.91699 13.5956V13.9385H6.16699V13.5956H5.91699ZM6.04199 14.0635H6.27056V13.8135H6.04199V14.0635ZM6.27056 14.0635H9.75628V13.8135H6.27056V14.0635ZM9.75628 14.0635H10.042V13.8135H9.75628V14.0635ZM10.167 13.9385V13.5956H9.91699V13.9385H10.167ZM10.042 13.4706H9.75628V13.7206H10.042V13.4706ZM9.88128 13.5956V11.767H9.63128V13.5956H9.88128ZM9.82237 11.661L8.56523 10.8778L8.43304 11.09L9.69018 11.8731L9.82237 11.661ZM8.62414 10.9839V10.6242H8.37414V10.9839H8.62414ZM8.78485 10.4992H8.49914V10.7492H8.78485V10.4992Z"
            fill="#3B3B3B"
          />
          <path
            d="M7.95191 17.0204C9.01295 17.0204 9.7434 16.9046 10.1195 16.7071C10.2181 16.5395 10.3911 16.4448 10.5751 16.4516C11.4016 16.4822 12.0416 16.134 12.5448 15.3688C13.0885 14.542 13.1978 13.3675 12.8434 11.8259L13.743 11.6191C14.149 13.3855 14.0164 14.8109 13.3161 15.876C12.6885 16.8303 11.8329 17.3401 10.7886 17.3747C10.2552 17.7696 9.32055 17.9435 7.95191 17.9435C6.62785 17.9435 5.64614 17.6864 5.0165 17.1402C3.58662 16.8024 2.67796 16.2321 2.32067 15.3867C1.9398 14.4856 1.9398 13.2346 2.29508 11.6232L3.19651 11.8219C2.87863 13.2638 2.87863 14.3358 3.17092 15.0274C3.37489 15.5099 3.96753 15.9038 4.97156 16.1768L5.90438 16.3763L5.85959 16.6118C6.31466 16.8778 7.01015 17.0204 7.95191 17.0204Z"
            fill="#FBCD17"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.76673 9.17631C4.66367 9.4325 4.7878 9.72373 5.04399 9.8268L5.05987 9.83319L5.03569 9.88345C4.86048 10.2477 5.16032 10.6236 5.51415 10.6014L5.50263 10.658C5.39998 11.1623 5.9819 11.4143 6.30369 11.1578C6.50931 11.1527 6.71145 11.0297 6.77221 10.7726L6.82904 10.5321L6.85198 10.539C7.32354 10.6812 7.64252 10.1611 7.43447 9.80958C7.4973 9.6953 7.51564 9.5567 7.47441 9.42216C7.39351 9.15813 7.1139 9.00968 6.84987 9.09058L6.33397 9.24865C6.26519 9.22936 6.19145 9.22466 6.11707 9.23784C6.06723 9.18121 6.00366 9.13498 5.92857 9.10477L5.41722 8.89906C5.16103 8.79599 4.8698 8.92012 4.76673 9.17631ZM6.82904 10.5321L6.95125 10.015L6.32028 10.3787L6.82904 10.5321Z"
            fill="#73BE4A"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.20532 10.4758C6.48146 10.4758 6.70532 10.252 6.70532 9.97583C6.70532 9.69969 6.48146 9.47583 6.20532 9.47583C5.92918 9.47583 5.70532 9.69969 5.70532 9.97583C5.70532 10.252 5.92918 10.4758 6.20532 10.4758Z"
            fill="#FBCD17"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.2412 10.0733C10.233 9.73704 10.1956 8.96924 10.025 8.96924C9.85341 8.96924 9.82731 9.74605 9.824 10.0792C9.52856 10.1757 9.30615 10.43 9.30615 10.43H10.7777C10.7777 10.43 10.5459 10.165 10.2412 10.0733Z"
            fill="#F7FCFF"
          />
          <path
            d="M2.55058 12.5686L2.79688 12.6115C2.5975 13.7575 2.5975 14.5793 2.79007 15.0694C3.0142 15.6398 4.33647 16.4051 4.71052 16.4051V16.6551C4.24008 16.6551 2.82205 15.8344 2.55738 15.1608C2.344 14.6177 2.344 13.7561 2.55058 12.5686Z"
            fill="#73BE4A"
          />
          <path
            d="M13.381 12.5088L13.1345 12.5502C13.3149 13.6255 13.2745 14.4645 13.0181 15.066C12.7091 15.791 11.5159 16.7148 11.203 16.7148V16.9648C11.6242 16.9648 12.9024 15.9753 13.2481 15.164C13.526 14.5119 13.5687 13.6271 13.381 12.5088Z"
            fill="#73BE4A"
          />
          <path
            d="M6.39307 17.424L6.44016 17.1785C7.23674 17.3313 7.7809 17.4076 8.06599 17.4076C8.35048 17.4076 8.86519 17.3314 9.604 17.1788L9.65457 17.4236C8.8999 17.5795 8.37241 17.6576 8.06599 17.6576C7.76017 17.6576 7.20474 17.5797 6.39307 17.424Z"
            fill="#73BE4A"
          />
        </g>
      </g>
    </svg>
  );
};
