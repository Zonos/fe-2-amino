import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { useCountryOptions } from 'src/components/select/__stories__/useCountryOptions';
import {
  type CountryPhoneSelectProps,
  CountryPhoneSelect,
} from 'src/components/select/CountryPhoneSelect';
import { type Flag, FlagIcon } from 'src/icons/flag-icon/FlagIcon';
import type { CountryOption } from 'src/types/Country';

import styles from './CountryPhoneSelect.stories.module.scss';

const CountryPhoneSelectMeta: Meta = {
  component: CountryPhoneSelect,
  decorators: [
    Component => (
      <div className={styles.styledWrapper}>
        <Component />
      </div>
    ),
  ],
};

export default CountryPhoneSelectMeta;

const CountryPhoneSelectTemplate: StoryFn<
  CountryPhoneSelectProps<CountryOption>
> = ({
  phone: _phone,
  phoneCountry: _phoneCountry,
  ...props
}: CountryPhoneSelectProps<CountryOption>) => {
  const [phoneCountry, setPhoneCountry] = useState<CountryOption | null>(
    _phoneCountry,
  );
  const [phone, setPhone] = useState(_phone);
  const countryOptions = useCountryOptions({});
  return (
    <CountryPhoneSelect
      {...props}
      countryOptions={countryOptions}
      icon={
        <FlagIcon
          code={(phoneCountry?.code as Flag) || 'Default'}
          iconScale="medium"
        />
      }
      phone={phone}
      phoneCountry={phoneCountry}
      setPhone={setPhone}
      setPhoneCountry={setPhoneCountry}
    />
  );
};

export const BasicCountryPhoneSelect = CountryPhoneSelectTemplate.bind({});

BasicCountryPhoneSelect.args = {
  phone: '12 123456',
  phoneCountry: {
    active: true,
    code: 'AF',
    code3: 'AFG',
    currencyCode: 'AFN',
    displayName: 'Afghanistan',
    fraudRisk: 10,
    icon: <FlagIcon code="AF" iconScale="small" />,
    label: 'Afghanistan',
    languageCode: 'fa',
    numericCode: '004',
    phoneCode: ['93'],
    region: 'Asia',
    upsCode: null,
    value: 'AF',
    zipRegex: null,
  },
};

BasicCountryPhoneSelect.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};
