import { ReactNode } from 'react';

import { RemoveCircleDuotoneIcon } from 'src/icons/RemoveCircleDuotoneIcon';
import { theme } from 'src/styles/constants/theme';
import { Color } from 'src/types';
import { Intent } from 'src/types/Intent';
import styled from 'styled-components';

import { Button } from '../button/Button';

const AminoNotice = styled.div`
  background: ${theme.grayL80};
  border-radius: ${theme.radius};
  color: ${theme.textColor};
  padding: ${theme.spaceHalf};
  display: flex;
  align-items: center;

  &,
  & > * {
    font-weight: 500;
  }
`;

const AminoSuccessNotice = styled(AminoNotice)`
  background: ${theme.greenL80};
  &,
  & > * {
    color: ${theme.successDark};
  }
`;

const AminoErrorNotice = styled(AminoNotice)`
  background: ${theme.redL80};
  &,
  & > * {
    color: ${theme.redD60};
  }
`;

const AminoWarningNotice = styled(AminoNotice)`
  background: ${theme.warning};
  &,
  & > * {
    color: ${theme.warningDark};
  }
`;

const AminoPrimaryNotice = styled(AminoNotice)`
  background: ${theme.blueL80};
  &,
  & > * {
    color: ${theme.blueBase};
  }
`;

export type NoticeProps = {
  children: ReactNode;
  className?: string;
  intent?: Intent;
  onClose?: () => void;
};
/** @deprecated Use Banner instead. */
export const Notice = ({
  className,
  intent,
  children,
  onClose,
}: NoticeProps) => {
  const renderCloseButton = ({
    color,
    secondaryColor,
  }: {
    color: Color;
    secondaryColor: Color;
  }) => (
    <Button
      intent="text"
      onClick={onClose}
      icon={
        <RemoveCircleDuotoneIcon
          size={20}
          color={color}
          secondaryColor={secondaryColor}
        />
      }
    />
  );
  switch (intent) {
    case 'success':
      return (
        <AminoSuccessNotice className={className}>
          {!!onClose &&
            renderCloseButton({
              color: 'green300',
              secondaryColor: 'green800',
            })}
          {children}
        </AminoSuccessNotice>
      );
    case 'error':
      return (
        <AminoErrorNotice className={className}>
          {!!onClose &&
            renderCloseButton({
              color: 'red300',
              secondaryColor: 'red900',
            })}
          {children}
        </AminoErrorNotice>
      );
    case 'warning':
      return (
        <AminoWarningNotice className={className}>
          {!!onClose &&
            renderCloseButton({
              color: 'orange300',
              secondaryColor: 'orange800',
            })}
          {children}
        </AminoWarningNotice>
      );
    case 'primary':
      return (
        <AminoPrimaryNotice className={className}>
          {!!onClose &&
            renderCloseButton({
              color: 'blue300',
              secondaryColor: 'blue600',
            })}
          {children}
        </AminoPrimaryNotice>
      );
    case 'info':
    default:
      return (
        <AminoNotice className={className}>
          {!!onClose &&
            renderCloseButton({
              color: 'gray300',
              secondaryColor: 'gray600',
            })}
          {children}
        </AminoNotice>
      );
  }
};
