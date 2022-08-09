import React, { InputHTMLAttributes, ReactNode } from 'react';

import styled from 'styled-components';

import { HelpText, HelpTextProps } from '../help-text/HelpText';
import { DateInput } from './input-type/_DateInput';
import {
  FloatLabelInput,
  FloatLabelInputProps,
} from './input-type/_FloatLabelInput';
import { NumberInput } from './input-type/_NumberInput';
import { PasswordInput } from './input-type/_PasswordInput';

const Fields = styled.div`
  border-radius: var(--amino-radius);
  border: var(--amino-border);
  &:hover {
    border: 1px solid var(--amino-gray-300);
  }
`;

const AminoInputWrapper = styled.div<{ width?: number }>`
  position: relative;
  width: ${p => (p.width ? `${p.width}px` : '100%')};

  & > div {
    flex-direction: row;
    align-items: center;
    display: flex;
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.4;
    user-select: none;
  }
`;

type DateInputEventHandler = (
  e: Omit<React.ChangeEvent<HTMLInputElement>, 'target'> & {
    target: Omit<EventTarget, 'value'> & {
      /** @desc The parsed value is always formatted `yyyy-mm-dd`. Ex: '2022-12-28' */
      value: `${number}-${number}-${number}`;
    };
  }
) => void;

type InputType<T extends string> = {
  /** A value (in px) that will determine how wide the input is. If nothing is passed, it defaults to 100% */
  width?: number;
  type?: T;
  onChange: T extends 'date'
    ? DateInputEventHandler
    : React.ChangeEventHandler<HTMLInputElement>;
  inputSuffix?: ReactNode;
  inputPrefix?: ReactNode;
} & Omit<FloatLabelInputProps, 'onChange' | 'type'> &
  HelpTextProps;

export type InputProps<T extends string = string> = InputType<T> &
  Omit<InputHTMLAttributes<HTMLInputElement>, keyof InputType<T>>;

export const Input = <T extends string>({
  autoFocus,
  className,
  disabled,
  error,
  helpText,
  inputMode,
  inputPrefix,
  inputSuffix,
  label,
  onChange,
  onKeyDown,
  pattern,
  placeholder,
  prefix,
  readOnly,
  required,
  suffix,
  tabIndex,
  type,
  size,
  value,
  valuePrefix,
  width,
  ...props
}: InputProps<T>) => {
  const renderInput = () => {
    switch (type) {
      case 'password':
        return (
          <PasswordInput
            autoFocus={autoFocus}
            className={className}
            disabled={disabled}
            error={error}
            inputMode={inputMode}
            label={label}
            onChange={onChange}
            onKeyDown={onKeyDown}
            pattern={pattern}
            placeholder={placeholder}
            prefix={prefix || inputPrefix}
            readOnly={readOnly}
            required={required}
            suffix={suffix || inputSuffix}
            tabIndex={tabIndex}
            size={size}
            value={value || ''}
            valuePrefix={valuePrefix}
            {...props}
          />
        );
      case 'date':
        return (
          <DateInput
            type="date"
            autoFocus={autoFocus}
            className={className}
            disabled={disabled}
            error={error}
            inputMode={inputMode}
            label={label}
            onChange={onChange}
            onKeyDown={onKeyDown}
            pattern={pattern}
            placeholder={placeholder}
            prefix={prefix || inputPrefix}
            readOnly={readOnly}
            required={required}
            suffix={suffix || inputSuffix}
            tabIndex={tabIndex}
            size={size}
            value={value || ''}
            valuePrefix={valuePrefix}
            {...props}
          />
        );
      case 'number':
        return (
          <NumberInput
            autoFocus={autoFocus}
            className={className}
            disabled={disabled}
            error={error}
            inputMode={inputMode}
            label={label}
            onChange={onChange}
            onKeyDown={onKeyDown}
            pattern={pattern}
            placeholder={placeholder}
            prefix={prefix || inputPrefix}
            readOnly={readOnly}
            required={required}
            suffix={suffix || inputSuffix}
            tabIndex={tabIndex}
            size={size}
            value={value || ''}
            valuePrefix={valuePrefix}
            {...props}
          />
        );
      default:
        return (
          <FloatLabelInput
            autoFocus={autoFocus}
            className={className}
            disabled={disabled}
            error={error}
            inputMode={inputMode}
            label={label}
            onChange={onChange}
            onKeyDown={onKeyDown}
            pattern={pattern}
            placeholder={placeholder}
            prefix={prefix || inputPrefix}
            readOnly={readOnly}
            required={required}
            suffix={suffix || inputSuffix}
            tabIndex={tabIndex}
            size={size}
            type={type}
            value={value || ''}
            valuePrefix={valuePrefix}
            {...props}
          />
        );
    }
  };
  return (
    <AminoInputWrapper
      width={width}
      className={`amino-input-wrapper ${disabled ? 'disabled' : ''}`}
    >
      <Fields>{renderInput()}</Fields>

      <HelpText error={error} helpText={helpText} />
    </AminoInputWrapper>
  );
};
