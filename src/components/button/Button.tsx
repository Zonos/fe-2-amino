import {
  type ComponentPropsWithoutRef,
  type HTMLAttributes,
  type MouseEventHandler,
  type ReactNode,
  useRef,
} from 'react';

import clsx from 'clsx';

import {
  type RippleActions,
  RippleGroup,
} from 'src/components/button/RippleGroup';
import { useRipple } from 'src/components/button/useRipple';
import { type SpinnerProps, Spinner } from 'src/components/spinner/Spinner';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { BaseProps } from 'src/types/BaseProps';
import type { Size } from 'src/types/Size';
import type { Theme } from 'src/types/Theme';
import type { Variant } from 'src/types/Variant';
import { getAminoColor } from 'src/utils/getAminoColor';
import { useAminoTheme } from 'src/utils/hooks/useAminoTheme';

import styles from './Button.module.scss';

type ButtonBase = BaseProps & {
  background?: Color | 'inherit';
  children?: ReactNode;
  color?: Color | 'inherit';
  disabled?: boolean;
  fitContentWidth?: boolean;
  hoverBackground?: Color | 'inherit';
  icon?: ReactNode;
  iconRight?: boolean;
  /** @default false */
  loading?: boolean;
  loadingText?: string;
  /**
   * Disable ripple effect
   * @default false
   */
  noRipple?: boolean;
  outline?: boolean;
  /**
   * @default 'sm'
   */
  size?: Size;
  /** Color for the spinner when in a loading state */
  spinnerColor?: SpinnerProps['color'];
  tabIndex?: number;
  themeOverride?: Theme;
  type?: 'button' | 'reset' | 'submit';
  /** @default 'standard' */
  variant?: Variant;
};

/** These types are a bit cobbled together to allow for the polymorphic tag names.
 * It may be a good idea to look into refactoring this funcitonality
 */

export type GroupTag = 'div' | 'a' | 'button';

const DEFAULT_TAG = 'button' as const;

type MyHtmlElement<T extends GroupTag> = T extends 'a'
  ? HTMLAnchorElement
  : T extends 'button'
  ? HTMLButtonElement
  : HTMLDivElement;

// source: https://stackoverflow.com/questions/55969769/typing-a-dynamic-tag-in-react-with-typescript#:~:text=I%20don%27t%20see,the%20div%20tag.
export type ButtonProps<T extends GroupTag = typeof DEFAULT_TAG> =
  ButtonBase & {
    // Temporary fix for using styled components on Button. Remove after moving all buttons to CSS modules in the dashboard.
    href?: T extends 'a' ? string : never;
    onClick?: MouseEventHandler<MyHtmlElement<T>>;
    tag?: T | GroupTag;
  } & Omit<ComponentPropsWithoutRef<T>, keyof ButtonBase | 'onClick'>;

