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
    disabled?: boolean;
    error?: boolean;
    helpText?: string;
    icon?: ReactNode;
    label?: string;
    options: SelectOption<V>[];
    placeholder?: string;
    size?: Size;
    value: V | null;
    onChange: (value: V | null) => void;
  };

export const RadixSelect = <V extends SelectValue>({
  className,
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
  const selectedOption = options.find(opt => opt.value === value);

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
          onChange(option?.value ?? null);
        }}
        value={value?.toString()}
      >
        <Select.Trigger
          className={clsx(
            styles.selectTrigger,
            styles[size as keyof typeof styles],
            icon && styles.hasIcon,
          )}
          style={{
            borderRadius: getRadius(),
            height: getHeight(),
          }}
        >
          <span className={styles.valueWrapper}>
            {icon}
            <Select.Value placeholder={placeholder}>
              {selectedOption?.label || placeholder}
            </Select.Value>
          </span>
          <Select.Icon>
            <DoubleChevronIcon color="gray800" size={24} />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
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
                    <div className={styles.optionContent}>
                      {option.icon && (
                        <span className={styles.optionIcon}>{option.icon}</span>
                      )}
                      {option.label}
                    </div>
                  </Select.ItemText>
                  <Select.ItemIndicator>
                    <CheckmarkIcon color="blue600" size={20} />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
      {helpText && (
        <div className={clsx(styles.helpText, error && styles.error)}>
          {helpText}
        </div>
      )}
    </div>
  );
};
