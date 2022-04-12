import React, { ReactNode } from 'react';

import styled from 'styled-components';

import { Text } from 'components/Text';

import { NumberInput, PasswordInput } from './InputType';
import {
  FloatLabelInput,
  FloatLabelInputProps,
} from './InputType/FloatLabelInput';

const Error = styled.div`
  color: var(--amino-red-600);
`;

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

  span {
    margin-top: var(--amino-space-quarter);
    display: block;
  }

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

const StyledSubTitle = styled(Text)`
  font-style: normal;
`;

export type InputProps = {
  /** A value (in px) that will determine how wide the input is. If nothing is passed, it defaults to 100% */
  width?: number;

  /** Displayed in a tooltip next to the label */
  helpText?: string;
  inputSuffix?: ReactNode;
  inputPrefix?: ReactNode;
} & FloatLabelInputProps;

export const Input = ({
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
  value,
  valuePrefix,
  width,
}: InputProps) => {
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
            value={value || ''}
            valuePrefix={valuePrefix}
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
            value={value || ''}
            valuePrefix={valuePrefix}
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
            type={type}
            value={value || ''}
            valuePrefix={valuePrefix}
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

      {helpText && (
        <>
          {error && error.length ? (
            <Error>
              <StyledSubTitle type="subtitle">{error}</StyledSubTitle>
            </Error>
          ) : null}

          {(!error || !error.length) && helpText ? (
            <StyledSubTitle type="subtitle">{helpText}</StyledSubTitle>
          ) : null}
        </>
      )}
    </AminoInputWrapper>
  );
};
