import styled, { css, keyframes } from 'styled-components';

import { theme } from 'src/styles/constants/theme';
import type { Intent } from 'src/types';

const Rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  35%{
    transform: rotate(360deg);
  }
  70% {
    transform: rotate(697.5deg);
  }
  100% {
    transform: rotate(720deg);
  }
`;

const RotateInsideRing = keyframes`
  65%, 75% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const spinDuration = '1.5s';

const AminoSpinner = styled.span<SpinnerProps>`
  display: inline-block;
  border: ${p => p.size! / 8}px solid ${theme.gray100};
  border-top-color: ${theme.blue600};
  animation: ${css`
      ${Rotate}`} ${spinDuration} linear infinite;
  border-radius: 50%;
  transform: rotate(45deg);
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: -${p => p.size! / 8}px;
    left: -${p => p.size! / 8}px;
    width: ${p => p.size}px;
    height: ${p => p.size}px;
    border-radius: 50%;
    border: ${p => p.size! / 8}px solid transparent;
    border-right-color: ${theme.gray100};
    z-index: 1;
    animation: ${css`
        ${RotateInsideRing}`} ${spinDuration} linear infinite;
  }

  &.black {
    border: ${p => p.size! / 8}px solid ${theme.spinnerBorderColorBlack};
    border-top-color: ${theme.spinnerBorderTopColorBlack};
    &::before {
      border-right-color: ${theme.spinnerBorderRightColorBlack};
    }
  }

  &.white {
    border: ${p => p.size! / 8}px solid ${theme.spinnerBorderColorWhite};
    border-top-color: ${theme.spinnerBorderTopColorWhite};
    &::before {
      border-right-color: ${theme.spinnerBorderRightColorWhite};
    }
  }

  &.info {
    border: ${p => p.size! / 8}px solid ${theme.blue100};
    border-top-color: ${theme.primary};
    &:before {
      border-right-color: ${theme.blue100};
    }
  }
  &.success {
    border: ${p => p.size! / 8}px solid ${theme.green100};
    border-top-color: ${theme.success};
    &:before {
      border-right-color: ${theme.green100};
    }
  }
  &.danger {
    border: ${p => p.size! / 8}px solid ${theme.red100};
    border-top-color: ${theme.danger};
    &:before {
      border-right-color: ${theme.orange100};
    }
  }
  &.warning {
    border: ${p => p.size! / 8}px solid ${theme.orange100};
    border-top-color: ${theme.warning};
    &:before {
      border-right-color: ${theme.orange100};
    }
  }
`;

export type SpinnerColor =
  | 'black'
  | 'white'
  | Exclude<Intent, 'default' | 'error'>;

export type SpinnerProps = {
  className?: string;
  color?: SpinnerColor;
  size?: number;
};

export const Spinner = ({ className, color, size }: SpinnerProps) => (
  <AminoSpinner
    className={[className, color || ''].join(' ')}
    color={color}
    size={size || 32}
  />
);
