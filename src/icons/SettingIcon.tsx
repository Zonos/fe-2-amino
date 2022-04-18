import React from 'react';

import { type IconProps } from 'types';

import { IconBase } from './IconBase';

export const SettingIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 2C13.1894 2 13.8136 2.27905 14.2659 2.73036C14.2834 2.74784 14.3007 2.76559 14.3177 2.78358C14.7174 3.20678 14.971 3.76953 14.9977 4.39107L14.9985 4.41205C14.9995 4.44124 15 4.47056 15 4.5V4.51426C15 4.55491 15.0247 4.59145 15.0623 4.60702C15.0998 4.62261 15.1431 4.61423 15.1719 4.58546L15.182 4.57538C15.2028 4.55456 15.2239 4.53419 15.2452 4.51426L15.2607 4.5C15.719 4.07934 16.2962 3.86073 16.8782 3.84417C16.9029 3.84346 16.9277 3.84312 16.9524 3.84315C17.5913 3.84382 18.23 4.0879 18.7175 4.57538L19.4246 5.28249C19.9121 5.76997 20.1562 6.40868 20.1569 7.0476C20.1569 7.07234 20.1565 7.09709 20.1558 7.12182C20.1393 7.70375 19.9207 8.281 19.5 8.73935L19.4857 8.75476C19.4658 8.77611 19.4454 8.7972 19.4246 8.81802L19.4145 8.82811C19.3858 8.85687 19.3774 8.90017 19.393 8.93775C19.4085 8.97529 19.4451 9 19.4857 9H19.5C19.5294 9 19.5588 9.00051 19.5879 9.00152L19.6089 9.00233C20.2305 9.02898 20.7932 9.28257 21.2164 9.68233C21.2344 9.69933 21.2522 9.71659 21.2696 9.73411C21.721 10.1864 22 10.8106 22 11.5V12.5C22 13.1894 21.721 13.8136 21.2696 14.2659C21.2522 14.2834 21.2344 14.3007 21.2164 14.3177C20.7932 14.7174 20.2305 14.971 19.6089 14.9977L19.5879 14.9985C19.5588 14.9995 19.5294 15 19.5 15H19.4857C19.4451 15 19.4085 15.0247 19.393 15.0623C19.3774 15.0998 19.3858 15.1431 19.4145 15.1719L19.4246 15.182C19.4454 15.2028 19.4658 15.2239 19.4857 15.2452L19.5 15.2607C19.9207 15.719 20.1393 16.2962 20.1558 16.8782C20.1565 16.9029 20.1569 16.9277 20.1569 16.9524C20.1562 17.5913 19.9121 18.23 19.4246 18.7175L18.7175 19.4246C18.23 19.9121 17.5913 20.1562 16.9524 20.1568C16.9277 20.1569 16.9029 20.1565 16.8782 20.1558C16.2963 20.1393 15.719 19.9207 15.2607 19.5L15.2452 19.4857C15.2239 19.4658 15.2028 19.4454 15.182 19.4246L15.1719 19.4145C15.1431 19.3858 15.0998 19.3774 15.0623 19.393C15.0247 19.4085 15 19.4451 15 19.4857V19.5C15 19.5294 14.9995 19.5588 14.9985 19.5879L14.9977 19.6089C14.971 20.2305 14.7174 20.7932 14.3177 21.2164C14.3007 21.2344 14.2834 21.2522 14.2659 21.2696C13.8136 21.7209 13.1894 22 12.5 22H11.5C10.8106 22 10.1864 21.7209 9.73411 21.2696C9.71659 21.2522 9.69933 21.2344 9.68233 21.2164C9.28257 20.7932 9.02898 20.2305 9.00233 19.6089L9.00152 19.5879C9.00051 19.5588 9 19.5294 9 19.5V19.4857C9 19.4451 8.97529 19.4085 8.93774 19.393C8.90017 19.3774 8.85687 19.3858 8.8281 19.4145L8.81802 19.4246C8.7972 19.4454 8.77611 19.4658 8.75475 19.4857L8.73934 19.5C8.281 19.9207 7.70375 20.1393 7.12182 20.1558C7.09708 20.1565 7.07234 20.1569 7.0476 20.1568C6.40868 20.1562 5.76997 19.9121 5.28249 19.4246L4.57538 18.7175C4.0879 18.23 3.84382 17.5913 3.84315 16.9524C3.84312 16.9277 3.84346 16.9029 3.84417 16.8782C3.86073 16.2962 4.07934 15.719 4.5 15.2607L4.51426 15.2452C4.53419 15.2239 4.55456 15.2028 4.57538 15.182L4.58546 15.1719C4.61423 15.1431 4.62261 15.0998 4.60702 15.0623C4.59145 15.0247 4.55491 15 4.51426 15H4.5C4.47056 15 4.44125 14.9995 4.41205 14.9985L4.39107 14.9977C3.76953 14.971 3.20678 14.7174 2.78358 14.3177C2.76558 14.3007 2.74784 14.2834 2.73036 14.2659C2.27905 13.8136 2 13.1894 2 12.5V11.5C2 10.8106 2.27905 10.1864 2.73036 9.73411C2.74784 9.71659 2.76558 9.69933 2.78358 9.68233C3.20678 9.28257 3.76953 9.02898 4.39107 9.00233L4.41205 9.00152C4.44125 9.00051 4.47056 9 4.5 9H4.51426C4.55491 9 4.59145 8.97529 4.60702 8.93775C4.62261 8.90017 4.61423 8.85687 4.58546 8.82811L4.57538 8.81802C4.55456 8.7972 4.53419 8.77611 4.51426 8.75476L4.5 8.73935C4.07934 8.281 3.86073 7.70375 3.84417 7.12182C3.84346 7.09709 3.84312 7.07234 3.84315 7.0476C3.84382 6.40868 4.0879 5.76997 4.57538 5.28249L5.28249 4.57538C5.76997 4.0879 6.40868 3.84382 7.0476 3.84315C7.07234 3.84312 7.09709 3.84346 7.12182 3.84417C7.70375 3.86073 8.281 4.07934 8.73934 4.5L8.75476 4.51426C8.77611 4.53419 8.7972 4.55456 8.81802 4.57538L8.8281 4.58546C8.85687 4.61423 8.90017 4.62261 8.93775 4.60702C8.97529 4.59145 9 4.55491 9 4.51426V4.5C9 4.47056 9.00051 4.44124 9.00152 4.41205L9.00233 4.39107C9.02898 3.76953 9.28257 3.20678 9.68233 2.78358C9.69933 2.76559 9.71659 2.74784 9.73411 2.73036C10.1864 2.27905 10.8106 2 11.5 2H12.5ZM11 19.5C11 19.7761 11.2239 20 11.5 20H12.5C12.7761 20 13 19.7761 13 19.5V19.4857C13 18.6262 13.5212 17.8669 14.2962 17.5455C15.0727 17.2235 15.9787 17.3929 16.5861 18.0003L16.5962 18.0104C16.7915 18.2057 17.108 18.2057 17.3033 18.0104L18.0104 17.3033C18.2057 17.108 18.2057 16.7915 18.0104 16.5962L18.0003 16.5861C17.3929 15.9787 17.2235 15.0727 17.5455 14.2961C17.8669 13.5212 18.6262 13 19.4857 13H19.5C19.7761 13 20 12.7761 20 12.5V11.5C20 11.2239 19.7761 11 19.5 11H19.4857C18.6262 11 17.8669 10.4788 17.5455 9.70385C17.2235 8.92727 17.3929 8.02132 18.0003 7.41389L18.0104 7.40381C18.2057 7.20854 18.2057 6.89196 18.0104 6.6967L17.3033 5.98959C17.108 5.79433 16.7915 5.79433 16.5962 5.98959L16.5861 5.99968C15.9787 6.60711 15.0727 6.77651 14.2962 6.45448C13.5212 6.13311 13 5.37381 13 4.51426V4.5C13 4.22386 12.7761 4 12.5 4H11.5C11.2239 4 11 4.22386 11 4.5V4.51426C11 5.37381 10.4788 6.13311 9.70384 6.45448C8.92725 6.77651 8.02132 6.60711 7.41389 5.99968L7.40381 5.98959C7.20854 5.79433 6.89196 5.79433 6.6967 5.98959L5.98959 6.6967C5.79433 6.89196 5.79433 7.20854 5.98959 7.40381L5.99967 7.41389C6.60711 8.02132 6.77651 8.92727 6.45448 9.70385C6.13311 10.4788 5.37382 11 4.51426 11H4.5C4.22386 11 4 11.2239 4 11.5V12.5C4 12.7761 4.22386 13 4.5 13H4.51426C5.37382 13 6.13311 13.5212 6.45447 14.2961C6.77651 15.0727 6.60711 15.9787 5.99968 16.5861L5.98959 16.5962C5.79433 16.7915 5.79433 17.108 5.98959 17.3033L6.6967 18.0104C6.89196 18.2057 7.20854 18.2057 7.4038 18.0104L7.41389 18.0003C8.02132 17.3929 8.92726 17.2235 9.70384 17.5455C10.4788 17.8669 11 18.6262 11 19.4857V19.5Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      fill="currentColor"
    />
  </IconBase>
);

