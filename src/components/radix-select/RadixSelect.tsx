import type { ReactNode } from 'react';

import * as Select from '@radix-ui/react-select';
import clsx from 'clsx';

import { CheckmarkIcon } from 'src/icons/CheckmarkIcon';
import { DoubleChevronIcon } from 'src/icons/DoubleChevronIcon';
import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';
import type { SelectOption, SelectValue } from 'src/types/SelectOption';
import type { Size } from 'src/types/Size';

import styles from './RadixSelect.module.scss';

export type RadixSelectProps<V extends SelectValue = SelectValue> =
  BaseProps & {
    customOption?: (value: V) => ReactNode;
    disabled?: boolean;
    error?: boolean;
    helpText?: string;
    icon?: ReactNode;
    label?: string;
    onChange: (value: SelectOption<V>[] | SelectOption<V> | null) => void;
    options: SelectOption<V>[];
    placeholder?: string;
    size?: Size;
    value: SelectOption<V>[] | SelectOption<V> | null;
  };

export const RadixSelect = <V extends SelectValue>({
  className,
  customOption,
  disabled,
  error,
  helpText,
  icon,
  label,
  onChange,
  options,
  placeholder = 'Select an option...',
  size = 'md',
  style,
  value,
}: RadixSelectProps<V>) => {
  const selectedOption = Array.isArray(value)
    ? options.find(opt => opt.value === value[0]?.value)
    : options.find(opt => opt.value === value?.value);

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

  const getHeight = () => {
    switch (size) {
      case 'sm':
        return `${theme.sizeSm}`;
      case 'lg':
        return `${theme.sizeLg}`;
      case 'xl':
        return `${theme.sizeXl}`;
      case 'md':
      default:
        return `${theme.sizeMd}`;
    }
  };

  return (
    <div
      className={clsx(
        styles.selectWrapper,
        error && styles.hasError,
        className,
      )}
      style={style}
    >
      {label && <div className={styles.label}>{label}</div>}
      <Select.Root
        disabled={disabled}
        onValueChange={val => {
          const option = options.find(opt => opt.value?.toString() === val);
          onChange(option ?? null);
        }}
        value={selectedOption?.value?.toString()}
      >
        <Select.Trigger
          className={clsx(
            styles.selectTrigger,
            styles[size as keyof typeof styles],
            icon && styles.hasIcon,
          )}
          style={{
            '--amino-radix-select-border-radius': getRadius(),
            '--amino-radix-select-height': getHeight(),
          }}
        >
          {icon && (
            <span className={styles.iconWrapper}>
              {selectedOption?.icon || icon}
            </span>
          )}
          <span className={styles.valueWrapper}>
            <Select.Value placeholder={placeholder}>
              {selectedOption?.label || placeholder}
            </Select.Value>
          </span>
          <Select.Icon>
            <DoubleChevronIcon color="gray800" size={24} />
          </Select.Icon>
        </Select.Trigger>

        <Select.Content className={styles.selectContent} position="popper">
          <Select.Viewport>
            {options.map(option => (
              <Select.Item
                key={option.value?.toString()}
                className={styles.selectItem}
                disabled={option.isDisabled}
                value={option.value?.toString() ?? ''}
              >
                <Select.ItemText>
                  {customOption ? (
                    customOption(option.value)
                  ) : (
                    <div className={styles.optionContent}>
                      {option.icon && (
                        <span className={styles.optionIcon}>{option.icon}</span>
                      )}
                      <div className={styles.optionTextWrapper}>
                        <span className={styles.optionLabel}>
                          {option.label}
                        </span>
                        {!option.secondaryText ? (
                          <Select.ItemIndicator>
                            <CheckmarkIcon color="blue600" size={20} />
                          </Select.ItemIndicator>
                        ) : (
                          <span className={styles.optionSecondaryText}>
                            {option.secondaryText}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Root>
      {helpText && (
        <div className={clsx(styles.helpText, error && styles.error)}>
          {helpText}
        </div>
      )}
    </div>
  );
};
