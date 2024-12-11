import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Button } from 'src/components/button/Button';
import { CoverSheet } from 'src/components/cover-sheet/CoverSheet';
import {
  type RadixInlineSelectProps,
  RadixInlineSelect,
} from 'src/components/radix-select/RadixInlineSelect';
import {
  type RadixSelectProps,
  RadixSelect,
} from 'src/components/radix-select/RadixSelect';
import { FlagIcon } from 'src/icons/flag-icon/FlagIcon';
import { MoneyIcon } from 'src/icons/MoneyIcon';

const RadixSelectMeta: Meta = {
  component: RadixSelect,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=1723-27908&t=2Q3sgniz69bv4X3V-1',
    },
  },
};

export default RadixSelectMeta;

const Template: StoryFn<RadixSelectProps> = ({
  value: _value,
  ...props
}: RadixSelectProps) => {
  const [value, setValue] = useState(_value);

  return (
    <RadixSelect
      {...props}
      aria-label={props.label}
      onChange={newValue => setValue(newValue)}
      placeholder={props.placeholder}
      value={value}
    />
  );
};

export const BasicSelect = Template.bind({});
BasicSelect.args = {
  label: 'Choose an option',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
  value: null,
};

const IconTemplate: StoryFn<RadixSelectProps> = ({
  value: _value,
  ...props
}: RadixSelectProps) => {
  const [value, setValue] = useState(_value);
  const selectedOption = props.options.find(opt => opt.value === value);

  return (
    <RadixSelect
      {...props}
      icon={selectedOption?.icon || <MoneyIcon size={24} />}
      onChange={newValue => setValue(newValue)}
      placeholder={props.placeholder}
      value={value}
    />
  );
};

export const WithIcon = IconTemplate.bind({});
WithIcon.args = {
  label: 'Destination currency',
  options: [
    {
      icon: <MoneyIcon size={24} />,
      label: 'USD - United States Dollar',
      value: 'USD - United States Dollar',
    },
    {
      icon: <MoneyIcon size={24} />,
      label: 'EUR - Euro',
      value: 'EUR - Euro',
    },
    {
      icon: <MoneyIcon size={24} />,
      label: 'AUD - Australian Dollar',
      value: 'AUD - Australian Dollar',
    },
    {
      icon: <MoneyIcon size={24} />,
      label: 'CAD - Canadian Dollar',
      value: 'CAD - Canadian Dollar',
    },
  ],
  placeholder: 'Choose currency...',
  value: null,
};

const FlagTemplate: StoryFn<RadixSelectProps> = ({
  value: _value,
  ...props
}: RadixSelectProps) => {
  const [value, setValue] = useState(_value);
  const selectedOption = props.options.find(opt => opt.value === value);

  return (
    <RadixSelect
      {...props}
      icon={
        selectedOption?.icon || <FlagIcon code="Default" iconScale="medium" />
      }
      onChange={newValue => setValue(newValue)}
      placeholder={props.placeholder}
      value={value}
    />
  );
};

export const CountrySelect = FlagTemplate.bind({});
CountrySelect.args = {
  label: 'Select country',
  options: [
    {
      icon: <FlagIcon code="US" iconScale="medium" />,
      label: 'United States',
      value: 'US',
    },
    {
      icon: <FlagIcon code="GB" iconScale="medium" />,
      label: 'United Kingdom',
      value: 'GB',
    },
    {
      icon: <FlagIcon code="FR" iconScale="medium" />,
      label: 'France',
      value: 'FR',
    },
    {
      icon: <FlagIcon code="DE" iconScale="medium" />,
      label: 'Germany',
      value: 'DE',
    },
  ],
  placeholder: 'Choose a country...',
  value: null,
};

export const WithError = Template.bind({});
WithError.args = {
  error: true,
  helpText: 'This field is required',
  label: 'Error State',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ],
  value: null,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Disabled Select',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ],
  value: null,
};

const InlineTemplate: StoryFn<RadixInlineSelectProps> = ({
  value: _value,
  ...props
}: RadixInlineSelectProps) => {
  const [value, setValue] = useState(_value);

  return (
    <RadixInlineSelect
      {...props}
      aria-label={props.label}
      onChange={newValue => setValue(newValue)}
      placeholder={props.placeholder}
      value={value}
    />
  );
};

export const InlineSelect = InlineTemplate.bind({});
InlineSelect.args = {
  label: 'Sort by:',
  options: [
    { label: 'Currency', value: '1' },
    { label: 'Carrier', value: '2' },
    { label: 'Destination', value: '3' },
  ],
  value: '1',
};

export const WithSecondaryText = Template.bind({});
WithSecondaryText.args = {
  label: 'Select box',
  options: [
    {
      label: 'Large square box',
      secondaryText: '24x24x24 in',
      value: '1',
    },
    {
      label: 'Medium square box',
      secondaryText: '24x28x18 in',
      value: '2',
    },
    {
      label: 'Small square box',
      secondaryText: '26x18x8 in',
      value: '3',
    },
  ],
  value: null,
};

export const WithCoversheet = () => {
  const [openCoversheet, setOpenCoversheet] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenCoversheet(true)}>Open Coversheet</Button>
      <CoverSheet
        label="Select test"
        onClose={() => setOpenCoversheet(false)}
        open={openCoversheet}
      >
        <BasicSelect
          label="Choose an option"
          onChange={() => {}}
          options={[
            { label: 'Option 1', value: '1' },
            { label: 'Option 2', value: '2' },
            { label: 'Option 3', value: '3' },
          ]}
          value={null}
        />
      </CoverSheet>
    </>
  );
};