export const SettingSolidIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5001 2C10.6716 2 10.0001 2.67157 10.0001 3.5V3.86441C10.0001 4.09255 9.84509 4.29017 9.62719 4.35776C9.15618 4.50384 8.70379 4.69226 8.27449 4.91859C8.07264 5.025 7.82327 4.99485 7.66193 4.8335L7.40381 4.57538C6.81802 3.98959 5.86827 3.98959 5.28249 4.57538L4.57538 5.28249C3.98959 5.86827 3.98959 6.81802 4.57538 7.40381L4.8335 7.66193C4.99485 7.82327 5.025 8.07264 4.91859 8.27449C4.69227 8.70378 4.50385 9.15614 4.35778 9.62713C4.29019 9.84503 4.09257 10 3.86443 10H3.5C2.67157 10 2 10.6716 2 11.5V12.5C2 13.3284 2.67157 14 3.5 14H3.86443C4.09257 14 4.29019 14.155 4.35777 14.3729C4.50385 14.8439 4.69227 15.2962 4.91859 15.7255C5.025 15.9274 4.99485 16.1767 4.8335 16.3381L4.57538 16.5962C3.98959 17.182 3.98959 18.1317 4.57538 18.7175L5.28249 19.4246C5.86827 20.0104 6.81802 20.0104 7.40381 19.4246L7.66192 19.1665C7.82327 19.0052 8.07264 18.975 8.27449 19.0814C8.70379 19.3077 9.15618 19.4962 9.62719 19.6422C9.84509 19.7098 10.0001 19.9074 10.0001 20.1356V20.5C10.0001 21.3284 10.6716 22 11.5001 22H12.5001C13.3285 22 14.0001 21.3284 14.0001 20.5V20.1355C14.0001 19.9074 14.155 19.7098 14.3729 19.6422C14.8439 19.4961 15.2962 19.3077 15.7255 19.0814C15.9274 18.975 16.1767 19.0052 16.3381 19.1665L16.5962 19.4246C17.182 20.0104 18.1317 20.0104 18.7175 19.4246L19.4246 18.7175C20.0104 18.1317 20.0104 17.182 19.4246 16.5962L19.1665 16.3381C19.0052 16.1767 18.975 15.9274 19.0814 15.7255C19.3077 15.2962 19.4961 14.8439 19.6422 14.3729C19.7098 14.155 19.9074 14 20.1356 14H20.5C21.3284 14 22 13.3284 22 12.5V11.5C22 10.6716 21.3284 10 20.5 10H20.1356C19.9074 10 19.7098 9.84503 19.6422 9.62713C19.4961 9.15614 19.3077 8.70378 19.0814 8.27449C18.975 8.07264 19.0052 7.82328 19.1665 7.66193L19.4246 7.40381C20.0104 6.81802 20.0104 5.86827 19.4246 5.28249L18.7175 4.57538C18.1317 3.98959 17.182 3.98959 16.5962 4.57538L16.3381 4.8335C16.1767 4.99485 15.9274 5.025 15.7255 4.91859C15.2962 4.69228 14.8439 4.50387 14.3729 4.35779C14.155 4.29021 14.0001 4.09259 14.0001 3.86445V3.5C14.0001 2.67157 13.3285 2 12.5001 2H11.5001ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      fill="currentColor"
    />
  </IconBase>
);

