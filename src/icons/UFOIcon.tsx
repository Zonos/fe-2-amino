import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const UFOIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inline, size }, ref) => (
    <IconBase
      ref={ref}
      className={className}
      color={color}
      inline={inline}
      size={size}
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M12 5.5c-1.583 0-2.819.943-3.155 2.088a2.344 2.344 0 0 0-.095.662c0 .363.083.62.201.81.12.192.303.36.572.502.56.297 1.411.438 2.477.438 1.066 0 1.917-.141 2.477-.438.269-.142.452-.31.572-.502.118-.19.201-.447.201-.81 0-.229-.033-.45-.095-.662C14.819 6.443 13.583 5.5 12 5.5ZM7.534 6.799C8.21 5.123 9.997 4 12 4s3.79 1.123 4.466 2.799c.871.348 1.631.808 2.202 1.366.647.633 1.082 1.428 1.082 2.335 0 1.446-1.082 2.582-2.446 3.313C15.908 14.56 14.032 15 12 15c-2.032 0-3.908-.44-5.304-1.187-1.364-.731-2.446-1.867-2.446-3.313 0-.907.435-1.702 1.082-2.335.57-.558 1.33-1.018 2.202-1.366Zm-.269 1.787c-.354.203-.65.423-.884.651-.445.436-.631.866-.631 1.263 0 .625.485 1.364 1.654 1.99 1.138.61 2.762 1.01 4.596 1.01s3.458-.4 4.596-1.01c1.169-.626 1.654-1.365 1.654-1.99 0-.397-.186-.827-.63-1.263a4.348 4.348 0 0 0-.885-.65c-.044.468-.18.893-.413 1.266a2.934 2.934 0 0 1-1.142 1.035c-.888.47-2.037.612-3.18.612-1.143 0-2.292-.142-3.18-.612a2.934 2.934 0 0 1-1.142-1.035 2.866 2.866 0 0 1-.413-1.267ZM9.5 15.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm2.5 0a.75.75 0 0 1 .75.75v2.75a.75.75 0 0 1-1.5 0V16.5a.75.75 0 0 1 .75-.75Zm2.5 0a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconBase>
  ),
);
