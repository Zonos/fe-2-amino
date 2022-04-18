import React from 'react';

import { type IconProps } from 'types';

import { IconBase } from './IconBase';

export const GridIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.032 3H16.968C16.5294 2.99999 16.1509 2.99998 15.8376 3.02135C15.5078 3.04386 15.1779 3.09336 14.852 3.22836C14.1169 3.53285 13.5328 4.11687 13.2284 4.85195C13.0934 5.17788 13.0439 5.50779 13.0214 5.83762C13 6.15087 13 6.52934 13 6.96797V7.03199C13 7.47062 13 7.84914 13.0214 8.16238C13.0439 8.49221 13.0934 8.82212 13.2284 9.14805C13.5328 9.88314 14.1169 10.4672 14.852 10.7716C15.1779 10.9066 15.5078 10.9561 15.8376 10.9787C16.1509 11 16.5293 11 16.968 11H17.032C17.4706 11 17.8491 11 18.1624 10.9787C18.4922 10.9561 18.8221 10.9066 19.1481 10.7716C19.8831 10.4672 20.4672 9.88314 20.7716 9.14805C20.9066 8.82212 20.9561 8.49221 20.9787 8.16238C21 7.84913 21 7.47064 21 7.03199V6.96801C21 6.52936 21 6.15088 20.9787 5.83762C20.9561 5.50779 20.9066 5.17788 20.7716 4.85195C20.4672 4.11687 19.8831 3.53285 19.1481 3.22836C18.8221 3.09336 18.4922 3.04386 18.1624 3.02135C17.8491 2.99998 17.4706 2.99999 17.032 3ZM15.6173 5.07612C15.6589 5.05889 15.7458 5.03227 15.9738 5.01671C16.2107 5.00054 16.5204 5 17 5C17.4796 5 17.7893 5.00054 18.0262 5.01671C18.2542 5.03227 18.3411 5.05889 18.3827 5.07612C18.6277 5.17762 18.8224 5.37229 18.9239 5.61732C18.9411 5.65893 18.9677 5.74576 18.9833 5.97376C18.9995 6.21074 19 6.52038 19 7C19 7.47963 18.9995 7.78926 18.9833 8.02624C18.9677 8.25424 18.9411 8.34107 18.9239 8.38269C18.8224 8.62771 18.6277 8.82239 18.3827 8.92388C18.3411 8.94112 18.2542 8.96774 18.0262 8.98329C17.7893 8.99946 17.4796 9 17 9C16.5204 9 16.2107 8.99946 15.9738 8.98329C15.7458 8.96774 15.6589 8.94112 15.6173 8.92388C15.3723 8.82239 15.1776 8.62771 15.0761 8.38269C15.0589 8.34107 15.0323 8.25424 15.0167 8.02624C15.0005 7.78926 15 7.47963 15 7C15 6.52038 15.0005 6.21074 15.0167 5.97376C15.0323 5.74576 15.0589 5.65893 15.0761 5.61732C15.1776 5.37229 15.3723 5.17762 15.6173 5.07612Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.96802 13H7.03199C7.47062 13 7.84914 13 8.16238 13.0214C8.49221 13.0439 8.82212 13.0934 9.14805 13.2284C9.88314 13.5328 10.4672 14.1169 10.7716 14.852C10.9066 15.1779 10.9561 15.5078 10.9787 15.8376C11 16.1509 11 16.5293 11 16.968V17.032C11 17.4706 11 17.8491 10.9787 18.1624C10.9561 18.4922 10.9066 18.8221 10.7716 19.1481C10.4672 19.8831 9.88314 20.4672 9.14805 20.7716C8.82212 20.9066 8.49221 20.9561 8.16238 20.9787C7.84913 21 7.47064 21 7.03199 21H6.96801C6.52936 21 6.15088 21 5.83762 20.9787C5.50779 20.9561 5.17788 20.9066 4.85195 20.7716C4.11687 20.4672 3.53285 19.8831 3.22836 19.1481C3.09336 18.8221 3.04386 18.4922 3.02135 18.1624C2.99998 17.8491 2.99999 17.4707 3 17.032V16.968C2.99999 16.5294 2.99998 16.1509 3.02135 15.8376C3.04386 15.5078 3.09336 15.1779 3.22836 14.852C3.53285 14.1169 4.11687 13.5328 4.85195 13.2284C5.17788 13.0934 5.50779 13.0439 5.83762 13.0214C6.15087 13 6.52939 13 6.96802 13ZM5.97376 15.0167C5.74576 15.0323 5.65893 15.0589 5.61732 15.0761C5.37229 15.1776 5.17762 15.3723 5.07612 15.6173C5.05889 15.6589 5.03227 15.7458 5.01671 15.9738C5.00054 16.2107 5 16.5204 5 17C5 17.4796 5.00054 17.7893 5.01671 18.0262C5.03227 18.2542 5.05889 18.3411 5.07612 18.3827C5.17762 18.6277 5.37229 18.8224 5.61732 18.9239C5.65893 18.9411 5.74576 18.9677 5.97376 18.9833C6.21074 18.9995 6.52038 19 7 19C7.47963 19 7.78926 18.9995 8.02624 18.9833C8.25424 18.9677 8.34107 18.9411 8.38269 18.9239C8.62771 18.8224 8.82239 18.6277 8.92388 18.3827C8.94112 18.3411 8.96774 18.2542 8.98329 18.0262C8.99946 17.7893 9 17.4796 9 17C9 16.5204 8.99946 16.2107 8.98329 15.9738C8.96774 15.7458 8.94112 15.6589 8.92388 15.6173C8.82239 15.3723 8.62771 15.1776 8.38269 15.0761C8.34107 15.0589 8.25424 15.0323 8.02624 15.0167C7.78926 15.0005 7.47963 15 7 15C6.52038 15 6.21074 15.0005 5.97376 15.0167Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.968 13H17.032C17.4706 13 17.8491 13 18.1624 13.0214C18.4922 13.0439 18.8221 13.0934 19.1481 13.2284C19.8831 13.5328 20.4672 14.1169 20.7716 14.852C20.9066 15.1779 20.9561 15.5078 20.9787 15.8376C21 16.1509 21 16.5294 21 16.968V17.032C21 17.4706 21 17.8491 20.9787 18.1624C20.9561 18.4922 20.9066 18.8221 20.7716 19.1481C20.4672 19.8831 19.8831 20.4672 19.1481 20.7716C18.8221 20.9066 18.4922 20.9561 18.1624 20.9787C17.8491 21 17.4706 21 17.032 21H16.968C16.5294 21 16.1509 21 15.8376 20.9787C15.5078 20.9561 15.1779 20.9066 14.852 20.7716C14.1169 20.4672 13.5328 19.8831 13.2284 19.1481C13.0934 18.8221 13.0439 18.4922 13.0214 18.1624C13 17.8491 13 17.4707 13 17.032V16.968C13 16.5294 13 16.1509 13.0214 15.8376C13.0439 15.5078 13.0934 15.1779 13.2284 14.852C13.5328 14.1169 14.1169 13.5328 14.852 13.2284C15.1779 13.0934 15.5078 13.0439 15.8376 13.0214C16.1509 13 16.5294 13 16.968 13ZM15.9738 15.0167C15.7458 15.0323 15.6589 15.0589 15.6173 15.0761C15.3723 15.1776 15.1776 15.3723 15.0761 15.6173C15.0589 15.6589 15.0323 15.7458 15.0167 15.9738C15.0005 16.2107 15 16.5204 15 17C15 17.4796 15.0005 17.7893 15.0167 18.0262C15.0323 18.2542 15.0589 18.3411 15.0761 18.3827C15.1776 18.6277 15.3723 18.8224 15.6173 18.9239C15.6589 18.9411 15.7458 18.9677 15.9738 18.9833C16.2107 18.9995 16.5204 19 17 19C17.4796 19 17.7893 18.9995 18.0262 18.9833C18.2542 18.9677 18.3411 18.9411 18.3827 18.9239C18.6277 18.8224 18.8224 18.6277 18.9239 18.3827C18.9411 18.3411 18.9677 18.2542 18.9833 18.0262C18.9995 17.7893 19 17.4796 19 17C19 16.5204 18.9995 16.2107 18.9833 15.9738C18.9677 15.7458 18.9411 15.6589 18.9239 15.6173C18.8224 15.3723 18.6277 15.1776 18.3827 15.0761C18.3411 15.0589 18.2542 15.0323 18.0262 15.0167C17.7893 15.0005 17.4796 15 17 15C16.5204 15 16.2107 15.0005 15.9738 15.0167Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.96802 3H7.03198C7.47064 2.99999 7.84913 2.99998 8.16238 3.02135C8.49221 3.04386 8.82212 3.09336 9.14805 3.22836C9.88314 3.53284 10.4672 4.11687 10.7716 4.85195C10.9066 5.17788 10.9561 5.50779 10.9787 5.83762C11 6.15088 11 6.52936 11 6.96801V7.03199C11 7.47064 11 7.84913 10.9787 8.16238C10.9561 8.49221 10.9066 8.82212 10.7716 9.14805C10.4672 9.88314 9.88314 10.4672 9.14805 10.7716C8.82212 10.9066 8.49221 10.9561 8.16238 10.9787C7.84913 11 7.47064 11 7.03199 11H6.96801C6.52936 11 6.15088 11 5.83762 10.9787C5.50779 10.9561 5.17788 10.9066 4.85195 10.7716C4.11687 10.4672 3.53284 9.88314 3.22836 9.14805C3.09336 8.82212 3.04386 8.49221 3.02135 8.16238C2.99998 7.84913 2.99999 7.47064 3 7.03198V6.96802C2.99999 6.52937 2.99998 6.15088 3.02135 5.83762C3.04386 5.50779 3.09336 5.17788 3.22836 4.85195C3.53284 4.11687 4.11687 3.53284 4.85195 3.22836C5.17788 3.09336 5.50779 3.04386 5.83762 3.02135C6.15088 2.99998 6.52937 2.99999 6.96802 3ZM5.97376 5.01671C5.74576 5.03227 5.65893 5.05888 5.61732 5.07612C5.37229 5.17762 5.17762 5.37229 5.07612 5.61732C5.05888 5.65893 5.03227 5.74576 5.01671 5.97376C5.00054 6.21074 5 6.52038 5 7C5 7.47963 5.00054 7.78926 5.01671 8.02624C5.03227 8.25424 5.05888 8.34107 5.07612 8.38268C5.17762 8.62771 5.37229 8.82239 5.61732 8.92388C5.65893 8.94112 5.74576 8.96773 5.97376 8.98329C6.21074 8.99946 6.52038 9 7 9C7.47963 9 7.78926 8.99946 8.02624 8.98329C8.25424 8.96773 8.34107 8.94112 8.38268 8.92388C8.62771 8.82239 8.82239 8.62771 8.92388 8.38268C8.94112 8.34107 8.96773 8.25424 8.98329 8.02624C8.99946 7.78926 9 7.47963 9 7C9 6.52038 8.99946 6.21074 8.98329 5.97376C8.96773 5.74576 8.94112 5.65893 8.92388 5.61732C8.82239 5.37229 8.62771 5.17762 8.38268 5.07612C8.34107 5.05888 8.25424 5.03227 8.02624 5.01671C7.78926 5.00054 7.47963 5 7 5C6.52038 5 6.21074 5.00054 5.97376 5.01671Z"
      fill="currentColor"
    />
  </IconBase>
);

