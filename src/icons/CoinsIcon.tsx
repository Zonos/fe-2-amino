import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CoinsIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M4.11 5.5c.018.03.058.084.14.16.194.175.534.383 1.049.581 1.02.393 2.506.659 4.2.659 1.696 0 3.181-.266 4.202-.659.514-.198.855-.406 1.048-.582a.745.745 0 0 0 .14-.16.746.746 0 0 0-.14-.158c-.193-.176-.534-.384-1.048-.582-1.02-.393-2.506-.66-4.201-.66-1.695 0-3.18.267-4.201.66-.515.198-.855.406-1.048.582a.741.741 0 0 0-.14.159ZM14.9 8.124c-.134.06-.27.117-.409.17-1.332.512-3.096.806-4.991.806-1.895 0-3.66-.294-4.991-.806a7.85 7.85 0 0 1-.41-.17v1.393a4.892 4.892 0 0 0 1.59.887l.159.052a1.1 1.1 0 1 1-.696 2.088l-.158-.053a7.086 7.086 0 0 1-.894-.368v1.39c0 .02.008.04.023.054.31.31.688.544 1.104.682l.62.207a1.1 1.1 0 1 1-.695 2.088l-.621-.208a5.024 5.024 0 0 1-1.964-1.213 2.277 2.277 0 0 1-.667-1.61V5.5c0-.762.406-1.364.87-1.787.465-.423 1.077-.753 1.739-1.008C5.84 2.193 7.605 1.9 9.499 1.9c1.896 0 3.66.293 4.992.805.662.255 1.273.585 1.738 1.008.465.423.87 1.025.87 1.787V9h-2.2v-.876ZM16 9h-1.1a1.1 1.1 0 1 0 2.2 0H16Zm-5.8 6.1c.129.147.368.344.761.543.797.403 2.117.757 4.039.757 1.922 0 3.242-.354 4.038-.757.394-.199.633-.396.762-.543-.187-.129-.494-.284-.933-.435-.958-.329-2.335-.565-3.867-.565-1.533 0-2.91.236-3.867.565-.44.151-.746.306-.933.435Zm9.7 2.571c-1.172.561-2.808.929-4.9.929-2.092 0-3.728-.368-4.9-.929v.59c0 .21.014.352.04.452a.385.385 0 0 0 .039.097c.322.311 1.466 1.09 4.82 1.09 3.356 0 4.5-.779 4.822-1.09l.002-.003a.385.385 0 0 0 .037-.095c.025-.099.04-.242.04-.45v-.59ZM22.1 15v3.261c0 .511-.043 1.448-.751 2.131-.898.867-2.705 1.708-6.35 1.708-3.644 0-5.45-.84-6.348-1.708-.708-.683-.751-1.62-.751-2.13V15c0-.77.511-1.304.911-1.61.436-.331 1-.597 1.607-.805 1.225-.421 2.849-.685 4.582-.685 1.733 0 3.357.264 4.582.685.607.208 1.17.474 1.607.806.4.305.91.84.91 1.609Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  )
);
