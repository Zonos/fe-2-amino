import { useRef } from 'react';

import styled from 'styled-components';

import {
  type FloatLabelInputProps,
  FloatLabelInput,
} from 'src/components/input/input-type/_FloatLabelInput';
import { CalendarIcon } from 'src/icons/CalendarIcon';
import { theme } from 'src/styles/constants/theme';

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const StyledActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StyledButtonAction = styled.button`
  padding: 6px;
  border-radius: ${theme.radius4};
  transition: ${theme.transition};

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
  &:focus {
    outline: none;
  }
`;

const AminoInput = styled(FloatLabelInput)`
  && input {
    padding-right: ${theme.space40};
    appearance: textfield;
    &::-webkit-inner-spin-button,
    &::-webkit-calendar-picker-indicator {
      display: none;
      -webkit-appearance: none;
    }

    &::-webkit-datetime-edit-fields-wrapper {
      transition: 0.5s all ease;
    }
    &:not(:focus):not(.has-content) {
      &::-webkit-datetime-edit-fields-wrapper {
        opacity: 0;
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
        ref={inputRef}
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
        required={required}
        suffix={
          suffix || (
            <StyledActionWrapper>
              <StyledButtonAction
                onClick={() => {
                  inputRef.current?.showPicker();
                  inputRef.current?.dispatchEvent(
                    new Event('input', { bubbles: true }),
                  );
                }}
                type="button"
              >
                <CalendarIcon size={24} />
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