export const GridSolidIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M15.5681 3C15.3157 2.99997 15.0699 2.99994 14.8618 3.01695C14.6332 3.03563 14.3634 3.07969 14.092 3.21799C13.7157 3.40974 13.4097 3.7157 13.218 4.09202C13.0797 4.36345 13.0356 4.63318 13.017 4.86178C12.9999 5.06993 13 5.31572 13 5.56811V8.4319C13 8.68429 12.9999 8.93008 13.017 9.13824C13.0356 9.36683 13.0797 9.63656 13.218 9.90799C13.4097 10.2843 13.7157 10.5903 14.092 10.782C14.3634 10.9203 14.6332 10.9644 14.8618 10.9831C15.0699 11.0001 15.3157 11 15.5681 11H18.4319C18.6843 11 18.9301 11.0001 19.1382 10.9831C19.3668 10.9644 19.6366 10.9203 19.908 10.782C20.2843 10.5903 20.5903 10.2843 20.782 9.90799C20.9203 9.63656 20.9644 9.36683 20.9831 9.13824C21.0001 8.93008 21 8.68429 21 8.4319V5.56811C21 5.31572 21.0001 5.06993 20.9831 4.86178C20.9644 4.63318 20.9203 4.36345 20.782 4.09202C20.5903 3.7157 20.2843 3.40974 19.908 3.21799C19.6366 3.07969 19.3668 3.03563 19.1382 3.01695C18.9301 2.99994 18.6843 2.99997 18.4319 3L15.5681 3Z"
      fill="currentColor"
    />
    <path
      d="M5.56811 13C5.31572 13 5.06993 12.9999 4.86178 13.017C4.63318 13.0356 4.36345 13.0797 4.09202 13.218C3.7157 13.4097 3.40974 13.7157 3.21799 14.092C3.07969 14.3634 3.03563 14.6332 3.01695 14.8618C2.99994 15.0699 2.99997 15.3157 3 15.5681L3 18.4319C2.99997 18.6843 2.99994 18.9301 3.01695 19.1382C3.03563 19.3668 3.07969 19.6366 3.21799 19.908C3.40974 20.2843 3.7157 20.5903 4.09202 20.782C4.36345 20.9203 4.63318 20.9644 4.86178 20.9831C5.06993 21.0001 5.31572 21 5.56811 21H8.4319C8.68429 21 8.93008 21.0001 9.13824 20.9831C9.36683 20.9644 9.63656 20.9203 9.90799 20.782C10.2843 20.5903 10.5903 20.2843 10.782 19.908C10.9203 19.6366 10.9644 19.3668 10.9831 19.1382C11.0001 18.9301 11 18.6843 11 18.4319V15.5681C11 15.3157 11.0001 15.0699 10.9831 14.8618C10.9644 14.6332 10.9203 14.3634 10.782 14.092C10.5903 13.7157 10.2843 13.4097 9.90799 13.218C9.63656 13.0797 9.36683 13.0356 9.13824 13.017C8.93008 12.9999 8.68429 13 8.4319 13H5.56811Z"
      fill="currentColor"
    />
    <path
      d="M15.5681 13C15.3157 13 15.0699 12.9999 14.8618 13.017C14.6332 13.0356 14.3634 13.0797 14.092 13.218C13.7157 13.4097 13.4097 13.7157 13.218 14.092C13.0797 14.3634 13.0356 14.6332 13.017 14.8618C12.9999 15.0699 13 15.3157 13 15.5681V18.4319C13 18.6843 12.9999 18.9301 13.017 19.1382C13.0356 19.3668 13.0797 19.6366 13.218 19.908C13.4097 20.2843 13.7157 20.5903 14.092 20.782C14.3634 20.9203 14.6332 20.9644 14.8618 20.9831C15.0699 21.0001 15.3157 21 15.5681 21H18.4319C18.6843 21 18.9301 21.0001 19.1382 20.9831C19.3668 20.9644 19.6366 20.9203 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C20.9203 19.6366 20.9644 19.3668 20.9831 19.1382C21.0001 18.9301 21 18.6843 21 18.4319V15.5681C21 15.3157 21.0001 15.0699 20.9831 14.8618C20.9644 14.6332 20.9203 14.3634 20.782 14.092C20.5903 13.7157 20.2843 13.4097 19.908 13.218C19.6366 13.0797 19.3668 13.0356 19.1382 13.017C18.9301 12.9999 18.6843 13 18.4319 13H15.5681Z"
      fill="currentColor"
    />
    <path
      d="M5.56811 3C5.31573 2.99997 5.06993 2.99994 4.86178 3.01695C4.63318 3.03563 4.36345 3.07969 4.09202 3.21799C3.7157 3.40974 3.40974 3.7157 3.21799 4.09202C3.07969 4.36345 3.03563 4.63318 3.01695 4.86178C2.99994 5.06993 2.99997 5.31572 3 5.56809L3 8.4319C2.99997 8.68428 2.99994 8.93008 3.01695 9.13824C3.03563 9.36683 3.07969 9.63656 3.21799 9.90799C3.40974 10.2843 3.7157 10.5903 4.09202 10.782C4.36345 10.9203 4.63318 10.9644 4.86178 10.9831C5.06992 11.0001 5.3157 11 5.56807 11H8.4319C8.68427 11 8.93009 11.0001 9.13824 10.9831C9.36683 10.9644 9.63656 10.9203 9.90799 10.782C10.2843 10.5903 10.5903 10.2843 10.782 9.90799C10.9203 9.63656 10.9644 9.36683 10.9831 9.13824C11.0001 8.93009 11 8.68431 11 8.43194V5.56811C11 5.31574 11.0001 5.06992 10.9831 4.86178C10.9644 4.63318 10.9203 4.36345 10.782 4.09202C10.5903 3.7157 10.2843 3.40974 9.90799 3.21799C9.63656 3.07969 9.36683 3.03563 9.13824 3.01695C8.93008 2.99994 8.68429 2.99997 8.43192 3L5.56811 3Z"
      fill="currentColor"
    />
  </IconBase>
);

