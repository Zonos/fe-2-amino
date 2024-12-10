import { forwardRef } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types/Color';
import type { IconProps } from 'src/types/IconProps';

export const SettingsDuotoneIcon = forwardRef<
  SVGSVGElement,
  IconProps & { secondaryColor?: Color }
>(({ className, color, inlineBlock, secondaryColor, size }, ref) => (
  <IconBase
    className={className}
    color={color || 'gray800'}
    inlineBlock={inlineBlock}
    ref={ref}
    size={size}
    viewBox="0 0 24 24"
  >
    <path
      d="M11.871 4a1.75 1.75 0 0 0-1.733 1.51l-.087.633c-.012.084-.087.208-.266.28a5.94 5.94 0 0 0-.191.08c-.176.076-.317.042-.385-.009l-.308-.23a1.75 1.75 0 0 0-2.287.162l-.188.188A1.75 1.75 0 0 0 6.264 8.9l.23.308c.051.068.085.209.008.385a5.974 5.974 0 0 0-.08.191c-.07.18-.195.254-.28.266l-.631.087A1.75 1.75 0 0 0 4 11.87v.258a1.75 1.75 0 0 0 1.51 1.733l.633.087c.084.012.208.087.28.266.025.064.051.128.08.191.076.176.042.317-.009.385l-.23.308a1.75 1.75 0 0 0 .162 2.287l.188.188a1.75 1.75 0 0 0 2.287.162l.308-.23c.068-.051.209-.085.385-.008.063.028.127.054.191.08.18.07.254.195.266.28l.087.631a1.75 1.75 0 0 0 1.733 1.511h.258a1.75 1.75 0 0 0 1.733-1.51l.087-.633c.012-.084.087-.208.266-.28.064-.025.128-.051.191-.08.176-.076.317-.042.385.009l.308.23a1.75 1.75 0 0 0 2.287-.162l.188-.188a1.75 1.75 0 0 0 .162-2.287l-.23-.308c-.051-.068-.085-.209-.008-.385.028-.063.054-.127.08-.191.07-.18.195-.254.28-.266l.631-.087A1.75 1.75 0 0 0 20 12.13v-.258a1.75 1.75 0 0 0-1.51-1.733l-.633-.087c-.084-.012-.208-.087-.28-.266a6.034 6.034 0 0 0-.08-.191c-.076-.176-.042-.317.009-.385l.23-.308a1.75 1.75 0 0 0-.162-2.287l-.188-.188a1.75 1.75 0 0 0-2.287-.162l-.308.23c-.068.051-.209.085-.385.008a5.895 5.895 0 0 0-.191-.08c-.18-.07-.254-.195-.266-.28l-.087-.631A1.75 1.75 0 0 0 12.13 4h-.258Z"
      data-is-secondary-color="true"
      fill={secondaryColor ? `${theme[secondaryColor]}` : `${theme.gray400}`}
    />
    <circle cx="12" cy="12" fill="currentColor" r="1.25" />
  </IconBase>
));
