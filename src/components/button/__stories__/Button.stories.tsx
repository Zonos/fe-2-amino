import type { Meta, StoryFn } from '@storybook/react';
import type { Page } from 'puppeteer';
import styled from 'styled-components';

import { type ButtonProps, Button } from 'src/components/button/Button';
import { Text } from 'src/components/text/Text';
import { CubeIcon } from 'src/icons/CubeIcon';
import { theme } from 'src/styles/constants/theme';
import { customSnapshotsDir } from 'src/utils/_snapshotsFolder';

// To test interaction with styled components
const StyledButton = styled(Button)``;

const ButtonMeta: Meta = {
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=81%3A1128&t=erzegCytT9AfSn9f-0',
    },
    async puppeteerTest(page: Page) {
      // Hide loading spinners as their moving parts interfere with visual regression tests
      await page.$$eval('.loading', els => {
        for (let i = 0; i < els.length; i += 1) {
          const el = els[i];
          if (el instanceof HTMLElement) {
            el.style.display = 'none';
          }
        }
      });
      const image = await page.screenshot({ fullPage: true });
      expect(image).toMatchImageSnapshot({
        customSnapshotsDir,
      });
    },
  },
};

export default ButtonMeta;

const HWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${theme.space24};
  margin: ${theme.space16} 0;
  align-items: center;
`;
const VWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
`;

const ButtonRowLabel = styled(Text)`
  border-bottom: 1px solid ${theme.gray1200};
  margin-bottom: ${theme.space8};
`;

const ButtonRow = ({
  disabled,
  intent,
  label,
  loading,
  ...props
}: ButtonProps & { label: string }) => (
  <div>
    <ButtonRowLabel type="bold-subheader">{label}</ButtonRowLabel>
    <HWrapper>
      <Button<'button'>
        {...props}
        disabled={disabled}
        intent={intent}
        loading={loading}
      />
      <Button
        {...props}
        disabled={disabled}
        icon={<CubeIcon size={16} />}
        intent={intent}
        loading={loading}
      />
      <Button
        {...props}
        disabled={disabled}
        icon={<CubeIcon size={16} />}
        iconRight
        intent={intent}
        loading={loading}
      />
      <Button
        {...props}
        /*  eslint-disable-next-line react/no-children-prop */
        children=""
        disabled={disabled}
        icon={<CubeIcon size={16} />}
        intent={intent}
        loading={loading}
      />
      <Button
        /*  eslint-disable-next-line react/no-children-prop */
        children=""
        disabled={disabled}
        icon={<CubeIcon size={16} />}
        intent={intent}
        loading={loading}
        onClick={e => e.preventDefault()}
        outline={props.outline}
        tag="div"
      />
      <StyledButton
        disabled={disabled}
        intent={intent}
        loading={loading}
        onClick={e => e.preventDefault()}
        outline={props.outline}
        tag="div"
      >
        Div Button
      </StyledButton>
      <StyledButton
        disabled={disabled}
        // @ts-expect-error The generic type of StyledButton is not being inferred correctly (styled-components bug)
        href="#"
        intent={intent}
        loading={loading}
        onClick={e => e.preventDefault()}
        outline={props.outline}
        tag="a"
      >
        Anchor tag Button
      </StyledButton>
      <Button
        disabled={disabled}
        intent={intent}
        loading={loading}
        themeOverride="night"
        {...props}
      >
        Night
      </Button>
    </HWrapper>
    <HWrapper>
      <Button
        {...props}
        disabled={disabled}
        intent={intent}
        loading={loading}
        size="lg"
      />
      <Button
        {...props}
        disabled={disabled}
        intent={intent}
        loading={loading}
        size="md"
      />
      <Button
        {...props}
        disabled={disabled}
        intent={intent}
        loading={loading}
        size="sm"
      />
    </HWrapper>
  </div>
);

const Template: StoryFn<ButtonProps> = props => (
  <VWrapper>
    <ButtonRow {...props} label="Default" />
    <ButtonRow {...props} disabled label="Disabled" />
    <ButtonRow {...props} label="Loading" loading />
  </VWrapper>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Example button',
  intent: 'standard',
};

export const DefaultOutline = Template.bind({});
DefaultOutline.args = {
  children: 'Example button',
  intent: 'standard',
  outline: true,
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Example button',
  intent: 'primary',
};

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  children: 'Example button',
  intent: 'primary',
  outline: true,
};

export const Success = Template.bind({});
Success.args = {
  children: 'Example button',
  intent: 'success',
};

export const SuccessOutline = Template.bind({});
SuccessOutline.args = {
  children: 'Example button',
  intent: 'success',
  outline: true,
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Example button',
  intent: 'danger',
};

export const DangerOutline = Template.bind({});
DangerOutline.args = {
  children: 'Example button',
  intent: 'danger',
  outline: true,
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Example button',
  intent: 'warning',
};

export const WarningOutline = Template.bind({});
WarningOutline.args = {
  children: 'Example button',
  intent: 'warning',
  outline: true,
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  children: 'Link button',
  intent: 'link',
};

export const Subtle = Template.bind({});
Subtle.args = {
  children: 'Example button',
  intent: 'subtle',
};

// export const TextButton = Template.bind({});
// TextButton.args = {
//   children: 'Text Button',
//   intent: 'text',
// };

export const PlainButton = Template.bind({});
PlainButton.args = {
  children: 'Plain button',
  intent: 'plain',
};
