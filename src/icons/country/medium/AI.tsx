import React from 'react';

import { useStableUniqueId } from 'hooks';

export const AI = () => {
  const ids = useStableUniqueId(4);
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
            d="M16.2189 13.4776C15.5908 13.4776 15.1669 13.3295 14.8699 13.0828C14.5708 12.8343 14.3685 12.4591 14.2371 11.9422C14.1054 11.4239 14.0506 10.7854 14.0302 10.0357C14.0158 9.50913 14.0184 8.9384 14.0213 8.32457C14.0221 8.14362 14.023 7.95892 14.0234 7.77051H18.476C18.555 9.24487 18.5766 10.661 18.2921 11.7232C18.1435 12.2782 17.9168 12.7133 17.5918 13.0093C17.272 13.3005 16.8344 13.4776 16.2189 13.4776Z"
            fill="white"
            stroke="#E6E617"
            strokeWidth="0.5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.2458 12.6963C14.6194 13.5296 15.2729 13.9463 16.2064 13.9463C17.1335 13.9463 17.7891 13.5352 18.1732 12.713L14.2458 12.6963Z"
            fill="#82E5FF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.6532 9.75C14.6532 10.5794 15.3286 11.25 16.1594 11.25C16.9903 11.25 17.6657 10.5794 17.6657 9.75C17.6657 8.92057 16.9903 8.25 16.1594 8.25C15.3286 8.25 14.6532 8.92057 14.6532 9.75ZM17.0407 9.75C17.0407 10.2332 16.6461 10.625 16.1594 10.625C15.6727 10.625 15.2782 10.2332 15.2782 9.75C15.2782 9.26675 15.6727 8.875 16.1594 8.875C16.6461 8.875 17.0407 9.26675 17.0407 9.75Z"
            fill="#E18600"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.9052 8.04102C15.9052 8.04102 15.3571 8.28964 15.476 8.75703C15.595 9.22442 15.7294 9.29102 15.7294 9.29102C15.7294 9.29102 15.9231 8.27916 16.7048 8.27916L15.9052 8.04102Z"
            fill="#E18600"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.9077 10.562C14.9077 10.562 15.3647 10.9537 15.738 10.6484C16.1113 10.343 16.1149 10.1931 16.1149 10.1931C16.1149 10.1931 15.116 10.4452 14.7856 9.73669L14.9077 10.562Z"
            fill="#E18600"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.6503 10.5093C17.6503 10.5093 17.6672 9.90764 17.1949 9.80968C16.7227 9.71172 16.6039 9.80335 16.6039 9.80335C16.6039 9.80335 17.4285 10.4209 17.0858 11.1236L17.6503 10.5093Z"
            fill="#E18600"
          />
          <rect width="11" height="9" fill="#2E42A5" />
          <mask
            id={`${ids[2]}`}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="11"
            height="9"
          >
            <rect width="11" height="9" fill="white" />
          </mask>
          <g mask={`url(#${ids[2]})`}>
            <path
              d="M-1.25269 8.12494L1.22291 9.21069L11.3062 1.18052L12.612 -0.432938L9.96468 -0.795827L5.85197 2.6646L2.54165 4.99613L-1.25269 8.12494Z"
              fill="#F7FCFF"
            />
            <path
              d="M-0.913818 8.88555L0.347383 9.51562L12.143 -0.582947H10.3721L-0.913818 8.88555Z"
              fill="#F50100"
            />
            <path
              d="M12.5027 8.1248L10.3056 9.52051L-0.0561562 1.18038L-1.36198 -0.433076L1.28532 -0.795966L5.39803 2.66447L8.70835 4.99599L12.5027 8.1248Z"
              fill="#F7FCFF"
            />
            <path
              d="M12.4182 8.6707L11.157 9.30078L6.13431 4.97706L4.64518 4.49398L-1.48763 -0.427604H0.283246L6.41261 4.37716L8.04071 4.95642L12.4182 8.6707Z"
              fill="#F50100"
            />
            <mask
              id={`${ids[3]}`}
              maskUnits="userSpaceOnUse"
              x="-1"
              y="-1"
              width="13"
              height="11"
              fill="black"
            >
              <rect fill="white" x="-1" y="-1" width="13" height="11" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 0H5V4H0V5H5V9H6V5H11V4H6V0Z"
              />
            </mask>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 0H5V4H0V5H5V9H6V5H11V4H6V0Z"
              fill="#F50100"
            />
            <path
              d="M5 0V-0.9375H4.0625V0H5ZM6 0H6.9375V-0.9375H6V0ZM5 4V4.9375H5.9375V4H5ZM0 4V3.0625H-0.9375V4H0ZM0 5H-0.9375V5.9375H0V5ZM5 5H5.9375V4.0625H5V5ZM5 9H4.0625V9.9375H5V9ZM6 9V9.9375H6.9375V9H6ZM6 5V4.0625H5.0625V5H6ZM11 5V5.9375H11.9375V5H11ZM11 4H11.9375V3.0625H11V4ZM6 4H5.0625V4.9375H6V4ZM5 0.9375H6V-0.9375H5V0.9375ZM5.9375 4V0H4.0625V4H5.9375ZM0 4.9375H5V3.0625H0V4.9375ZM0.9375 5V4H-0.9375V5H0.9375ZM5 4.0625H0V5.9375H5V4.0625ZM5.9375 9V5H4.0625V9H5.9375ZM6 8.0625H5V9.9375H6V8.0625ZM5.0625 5V9H6.9375V5H5.0625ZM11 4.0625H6V5.9375H11V4.0625ZM10.0625 4V5H11.9375V4H10.0625ZM6 4.9375H11V3.0625H6V4.9375ZM5.0625 0V4H6.9375V0H5.0625Z"
              fill="#F7FCFF"
              mask={`url(#${ids[3]})`}
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
