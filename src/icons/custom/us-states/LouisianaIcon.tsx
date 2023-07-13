import { forwardRef } from 'react';

import { StateIconBase } from 'src/icons/icon-base/_StateIconBase';
import type { IconProps } from 'src/types/IconProps';

export const LouisianaIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size }, ref) => (
    <StateIconBase ref={ref} className={className} size={size}>
      <path
        clipRule="evenodd"
        d="M2 6.125 20.844 5l.843.563-.562.843.281.563.282.281-.563.281.563.844v.844l1.125.844-.563 1.688h-.281l.281 1.125-1.688 1.406L20 16.25l-.563.844.282 1.125-.282.562h-.562l.281 1.125v1.125l12.657-1.125v.563l-.282 1.969.282.843.843.844.563 1.688v.281h-.844l-1.406-.281-.844-.844H29l-1.406 1.688.281.844 1.125.28 1.125.282 1.688-1.125h1.125l-.282.563-.843.28.28.563h.563l.563.563.562-.563.563-1.125.562 1.125.282.563h-.844l-.563 1.125-.843-.281.28.844-.562.28 1.969 1.407 2.25.563L38 34.252l-.844.844-.843-.844-.282.281-.843-.843-1.126-.282-.28-.562-.844.281-.844-1.125-1.688-.563h-.843l.28.563.845.562v1.688l-.563.844-.563-.563v-.562l-1.125-.563-.843.282-.563.28-.281 1.126-1.969-.281h-.843l-1.407-.282v-.562l1.125.281-.281-.563-.844-.843.282-.844-.282-.281-.562.843-1.125-.28-.282-.282-.28-.563-.282.282-.281-.844-1.407.281v-.844h-.843l-1.125.563-.563.281.844.844-1.125.844h-2.813l-2.53-1.407-1.688-.28-1.125.28-2.25.563H4.53l-.281-.563.844-.28v-1.97l.281-1.125-.563-1.125.282-.563v-.843l.562-1.125.282-.844v-1.688l.28-.281-.28-.281v-.844l-.844-.844v-.844l-.563-.562v-.282l-.562-.562V16.25l-.844-1.125-.844-.844L2 6.125Z"
        fill="currentColor"
        fillRule="evenodd"
        stroke="#ACAEB3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StateIconBase>
  ),
);