export function Button<T extends GroupTag = typeof DEFAULT_TAG>({
  background,
  children,
  className,
  color,
  disabled = false,
  fitContentWidth,
  hoverBackground,
  icon,
  iconRight,
  loading = false,
  loadingText,
  noRipple = false,
  outline = false,
  size = 'sm',
  spinnerColor,
  style,
  tag = DEFAULT_TAG,
  themeOverride,
  type = 'button',
  variant = 'standard',
  ...props
}: ButtonProps<T>) {
  const Tag: GroupTag = tag;

  const getSpinnerSize = () => {
    switch (size) {
      case 'sm':
        return 16;
      case 'lg':
      case 'xl':
        return 24;
      case 'md':
      default:
        return 20;
    }
  };

  const renderContent = (_spinnerColor?: SpinnerProps['color']) => (
    <>
      {!iconRight && <span className={styles.content}>{icon}</span>}
      <div className={clsx(styles.content, styles.text)}>{children}</div>
      {iconRight && <span className={styles.content}>{icon}</span>}
      {variant !== 'plain' && variant !== 'text' && loading && (
        <span className={styles.spinnerWrapper}>
          <Spinner color={_spinnerColor} size={getSpinnerSize()} />
          {loadingText}
        </span>
      )}
    </>
  );

  const buttonClassName = clsx(
    'amino-button',
    styles.aminoButton,
    variant === 'plain' ? '' : styles[`${variant}Button`],
    outline && styles.outline,
    className || '',
    icon && !children ? styles.onlyIcon : '',
    iconRight ? styles.iconRight : '',
    icon ? styles.hasIcon : '',
    loading ? styles.loading : '',
    themeOverride,
  );

  const rippleRef = useRef<RippleActions>(null);

  const { getRippleHandlers, rippleEnabled } = useRipple({
    disabled: disabled || loading,
    rippleEnabled: !noRipple && !['plain', 'text'].includes(variant),
    rippleRef,
  });

  const baseProps = {
    className: buttonClassName,
    disabled: disabled || loading,
    size,
  };

  const buttonProps = {
    type,
    ...baseProps,
    ...(props as HTMLAttributes<HTMLElement>),
    ...getRippleHandlers(props),
  };

  const { aminoTheme } = useAminoTheme();

  const isNightTheme = aminoTheme === 'night';

  const getPadding = () => {
    switch (size) {
      case 'sm':
        return `${theme.space4} ${theme.space8}`;
      case 'lg':
      case 'xl':
        return `${theme.space12} ${theme.space24}`;
      case 'md':
      default:
        return `${theme.space8} ${theme.space16}`;
    }
  };

  const getRadius = () => {
    switch (size) {
      case 'sm':
        return `${theme.radius6}`;
      case 'lg':
      case 'xl':
        return `${theme.radius10}`;
      case 'md':
      default:
        return `${theme.radius8}`;
    }
  };

  const getFontWeight = () => {
    switch (size) {
      case 'lg':
      case 'xl':
        return 600;
      case 'sm':
      case 'md':
      default:
        return 500;
    }
  };

  const getDefaultSpinnerColor = () => {
    switch (variant) {
      case 'primary':
        if (outline) {
          return 'info';
        }
        if (isNightTheme) {
          return 'black';
        }
        return 'white';
      case 'success':
        if (outline) {
          return 'success';
        }
        if (isNightTheme) {
          return 'black';
        }
        return 'white';
      case 'warning':
        if (outline) {
          return 'warning';
        }
        if (isNightTheme) {
          return 'black';
        }
        return 'white';
      case 'danger':
        if (outline) {
          return 'danger';
        }
        if (isNightTheme) {
          return 'black';
        }
        return 'white';
      case 'link':
      case 'inlineLink':
        return 'info';
      case 'plain':
      case 'subtle':
      case 'text':
      case 'standard':
      default:
        return 'black';
    }
  };

  const getColor = () => {
    if (color) {
      return getAminoColor(color) || '';
    }
    switch (variant) {
      case 'primary':
      case 'success':
      case 'warning':
      case 'danger':
        return theme.gray0;
      case 'link':
      case 'inlineLink':
        return theme.primary;
      case 'subtle':
        return theme.textColorSecondary;
      case 'plain':
      case 'text':
      case 'standard':
      default:
        return theme.textColor;
    }
  };

  const getHoverBackground = () => {
    if (hoverBackground && hoverBackground !== 'inherit') {
      const aminoColor = getAminoColor(hoverBackground);
      return `linear-gradient(${aminoColor}, ${aminoColor})`;
    }
    switch (variant) {
      case 'primary':
        return theme.buttonPrimaryHover;
      case 'success':
        return theme.buttonSuccessHover;
      case 'warning':
        return theme.buttonWarningHover;
      case 'danger':
        return theme.buttonDangerHover;
      case 'standard':
        return theme.buttonStandardHover;
      case 'subtle':
        return theme.gray100;
      case 'link':
        return theme.blue100;
      case 'text':
        return theme.gray500;
      default:
        return '';
    }
  };

  const getBackgroundColor = () => {
    if (background) {
      return getAminoColor(background) || '';
    }
    switch (variant) {
      case 'primary':
        return theme.primary;
      case 'success':
        return theme.success;
      case 'warning':
        return theme.warning;
      case 'danger':
        return theme.danger;
      case 'standard':
        return theme.raisedSurfaceColor;
      case 'subtle':
      case 'inlineLink':
        return 'none';
      default:
        return '';
    }
  };

  return (
    <Tag
      style={{
        ...style,
        '--amino-button-background-color': getBackgroundColor(),
        '--amino-button-color': getColor(),
        '--amino-button-font-weight': getFontWeight(),
        '--amino-button-hover-background-color': getHoverBackground(),
        '--amino-button-padding': getPadding(),
        '--amino-button-radius': getRadius(),
        '--amino-button-size': `var(--amino-size-${size})`,
        '--amino-button-text-button-color': props.href
          ? theme.primary
          : theme.textColorSecondary,
        '--amino-button-text-button-disabled-color': props.href
          ? theme.blue300
          : theme.gray300,
        '--amino-button-text-button-hover-color': props.href
          ? theme.blue500
          : theme.gray500,
        '--amino-button-width': fitContentWidth ? 'fit-content' : 'auto',
      }}
      tabIndex={tag === 'div' ? 0 : undefined}
      {...buttonProps}
    >
      {renderContent(spinnerColor || getDefaultSpinnerColor())}
      {rippleEnabled && <RippleGroup ref={rippleRef} />}
    </Tag>
  );
}
