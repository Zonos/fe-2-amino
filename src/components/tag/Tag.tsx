import type { ReactNode } from 'react';

import { RemoveIcon } from 'src/icons/RemoveIcon';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

export interface TagProps {
  children?: ReactNode | string;
  className?: string;
  icon?: ReactNode;
  iconRight?: boolean;
  onClose: () => void;
}

const TagWrapper = styled.div`
  display: inline-block;
`;
const StyledTag = styled.button<Omit<TagProps, 'onClose'>>`
  display: flex;
  gap: ${theme.space8};
  font-size: ${theme.typeScaleBase};
  font-weight: normal;
  padding: 3px ${theme.space16};
  text-align: center;
  font-weight: 500;
  // default background color (gray)
  background-color: ${theme.gray200};
  color: ${theme.gray800};
  border-radius: ${theme.radius6};
  align-items: center;
  &:hover {
    background-color: ${theme.gray300};
  }
  p {
    margin: 0;
    font-weight: 700;
  }
  svg {
    order: ${({ iconRight }) => (iconRight ? '2' : '')};
  }
`;

export const Tag = ({
  children,
  className,
  icon,
  iconRight,
  onClose,
}: TagProps) => (
  <TagWrapper className={className}>
    <StyledTag iconRight={iconRight} onClick={onClose} type="button">
      {icon}
      <p>{children}</p>
      <RemoveIcon size={16} />
    </StyledTag>
  </TagWrapper>
);
