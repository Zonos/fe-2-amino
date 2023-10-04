import type { CSSProperties, ReactNode } from 'react';
import {
  type GroupBase,
  type MenuListProps,
  type OptionProps,
  type Props,
  type SelectComponentsConfig,
  type StylesConfig,
  components as RScomponents,
} from 'react-select';

import { Checkbox } from 'src/components/checkbox/Checkbox';
import { type HelpTextProps } from 'src/components/help-text/HelpText';
import { MultiSelect } from 'src/components/select/MultiSelect';
import { type Flag, FlagIcon } from 'src/icons/flag-icon/FlagIcon';
import { type CountryOption, type UnavailableCountry } from 'src/types/Country';
import type { Option as OptionBase } from 'src/types/Option';
import { prepRegionCountryOptions } from 'src/utils/prepRegionCountryOptions';

type AdditionalProps = {
  allSelected: boolean;
  toggleSelectAll: () => void;
};

export const MenuList = <
  Option extends OptionBase,
  IsMulti extends boolean,
  Group extends GroupBase<Option>,
>({
  children,
  ...props
}: MenuListProps<Option, IsMulti, Group>) => {
  const { getStyles, selectProps } = props;
  const { allSelected, toggleSelectAll } =
    selectProps as (typeof props)['selectProps'] & AdditionalProps;
  return (
    <RScomponents.MenuList {...props}>
      <div
        style={
          getStyles(
            'option',
            props as unknown as OptionProps<Option, IsMulti, Group>,
          ) as CSSProperties
        }
      >
        <Checkbox
          checked={allSelected}
          label="Rest of world"
          onChange={toggleSelectAll}
        />
      </div>
      {children}
    </RScomponents.MenuList>
  );
};

export interface CountryMultiSelectProps<
  Option extends OptionBase<string> = OptionBase<string>,
  IsMulti extends true = true,
  Group extends GroupBase<Option> = GroupBase<Option>,
> extends Omit<
      Props<Option, IsMulti, Group>,
      'isMulti' | 'onChange' | 'options' | 'value'
    >,
    HelpTextProps {
  components?: SelectComponentsConfig<Option, IsMulti, Group>;
  countryOptions: CountryOption<Option['value']>[];
  icon?: ReactNode;
  label?: string;
  styles?: StylesConfig<Option, IsMulti, Group>;
  unavailableCountries: UnavailableCountry[];
  value: Option['value'][];
  onChange: (countryCodes: Option['value'][]) => void;
}

export const CountryMultiSelect = <T extends string>({
  countryOptions,
  label = 'Select countries',
  onChange,
  unavailableCountries,
  value,
  ...props
}: CountryMultiSelectProps<OptionBase<T>>) => {
  const countries = countryOptions.map(option => {
    const unavailableCountry = unavailableCountries.find(
      x => x.code === option.code,
    );
    return {
      ...option,
      icon: <FlagIcon code={option.code as Flag} iconScale="small" />,
      isDisabled: !!unavailableCountry,
      labelDescription: unavailableCountry?.message,
    };
  });
  const unselectedOptions = countries.filter(
    option => !value.includes(option.code) && !option.isDisabled,
  );
  const allSelected = !!value.length && !unselectedOptions.length;
  const additionalProps: AdditionalProps = {
    allSelected,
    toggleSelectAll: () =>
      onChange(
        unselectedOptions.length
          ? value.concat(unselectedOptions.map(x => x.value))
          : [],
      ),
  };
  return (
    <MultiSelect
      {...props}
      components={{ MenuList }}
      hasGroups
      hideSelectedOptions={false}
      label={label}
      onChange={changed => onChange(changed.map(x => x.value))}
      options={prepRegionCountryOptions(countries)}
      value={countries.filter(x => value.includes(x.code))}
      // @ts-ignore additional props in selectProps
      {...additionalProps}
    />
  );
};