export const GridDuotoneIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M15.5681 3C15.3157 2.99997 15.0699 2.99994 14.8618 3.01695C14.6332 3.03563 14.3634 3.07969 14.092 3.21799C13.7157 3.40974 13.4097 3.7157 13.218 4.09202C13.0797 4.36345 13.0356 4.63318 13.017 4.86178C12.9999 5.06993 13 5.31572 13 5.56811V8.4319C13 8.68429 12.9999 8.93008 13.017 9.13824C13.0356 9.36683 13.0797 9.63656 13.218 9.90799C13.4097 10.2843 13.7157 10.5903 14.092 10.782C14.3634 10.9203 14.6332 10.9644 14.8618 10.9831C15.0699 11.0001 15.3157 11 15.5681 11H18.4319C18.6843 11 18.9301 11.0001 19.1382 10.9831C19.3668 10.9644 19.6366 10.9203 19.908 10.782C20.2843 10.5903 20.5903 10.2843 20.782 9.90799C20.9203 9.63656 20.9644 9.36683 20.9831 9.13824C21.0001 8.93008 21 8.68429 21 8.4319V5.56811C21 5.31572 21.0001 5.06993 20.9831 4.86178C20.9644 4.63318 20.9203 4.36345 20.782 4.09202C20.5903 3.7157 20.2843 3.40974 19.908 3.21799C19.6366 3.07969 19.3668 3.03563 19.1382 3.01695C18.9301 2.99994 18.6843 2.99997 18.4319 3L15.5681 3Z"
      fill="currentColor"
    />
    <path
      d="M5.56811 13C5.31572 13 5.06993 12.9999 4.86178 13.017C4.63318 13.0356 4.36345 13.0797 4.09202 13.218C3.7157 13.4097 3.40974 13.7157 3.21799 14.092C3.07969 14.3634 3.03563 14.6332 3.01695 14.8618C2.99994 15.0699 2.99997 15.3157 3 15.5681L3 18.4319C2.99997 18.6843 2.99994 18.9301 3.01695 19.1382C3.03563 19.3668 3.07969 19.6366 3.21799 19.908C3.40974 20.2843 3.7157 20.5903 4.09202 20.782C4.36345 20.9203 4.63318 20.9644 4.86178 20.9831C5.06993 21.0001 5.31572 21 5.56811 21H8.4319C8.68429 21 8.93008 21.0001 9.13824 20.9831C9.36683 20.9644 9.63656 20.9203 9.90799 20.782C10.2843 20.5903 10.5903 20.2843 10.782 19.908C10.9203 19.6366 10.9644 19.3668 10.9831 19.1382C11.0001 18.9301 11 18.6843 11 18.4319V15.5681C11 15.3157 11.0001 15.0699 10.9831 14.8618C10.9644 14.6332 10.9203 14.3634 10.782 14.092C10.5903 13.7157 10.2843 13.4097 9.90799 13.218C9.63656 13.0797 9.36683 13.0356 9.13824 13.017C8.93008 12.9999 8.68429 13 8.4319 13H5.56811Z"
      fill="currentColor"
    />
    <path
      d="M15.5681 13C15.3157 13 15.0699 12.9999 14.8618 13.017C14.6332 13.0356 14.3634 13.0797 14.092 13.218C13.7157 13.4097 13.4097 13.7157 13.218 14.092C13.0797 14.3634 13.0356 14.6332 13.017 14.8618C12.9999 15.0699 13 15.3157 13 15.5681V18.4319C13 18.6843 12.9999 18.9301 13.017 19.1382C13.0356 19.3668 13.0797 19.6366 13.218 19.908C13.4097 20.2843 13.7157 20.5903 14.092 20.782C14.3634 20.9203 14.6332 20.9644 14.8618 20.9831C15.0699 21.0001 15.3157 21 15.5681 21H18.4319C18.6843 21 18.9301 21.0001 19.1382 20.9831C19.3668 20.9644 19.6366 20.9203 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C20.9203 19.6366 20.9644 19.3668 20.9831 19.1382C21.0001 18.9301 21 18.6843 21 18.4319V15.5681C21 15.3157 21.0001 15.0699 20.9831 14.8618C20.9644 14.6332 20.9203 14.3634 20.782 14.092C20.5903 13.7157 20.2843 13.4097 19.908 13.218C19.6366 13.0797 19.3668 13.0356 19.1382 13.017C18.9301 12.9999 18.6843 13 18.4319 13H15.5681Z"
      fill="currentColor"
    />
    <path
      d="M5.56811 3C5.31573 2.99997 5.06993 2.99994 4.86178 3.01695C4.63318 3.03563 4.36345 3.07969 4.09202 3.21799C3.7157 3.40974 3.40974 3.7157 3.21799 4.09202C3.07969 4.36345 3.03563 4.63318 3.01695 4.86178C2.99994 5.06993 2.99997 5.31572 3 5.56809L3 8.4319C2.99997 8.68428 2.99994 8.93008 3.01695 9.13824C3.03563 9.36683 3.07969 9.63656 3.21799 9.90799C3.40974 10.2843 3.7157 10.5903 4.09202 10.782C4.36345 10.9203 4.63318 10.9644 4.86178 10.9831C5.06992 11.0001 5.3157 11 5.56807 11H8.4319C8.68427 11 8.93009 11.0001 9.13824 10.9831C9.36683 10.9644 9.63656 10.9203 9.90799 10.782C10.2843 10.5903 10.5903 10.2843 10.782 9.90799C10.9203 9.63656 10.9644 9.36683 10.9831 9.13824C11.0001 8.93009 11 8.68431 11 8.43194V5.56811C11 5.31574 11.0001 5.06992 10.9831 4.86178C10.9644 4.63318 10.9203 4.36345 10.782 4.09202C10.5903 3.7157 10.2843 3.40974 9.90799 3.21799C9.63656 3.07969 9.36683 3.03563 9.13824 3.01695C8.93008 2.99994 8.68429 2.99997 8.43192 3L5.56811 3Z"
      fill="#3D3D40"
    />
  </IconBase>
);
