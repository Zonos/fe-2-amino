import type { MouseEventHandler, ReactNode } from 'react';

import styled from 'styled-components';

import { theme } from 'src/styles/constants/theme';

export const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0 ${theme.space16};
  height: 36px;
  line-height: 36px;
  user-select: none;
  cursor: pointer;

  &:hover {
    background: ${theme.hoverColor};
  }

  a {
    width: 100%;
    display: block;
  }

  svg {
    margin-right: 12px;
  }
`;

type MenuItemProps = {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: MouseEventHandler;
};

export const MenuItem = ({ children, icon, onClick }: MenuItemProps) => (
  <StyledListItem onClick={onClick}>
    {icon}
    {children}
  </StyledListItem>
);
