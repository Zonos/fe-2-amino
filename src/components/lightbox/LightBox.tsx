import { forwardRef, ReactNode } from 'react';

import { IAminoTheme } from 'src/types/IAminoTheme';

import { BaseDialog } from '../dialog/_BaseDialog';

export type LightBoxProps = {
  className?: string;
  children: ReactNode;
  onClose: () => void;
  open: boolean;
  theme?: IAminoTheme;
  width?: number;
  noBorder?: boolean;
  /** Close when clicking outside dialog (on the backdrop)
   * @default true
   */
  closeOnBlur?: boolean;
  /** 
   * Close on pressing 'escape' key
   * @param closeOnEsc
   * @default true
   */
  closeOnEsc?: boolean;
};

export const LightBox = forwardRef<HTMLDivElement, LightBoxProps>(
  ({
    children,
    className,
    onClose,
    open,
    theme: _theme,
    width,
    noBorder = true,
    closeOnBlur,
    closeOnEsc,
  }) => (
    <BaseDialog
      className={className}
      data-theme={_theme}
      open={open}
      width={width}
      noBorder={noBorder}
      onClose={onClose}
      closeOnBlur={closeOnBlur}
      closeOnEsc={closeOnEsc}
    >
      {children}
    </BaseDialog>
  )
);
