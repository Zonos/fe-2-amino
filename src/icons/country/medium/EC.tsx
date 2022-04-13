import React from 'react';

import { useStableUniqueId } from 'hooks';

export const EC = () => {
  const ids = useStableUniqueId(3);
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
          d="M0 0V15H20V0H0Z"
          fill="#2E42A5"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="20"
          height="15"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V15H20V0H0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V7.5H20V0H0Z"
            fill="#FECA00"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 11.25V15H20V11.25H0Z"
            fill="#E31D1C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.75791 3.62005C5.68265 3.4503 8.57704 2.59131 8.79391 2.59131C9.01079 2.59131 9.28511 3.10568 9.28511 3.10568L11.0453 3.24806C11.0453 3.24806 10.8374 2.59131 11.0453 2.59131C11.2533 2.59131 14.4401 3.69829 14.4401 3.69829C14.4401 3.69829 10.4563 4.1785 10.4563 4.28663C10.4563 4.39475 10.7173 4.98835 10.7173 4.98835L9.98054 5.22976C9.98054 5.22976 10.0238 4.5144 9.90368 4.5144C9.78356 4.5144 9.42695 5.37001 9.42695 5.37001L9.07725 4.28663C9.07725 4.28663 5.83317 3.7898 5.75791 3.62005Z"
            fill="#7B2900"
          />
          <path
            d="M5.77039 6.26123L6.55836 6.44965C5.73393 9.89736 6.49596 11.5508 8.84239 11.7044L8.78945 12.5129C5.84895 12.3203 4.84329 10.1383 5.77039 6.26123Z"
            fill="#FECA00"
          />
          <path
            d="M6.25023 5.79639L7.05068 5.92165C6.48607 9.52959 6.93823 11.161 8.20552 11.1163L8.23404 11.926C6.20933 11.9973 5.61527 9.85394 6.25023 5.79639Z"
            fill="#07138E"
          />
          <path
            d="M7.06041 5.46558L7.86086 5.59084C7.29626 9.19878 7.74841 10.8302 9.0157 10.7855L9.04422 11.5952C7.01951 11.6665 6.42545 9.52313 7.06041 5.46558Z"
            fill="#E10001"
          />
          <path
            d="M8.56381 12.0459L9.3702 11.9675C9.43658 12.6503 9.3863 13.239 9.21333 13.7333L8.44861 13.4657C8.57917 13.0926 8.61958 12.6195 8.56381 12.0459Z"
            fill="#07138E"
          />
          <path
            d="M13.4374 6.35547C13.4374 6.35547 14.7287 12.1635 10.7496 12.0629"
            stroke="#FECA00"
            strokeWidth="0.810185"
          />
          <path
            d="M13.3515 5.79639L12.551 5.92165C13.1156 9.52959 12.6635 11.161 11.3962 11.1163L11.3676 11.926C13.3924 11.9973 13.9864 9.85394 13.3515 5.79639Z"
            fill="#07138E"
          />
          <path
            d="M12.5413 5.46558L11.7408 5.59084C12.3054 9.19878 11.8533 10.8302 10.586 10.7855L10.5575 11.5952C12.5822 11.6665 13.1762 9.52313 12.5413 5.46558Z"
            fill="#E10001"
          />
          <path
            d="M10.8803 12.0503L10.0749 11.9629C10.0072 12.5864 10.0587 13.1265 10.2363 13.5813L10.991 13.2866C10.865 12.9641 10.8258 12.5526 10.8803 12.0503Z"
            fill="#07138E"
          />
          <rect
            x="8.66663"
            y="10.9375"
            width="2.43056"
            height="1.15809"
            fill="#908F89"
          />
          <path
            d="M9.88191 11.25C10.5672 11.25 11.1591 10.8637 11.5677 10.2964C11.9766 9.72853 12.2199 8.95984 12.2199 8.125C12.2199 7.29016 11.9766 6.52147 11.5677 5.95364C11.1591 5.38627 10.5672 5 9.88191 5C9.19662 5 8.6047 5.38627 8.1961 5.95364C7.78718 6.52147 7.54395 7.29016 7.54395 8.125C7.54395 8.95984 7.78718 9.72853 8.1961 10.2964C8.6047 10.8637 9.19662 11.25 9.88191 11.25Z"
            stroke="#FEE901"
            strokeWidth="0.625"
          />
          <mask
            id={`${ids[2]}`}
            maskUnits="userSpaceOnUse"
            x="7"
            y="4"
            width="6"
            height="8"
          >
            <path
              d="M9.88191 11.25C10.5672 11.25 11.1591 10.8637 11.5677 10.2964C11.9766 9.72853 12.2199 8.95984 12.2199 8.125C12.2199 7.29016 11.9766 6.52147 11.5677 5.95364C11.1591 5.38627 10.5672 5 9.88191 5C9.19662 5 8.6047 5.38627 8.1961 5.95364C7.78718 6.52147 7.54395 7.29016 7.54395 8.125C7.54395 8.95984 7.78718 9.72853 8.1961 10.2964C8.6047 10.8637 9.19662 11.25 9.88191 11.25Z"
              fill="white"
              stroke="white"
              strokeWidth="0.625"
            />
          </mask>
          <g mask={`url(#${ids[2]})`}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.3487 9.62809C11.3487 9.62809 10.3641 9.09227 10.0815 8.90127C9.79885 8.71027 9.962 8.28417 9.47525 8.39805C8.98851 8.51193 8.59747 8.71027 8.59747 9.25401C8.59747 9.79775 8.21532 10.1206 8.08508 9.74906C7.95484 9.37757 7.34243 7.64038 8.08508 7.64038C8.82773 7.64038 10.5636 8.02997 11.0746 8.02997C11.5856 8.02997 11.8831 8.29511 11.8831 8.77456C11.8831 9.41945 11.3487 9.62809 11.3487 9.62809Z"
              fill="#8DDD61"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.8819 6.80157C10.1056 6.80157 10.287 6.61639 10.287 6.38797C10.287 6.15954 10.1056 5.97437 9.8819 5.97437C9.65817 5.97437 9.47681 6.15954 9.47681 6.38797C9.47681 6.61639 9.65817 6.80157 9.8819 6.80157Z"
              fill="#FEE901"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.54339 6.8378C8.54339 6.8378 9.01462 6.72383 9.66574 7.16261C10.3169 7.60139 11.8955 7.85125 11.8955 7.50693C11.8955 7.16261 11.8955 8.17764 11.8955 8.17764C11.8955 8.17764 8.39266 7.95955 8.20526 8.17764C8.01786 8.39574 7.99916 6.95969 8.20526 6.8378C8.41136 6.71591 8.54339 6.8378 8.54339 6.8378Z"
              fill="#F7FCFF"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
