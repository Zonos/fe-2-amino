import React from 'react';

import { useStableUniqueId } from 'hooks';

export const LS = () => {
  const ids = useStableUniqueId(1);
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="15"
      >
        <rect width="20" height="15" fill="white" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 10H20V15H0V10Z"
          fill="#55BA07"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 5H20V10H0V5Z"
          fill="#F7FCFF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H20V5H0V0Z"
          fill="#3D58DB"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.53125 5.1501C9.20458 5.23781 9.03207 5.46357 9.03207 5.86302C9.03207 6.31952 9.25622 6.74799 9.53125 6.96897V5.1501ZM10.3125 6.95674C10.5799 6.73272 10.7948 6.31222 10.7948 5.86419C10.7948 5.47622 10.625 5.25148 10.3125 5.15821V6.95674ZM10.2862 4.83259C10.7977 4.94621 11.1678 5.29457 11.1678 5.86054C11.1678 6.27218 10.972 6.7726 10.6684 7.11601L12.1895 8.6079L12.5647 8.48436L13.125 9.33415C13.125 9.33415 11.7088 9.99992 9.95839 9.99992C8.20798 9.99992 6.875 9.33415 6.875 9.33415L7.35197 8.6079L7.73718 8.73418L9.1484 7.14189C8.83153 6.7981 8.62563 6.28264 8.62563 5.86054C8.62563 5.27455 9.02245 4.92184 9.56212 4.82141C9.62152 4.68143 9.76023 4.58325 9.92187 4.58325C10.0878 4.58325 10.2295 4.68669 10.2862 4.83259ZM7.50104 8.93514L7.34255 9.15543H7.65103L7.50104 8.93514ZM7.68172 9.24238L7.40932 9.2972L7.68172 9.39209V9.24238ZM7.82066 8.92512L7.95992 9.25027L8.30587 9.1559L8.23728 9.02518L7.82066 8.92512ZM8.573 9.5736L8.06497 9.47344L8.00682 9.3758L8.38997 9.2924L8.573 9.5736ZM8.60264 9.10824L8.76056 9.39238L9.10775 9.28663L9.01117 9.15929L8.60264 9.10824ZM8.88734 9.63029L8.82518 9.51277L9.20942 9.4102L9.43053 9.68039L8.88734 9.63029ZM9.6048 9.43522L10.1 9.30428L10.0391 9.19185H9.39639L9.6048 9.43522ZM9.78235 9.68553L9.70367 9.5639L10.1792 9.40819L10.4316 9.68553H9.78235ZM10.3841 9.20045L10.5362 9.38679L10.948 9.24403L10.8964 9.14675L10.3841 9.20045ZM11.2779 9.58781L10.7242 9.64937L10.6428 9.51187L11.0615 9.37436L11.2779 9.58781ZM11.2428 9.11052L11.3979 9.30119L11.7696 9.11052L11.6664 9.05326L11.2428 9.11052ZM11.5643 9.53655L11.4971 9.43343L11.8508 9.22116L12.0306 9.43343L11.5643 9.53655ZM11.9155 8.94348L12.1401 9.15779L12.3586 8.94348L12.2895 8.85627L11.9155 8.94348ZM12.2716 9.23139L12.4547 9.05022L12.5862 9.23139L12.2716 9.3326V9.23139Z"
          fill="#1D1D1D"
        />
      </g>
    </svg>
  );
};
