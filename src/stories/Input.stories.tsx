import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Input, InputProps } from 'src/components/input/Input';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { BagIcon } from 'src/icons/BagIcon';
import { CubeIcon } from 'src/icons/CubeIcon';
import { FlagIcon } from 'src/icons/flag-icon/FlagIcon';

const InputMeta: Meta = {
  title: 'Amino/Input',
  component: Input,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A63',
    },
  },
  argTypes: {
    width: {
      type: 'number',
    },
    placeholder: {
      type: 'string',
    },
    helpText: {
      type: 'string',
    },
    value: {
      type: 'string',
    },
    inputPrefix: {
      table: {
        disable: true,
      },
    },
    inputSuffix: {
      table: {
        disable: true,
      },
    },
    prefix: {
      options: ['No prefix', 'With text', 'With icon'],
      mapping: {
        'No prefix': '',
        'With text': 'USD',
        'With icon': <CubeIcon size={20} />,
      },
    },
    suffix: {
      options: ['No prefix', 'With text', 'With icon'],
      mapping: {
        'No prefix': '',
        'With text': 'USD',
        'With icon': <CubeIcon size={20} />,
      },
    },
    pattern: {
      type: 'string',
    },
    required: {
      type: 'boolean',
    },
    disabled: {
      type: 'boolean',
    },
    readOnly: {
      type: 'boolean',
    },
    autoFocus: {
      type: 'boolean',
    },
    tabIndex: {
      type: 'number',
    },
    error: {
      type: 'string',
    },
    type: {
      type: 'string',
    },
  },
};

export default InputMeta;

const Template: Story<InputProps> = ({ value: _value, ...props }) => {
  const [value, setValue] = useState(_value);
  return (
    <VStack>
      <Input
        {...props}
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      <Text type="bold-subheader">
        Value: <Text type="code">{value || '--'}</Text>
      </Text>
    </VStack>
  );
};

export const BasicInput = Template.bind({});
BasicInput.args = {
  label: 'Example input',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  label: 'Example input',
  type: 'password',
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  label: 'Example input',
  type: 'number',
};

export const DateInput = Template.bind({});
DateInput.args = {
  label: 'Date input',
  type: 'date',
};

export const DateInputClamped = Template.bind({});
DateInputClamped.args = {
  label: 'Date input with range',
  placeholder: 'placeholder',
  type: 'date',
  min: new Date('2009-01-10').toISOString().split('T')[0],
  max: new Date('2009-01-18').toISOString().split('T')[0],
};

export const DateTimeInput = Template.bind({});
DateTimeInput.args = {
  label: 'Datetime input',
  type: 'datetime-local',
};

export const DateTimeInputClamped = Template.bind({});
DateTimeInputClamped.args = {
  label: 'Datetime input with range',
  placeholder: 'placeholder',
  type: 'datetime-local',
  min: new Date('2009-01-10T03:24:00').toISOString().slice(0, -1),
  max: new Date('2009-01-18T03:50:00').toISOString().slice(0, -1),
};

export const TimeInput = Template.bind({});
TimeInput.args = {
  label: 'Time input',
  type: 'time',
};

export const InputWithHelpText = Template.bind({});
InputWithHelpText.args = {
  label: 'Example input',
  helpText: "This is the input's help text",
};

export const InputWithError = Template.bind({});
InputWithError.args = {
  label: 'Example input',
  error: true,
};

export const InputWithErrorAndHelpText = Template.bind({});
InputWithErrorAndHelpText.args = {
  label: 'Example input',
  error: true,
  helpText: 'This is an error',
};

export const Prefix = Template.bind({});
Prefix.args = {
  label: 'Example input',
  prefix: <BagIcon />,
  value: '5 lbs of Chicken',
};

export const PrefixAndValuePrefix = Template.bind({});
PrefixAndValuePrefix.args = {
  label: 'Phone number',
  prefix: <BagIcon />,
  valuePrefix: '+1-383',
  value: '435-229-9136',
};

export const Suffix = Template.bind({});
Suffix.args = {
  label: 'Example input',
  suffix: <FlagIcon iconScale="large" code="AI" />,
};

export const DynamicErrorAndHelpText: Story<InputProps> = ({
  value: _value,
  ...props
}) => {
  const [value, setValue] = useState(_value);
  const hasError = value?.length === 0;
  return (
    <VStack>
      <Input
        {...props}
        error={hasError}
        helpText={hasError ? 'This field is required' : 'Enter some stuff'}
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      <Text type="bold-subheader">
        Value: <Text type="code">{value || '--'}</Text>
      </Text>
    </VStack>
  );
};
