import { type ReactNode } from 'react';

import {
  type CollapseProps as MuiCollapseProps,
  Collapse as MuiCollapse,
} from '@mui/material';

// https://mui.com/material-ui/api/collapse

export type CollapseProps = {
  children: ReactNode;
  className?: string;
  /**
   * Size when collapsed
   * @default 0
   */
  collapseSize?: number;
  /**
   * Collapsed state
   * @default false
   */
  collapsed?: boolean;
} & Pick<MuiCollapseProps, 'orientation'>;

export const Collapse = ({
  children,
  className,
  collapsed = false,
  collapseSize = 0,
  orientation,
}: CollapseProps) => (
  <MuiCollapse
    className={className}
    collapsedSize={collapseSize}
    in={!collapsed}
    orientation={orientation}
  >
    {children}
  </MuiCollapse>
);