export const SettingDuotoneIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.0001 3.5C10.0001 2.67157 10.6716 2 11.5001 2H12.5001C13.3285 2 14.0001 2.67157 14.0001 3.5V3.86445C14.0001 4.09259 14.155 4.29021 14.3729 4.35779C14.8439 4.50387 15.2962 4.69228 15.7255 4.91859C15.9274 5.025 16.1767 4.99485 16.3381 4.8335L16.5962 4.57538C17.182 3.98959 18.1317 3.98959 18.7175 4.57538L19.4246 5.28249C20.0104 5.86827 20.0104 6.81802 19.4246 7.40381L19.1665 7.66193C19.0052 7.82328 18.975 8.07264 19.0814 8.27449C19.3077 8.70378 19.4961 9.15614 19.6422 9.62713C19.7098 9.84503 19.9074 10 20.1356 10H20.5C21.3284 10 22 10.6716 22 11.5V12.5C22 13.3284 21.3284 14 20.5 14H20.1356C19.9074 14 19.7098 14.155 19.6422 14.3729C19.4961 14.8439 19.3077 15.2962 19.0814 15.7255C18.975 15.9274 19.0052 16.1767 19.1665 16.3381L19.4246 16.5962C20.0104 17.182 20.0104 18.1317 19.4246 18.7175L18.7175 19.4246C18.1317 20.0104 17.182 20.0104 16.5962 19.4246L16.3381 19.1665C16.1767 19.0052 15.9274 18.975 15.7255 19.0814C15.2962 19.3077 14.8439 19.4961 14.3729 19.6422C14.155 19.7098 14.0001 19.9074 14.0001 20.1355V20.5C14.0001 21.3284 13.3285 22 12.5001 22H11.5001C10.6716 22 10.0001 21.3284 10.0001 20.5V20.1356C10.0001 19.9074 9.84509 19.7098 9.62719 19.6422C9.15618 19.4962 8.70379 19.3077 8.27449 19.0814C8.07264 18.975 7.82327 19.0052 7.66192 19.1665L7.40381 19.4246C6.81802 20.0104 5.86827 20.0104 5.28249 19.4246L4.57538 18.7175C3.98959 18.1317 3.98959 17.182 4.57538 16.5962L4.8335 16.3381C4.99485 16.1767 5.025 15.9274 4.91859 15.7255C4.69227 15.2962 4.50385 14.8439 4.35777 14.3729C4.29019 14.155 4.09257 14 3.86443 14H3.5C2.67157 14 2 13.3284 2 12.5V11.5C2 10.6716 2.67157 10 3.5 10H3.86443C4.09257 10 4.29019 9.84503 4.35778 9.62713C4.50385 9.15614 4.69227 8.70378 4.91859 8.27449C5.025 8.07264 4.99485 7.82327 4.8335 7.66193L4.57538 7.40381C3.98959 6.81802 3.98959 5.86827 4.57538 5.28249L5.28249 4.57538C5.86827 3.98959 6.81802 3.98959 7.40381 4.57538L7.66193 4.8335C7.82327 4.99485 8.07264 5.025 8.27449 4.91859C8.70379 4.69226 9.15618 4.50384 9.62719 4.35776C9.84509 4.29017 10.0001 4.09255 10.0001 3.86441V3.5Z"
      fill="currentColor"
    />
    <path
      d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
      fill="#3D3D40"
    />
  </IconBase>
);
