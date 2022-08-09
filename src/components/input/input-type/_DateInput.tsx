import React, { useRef } from 'react';

import { CalendarIcon } from 'src/icons/CalendarIcon';
import styled from 'styled-components';

import { FloatLabelInput, type FloatLabelInputProps } from './_FloatLabelInput';

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const StyledActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledButtonAction = styled.button``;
const AminoInput = styled(FloatLabelInput)`
  && input {
    padding-right: var(--amino-space-double);
    appearance: textfield;
    &::-webkit-inner-spin-button,
    &::-webkit-calendar-picker-indicator {
      display: none;
      -webkit-appearance: none;
    }

    &::-webkit-datetime-edit-year-field,
    &::-webkit-datetime-edit-text,
    &::-webkit-datetime-edit-month-field,
    &::-webkit-datetime-edit-day-field {
      transition: 0.5s all ease;
    }
    &:not(:focus):not(.has-content) {
      &::-webkit-datetime-edit-year-field,
      &::-webkit-datetime-edit-text,
      &::-webkit-datetime-edit-month-field,
      &::-webkit-datetime-edit-day-field {
        color: transparent;
      }
    }
  }
`;

export const DateInput = ({
  autoFocus,
  className,
  disabled,
  error,
  inputMode,
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
  value,
  ...props
}: FloatLabelInputProps) => {
  const inputRef = useRef<HTMLInputElement & { showPicker: () => void }>(null);
  return (
    <StyledWrapper className={className}>
      <AminoInput
        aria-label={label}
        autoFocus={autoFocus}
        disabled={disabled}
        error={error}
        inputMode={inputMode}
        label={label}
        onChange={onChange}
        onKeyDown={onKeyDown}
        pattern={pattern}
        placeholder={placeholder}
        prefix={prefix}
        readOnly={readOnly}
        ref={inputRef}
        required={required}
        suffix={
          suffix || (
            <StyledActionWrapper>
              <StyledButtonAction
                onClick={() => {
                  inputRef.current?.showPicker();
                  inputRef.current?.dispatchEvent(
                    new Event('input', { bubbles: true })
                  );
                }}
              >
                <CalendarIcon size={20} />
              </StyledButtonAction>
            </StyledActionWrapper>
          )
        }
        tabIndex={tabIndex}
        type="date"
        value={value}
        {...props}
      />
    </StyledWrapper>
  );
};
