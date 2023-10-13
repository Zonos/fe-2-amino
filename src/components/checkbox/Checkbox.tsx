import {
  type ComponentPropsWithoutRef,
  type MouseEvent,
  type ReactNode,
  useMemo,
} from 'react';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

import { Text } from 'src/components/text/Text';
import { CheckmarkIcon } from 'src/icons/CheckmarkIcon';
import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';
import { getTestId } from 'src/utils/getTestId';

const AnimatedCheckIcon = motion(CheckmarkIcon);

const AminoCheckbox = styled.div<{ checked: boolean }>`
  width: 16px;
  height: 16px;
  min-width: 16px;
  min-height: 16px;
  line-height: 16px;
  border-radius: ${theme.radius4};
  background: ${p => (p.checked ? theme.primary : theme.inputBackground)};
  border: ${p => (!p.checked ? `1.5px solid ${theme.gray400}` : 'none')};
  transition: all 150ms ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  box-shadow: ${p => (p.checked ? theme.shadowButtonPrimary : 'none')};

  svg {
    color: ${theme.gray0};
    width: 16px;
    height: 16px;
  }
`;

const InfoWrapper = styled.div`
  margin-left: 8px;
`;

const StyledSubtitle = styled(Text)``;

const StyledLabelDescription = styled.span`
  margin-left: 4px;
  color: ${theme.gray600};
`;

const StyledLabel = styled(Text)`
  margin-bottom: 0;
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  line-height: 16px;

  svg {
    margin-right: 4px;
  }
`;

const CheckboxContainer = styled.label<{ checked: boolean }>`
  display: flex;
  flex-direction: row;
  user-select: none;
  cursor: pointer;

  &.disabled {
    ${AminoCheckbox} {
      background: ${p => (p.checked ? theme.blue200 : '')};
      border: ${p => (p.checked ? `none` : `1.5px solid ${theme.gray300}`)};
      &:active {
        box-shadow: none;
      }
    }
    ${StyledLabel} {
      color: ${theme.gray600};
    }
    ${StyledSubtitle} {
      color: ${theme.gray400};
    }
    ${LabelWrapper} {
      svg {
        opacity: 0.6;
      }
    }

    cursor: not-allowed;
  }
`;

export type CheckboxProps = Omit<
  ComponentPropsWithoutRef<'label'>,
  'onClick' | 'onChange'
> &
  BaseProps & {
    /**
     * Don't stop propagation of the click event
     * @default false
     */
    allowPropagation?: boolean;
    checked: boolean;
    disabled?: boolean;
    icon?: ReactNode;
    label?: string;
    labelComponent?: ReactNode;
    labelDescription?: string;
    subtitle?: string;
    onChange: (checked: boolean, event: MouseEvent<HTMLLabelElement>) => void;
  };

export const Checkbox = ({
  allowPropagation = false,
  checked = false,
  className,
  disabled,
  icon,
  label,
  labelComponent,
  labelDescription,
  onChange,
  subtitle,
  ...props
}: CheckboxProps) => {
  const labelAsHtmlAttribute = label?.replace(/\s/g, '-').toLowerCase();

  const testId = useMemo(
    () => getTestId({ componentName: 'checkbox', name: label }),
    [label],
  );
  return (
    <CheckboxContainer
      checked={checked}
      className={clsx(className, 'amino-input-wrapper', { disabled })}
      data-testid={testId}
      htmlFor={labelAsHtmlAttribute}
      onClick={e => {
        if (!allowPropagation) {
          e.stopPropagation();
        }
        if (!disabled) {
          onChange(!checked, e);
        }
      }}
      {...props}
    >
      <AminoCheckbox checked={checked} id={labelAsHtmlAttribute}>
        <AnimatePresence>
          {checked && (
            <AnimatedCheckIcon
              key="checkbox"
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            />
          )}
        </AnimatePresence>
      </AminoCheckbox>

      {labelComponent ||
        (label && (
          <InfoWrapper>
            <LabelWrapper>
              {icon}
              <StyledLabel type="input-label">
                {label}
                {labelDescription && (
                  <StyledLabelDescription>
                    {labelDescription}
                  </StyledLabelDescription>
                )}
              </StyledLabel>
            </LabelWrapper>
            {subtitle && (
              <StyledSubtitle type="subtitle">{subtitle}</StyledSubtitle>
            )}
          </InfoWrapper>
        ))}
    </CheckboxContainer>
  );
};
