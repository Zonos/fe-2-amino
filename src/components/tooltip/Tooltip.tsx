import type { ReactNode } from 'react';

import type { PopperProps } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import MuiTooltip, {
  type TooltipProps as MuiTooltipProps,
  tooltipClasses,
} from '@mui/material/Tooltip';

import { Flex } from 'src/components/flex/Flex';
import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import type { Theme } from 'src/types';
import type { BaseProps } from 'src/types/BaseProps';

export type TooltipProps = BaseProps & {
  /**
   * The component that will trigger the tooltip.
   */
  children: ReactNode;
  /**
   * The delay in milliseconds before showing the tooltip.
   * @default 0
   */
  delay?: number;
  /**
   * Whether the tooltip should be shown.
   *
   * Leave as undefined to remain uncontrolled.
   * @default undefined
   */
  disabled?: boolean;
  /**
   * Override to stay open.
   * @default false
   */
  open?: boolean;
  /**
   *
   */
  subtitle?: ReactNode;
  /**
   * Set to `null` to use current theme. Our default tooltips are designed to be dark.
   *
   * @default 'night'
   */
  themeOverride?: Theme;
  /**
   * The content of the tooltip.
   */
  title?: ReactNode;
} & Partial<Omit<MuiTooltipProps, 'children'>>;
const StyledTooltip = muiStyled(
  ({
    className,
    dataTheme,
    ...props
  }: MuiTooltipProps & { dataTheme: Theme }) => (
    <MuiTooltip
      {...props}
      classes={{ popper: className }}
      PopperProps={
        {
          ...props.PopperProps,
          'data-theme': dataTheme,
        } as PopperProps
      }
    />
  ),
)(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    all: 'revert',
    backgroundColor: theme.gray0,
    borderRadius: theme.radius10,
    boxShadow: theme.v3ShadowLarge,
    color: theme.textColor,
    padding: theme.space12,
  },
  [`&[data-theme='night']`]: {
    [`.${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.gray50,
    },
  },
}));

export const Tooltip = ({
  children,
  className,
  delay = 0,
  disabled = false,
  open,
  subtitle,
  themeOverride = 'night',
  title,
  ...rest
}: TooltipProps) => {
  const renderTooltip = () => (
    <Flex flexDirection="column" gap={8}>
      {typeof title === 'string' ? (
        <Text type="small-header">{title}</Text>
      ) : (
        <>{title}</>
      )}
      {typeof subtitle === 'string' ? (
        <Text type="caption">{subtitle}</Text>
      ) : (
        <>{subtitle}</>
      )}
    </Flex>
  );

  if (!disabled) {
    return (
      <StyledTooltip
        {...rest}
        className={className}
        dataTheme={themeOverride}
        enterDelay={delay}
        enterNextDelay={delay}
        open={open}
        title={renderTooltip()}
      >
        <div className="tooltip-wrapper">{children}</div>
      </StyledTooltip>
    );
  }

  return children;
};
