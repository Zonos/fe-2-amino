import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from 'src/components/button/Button';
import { Card, CardProps } from 'src/components/card/Card';
import { theme } from 'src/styles/constants/theme';

const CardMeta: Meta = {
  component: Card,
};

export default CardMeta;

const Template: Story<CardProps> = ({
  actions,
  children,
  footerActions,
  footerContent,
  footerHeight,
  label,
  spacing = theme.space24,
}: CardProps) => (
  <Card
    actions={actions}
    footerActions={footerActions}
    footerContent={footerContent}
    footerHeight={footerHeight}
    label={label}
    spacing={spacing}
  >
    {children}
  </Card>
);

export const BasicCard = Template.bind({});
BasicCard.args = {
  spacing: theme.space20,
  children: 'Card contents',
  label: 'My hot card',
};
BasicCard.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
  },
};

export const CardWithActions = Template.bind({});
CardWithActions.args = {
  children: 'Card contents',
  label: 'My hot card',
  actions: <Button>Title action</Button>,
  footerActions: <Button>Footer action</Button>,
};
CardWithActions.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A34',
  },
};

export const CardWithFooter = Template.bind({});
CardWithFooter.args = {
  children: 'content',
  label: 'Super cool',
  footerContent: 'footer content',
  footerActions: (
    <>
      <Button>footer action 1</Button>
      <Button>footer action 2</Button>
    </>
  ),
};
CardWithFooter.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A34',
  },
};

export const CardWithFooterWithoutFooterActions = Template.bind({});
CardWithFooterWithoutFooterActions.args = {
  children: 'content',
  label: 'Super cool',
  footerContent: 'footer content',
};
CardWithFooterWithoutFooterActions.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A34',
  },
};

export const CardWithFooterHeight = Template.bind({});
CardWithFooterHeight.args = {
  children: 'content',
  label: 'Super cool',
  footerContent: 'footer content',
  footerHeight: 120,
};
CardWithFooterHeight.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A34',
  },
};
