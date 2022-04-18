import React from 'react';

import { type IconProps } from 'types';

import { IconBase } from './IconBase';

/** @deprecated Use BankCardIcon instead */
export const CreditCardIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M6 15C6 14.4477 6.44772 14 7 14H11C11.5523 14 12 14.4477 12 15C12 15.5523 11.5523 16 11 16H7C6.44772 16 6 15.5523 6 15Z"
      fill="currentColor"
    />
    <path d="M2 9H22V11H2V9Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.7587 4H16.2413C17.0463 3.99999 17.7106 3.99998 18.2518 4.04419C18.8139 4.09012 19.3306 4.18868 19.816 4.43597C20.5686 4.81947 21.1805 5.43139 21.564 6.18404C21.8113 6.66937 21.9099 7.18608 21.9558 7.74817C22 8.28936 22 8.95372 22 9.75868V14.2413C22 15.0463 22 15.7106 21.9558 16.2518C21.9099 16.8139 21.8113 17.3306 21.564 17.816C21.1805 18.5686 20.5686 19.1805 19.816 19.564C19.3306 19.8113 18.8139 19.9099 18.2518 19.9558C17.7106 20 17.0463 20 16.2413 20H7.75872C6.95374 20 6.28938 20 5.74817 19.9558C5.18608 19.9099 4.66937 19.8113 4.18404 19.564C3.43139 19.1805 2.81947 18.5686 2.43597 17.816C2.18868 17.3306 2.09012 16.8139 2.04419 16.2518C1.99998 15.7106 1.99999 15.0463 2 14.2413V9.7587C1.99999 8.95373 1.99998 8.28937 2.04419 7.74818C2.09012 7.18608 2.18868 6.66937 2.43597 6.18404C2.81947 5.43139 3.43139 4.81947 4.18404 4.43597C4.66937 4.18868 5.18608 4.09012 5.74817 4.04419C6.28937 3.99998 6.95373 3.99999 7.7587 4ZM5.91104 6.03755C5.47262 6.07337 5.24842 6.1383 5.09202 6.21799C4.7157 6.40973 4.40973 6.7157 4.21799 7.09202C4.1383 7.24842 4.07337 7.47262 4.03755 7.91104C4.00078 8.36113 4 8.94342 4 9.8V14.2C4 15.0566 4.00078 15.6389 4.03755 16.089C4.07337 16.5274 4.1383 16.7516 4.21799 16.908C4.40973 17.2843 4.7157 17.5903 5.09202 17.782C5.24842 17.8617 5.47262 17.9266 5.91104 17.9624C6.36113 17.9992 6.94342 18 7.8 18H16.2C17.0566 18 17.6389 17.9992 18.089 17.9624C18.5274 17.9266 18.7516 17.8617 18.908 17.782C19.2843 17.5903 19.5903 17.2843 19.782 16.908C19.8617 16.7516 19.9266 16.5274 19.9624 16.089C19.9992 15.6389 20 15.0566 20 14.2V9.8C20 8.94342 19.9992 8.36113 19.9624 7.91104C19.9266 7.47262 19.8617 7.24842 19.782 7.09202C19.5903 6.7157 19.2843 6.40973 18.908 6.21799C18.7516 6.1383 18.5274 6.07337 18.089 6.03755C17.6389 6.00078 17.0566 6 16.2 6H7.8C6.94342 6 6.36113 6.00078 5.91104 6.03755Z"
      fill="currentColor"
    />
  </IconBase>
);
CreditCardIcon.deprecated = true;
