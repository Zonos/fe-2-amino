import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { Button } from 'src/components/button/Button';
import {
  type CollapseProps,
  Collapse as CollapseComponent,
} from 'src/components/collapse/Collapse';
import { NavigationItem } from 'src/components/layout/NavigationGroup';
import styled from 'styled-components';

const CollapseMeta: Meta = {
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    collapsed: {
      table: {
        disable: true,
      },
    },
  },

  component: CollapseComponent,
  parameters: {
    docs: { source: { type: 'code' } },
  },
};

export default CollapseMeta;

const CollapseContainer = styled.div`
  margin: 20px;
  display: flex;
  gap: 40px;
`;

const StyledCollapseComponent = styled(CollapseComponent)`
  border: 1px solid gray;
  border-radius: 6px;
`;

const Template: StoryFn<CollapseProps> = ({
  children,
  className,
  collapseSize,
}) => {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setOpen1(!open1);
          setOpen2(!open2);
        }}
      >
        Toggle
      </Button>
      <CollapseContainer>
        <p>Collapse size: {collapseSize ? `${collapseSize}px` : '0px'}</p>
        <div>
          Open by default
          <StyledCollapseComponent
            className={className}
            collapsed={!open1}
            collapseSize={collapseSize}
          >
            {children}
          </StyledCollapseComponent>
        </div>
        <div>
          Closed by default
          <StyledCollapseComponent
            className={className}
            collapsed={!open2}
            collapseSize={collapseSize}
          >
            {children}
          </StyledCollapseComponent>
        </div>
      </CollapseContainer>
    </>
  );
};
export const Collapse = Template.bind({});
Collapse.args = {
  children: (
    <>
      <NavigationItem content="Item 1" isActive />
      <NavigationItem content="Item 2" />
      <NavigationItem content="Item 3" />
    </>
  ),
};
