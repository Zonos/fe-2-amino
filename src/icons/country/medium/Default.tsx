import React from 'react';

export const Default = () => {
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="e6152485-24cc-4001-8e93-479caa2cdec2"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="15"
      >
        <rect width="20" height="15" fill="white" />
      </mask>
      <g mask="url(#e6152485-24cc-4001-8e93-479caa2cdec2)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H20V15H0V0Z"
          fill="#9898A0"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V5H20V0H0Z"
          fill="#D6D6D9"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 10V15H20V10H0Z"
          fill="#5B5B60"
        />
      </g>
    </svg>
  );
};
