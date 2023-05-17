import { useState } from 'react';

import type { Meta } from '@storybook/react';
import { SearchInput } from 'src/components/input/SearchInput';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import * as icons from 'src/icons/IconIndex';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { IconProps } from 'src/types/IconProps';
import styled from 'styled-components';

const IconsMeta: Meta = {
  component: icons.MailDuotoneIcon,
  argTypes: {
    size: {
      control: { type: 'number' },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export default IconsMeta;

const StyledWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: ${theme.space40};
  grid-column-gap: ${theme.space24};
  padding-bottom: 20px;
`;

const StyledIcon = styled.div<{ size?: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${theme.v3ShadowBase};
  padding: ${theme.space16};
  &.deprecated {
    div {
      text-decoration: line-through;
    }
  }
`;

// Check if string contain keyword of the sub icon type or not
type IconsType = typeof icons[keyof typeof icons] & {
  deprecated?: boolean;
  displayName?: string;
};

export const Icons = ({
  size,
  color,
  secondaryColor,
}: IconProps & { secondaryColor?: Color }) => {
  const [filter, setFilter] = useState('');
  const iicons = Object.values<IconsType>(icons)
    .map(icon => ({
      icon,
      iconName: icon.displayName || '',
      deprecated: !!icon.deprecated,
    }))
    .filter(icon => icon.iconName);
  return (
    <VStack>
      <SearchInput onChange={e => setFilter(e.target.value)} value={filter} />
      <StyledWrapper>
        {iicons
          .filter(({ iconName }) =>
            filter
              ? iconName.toLowerCase().includes(filter.toLowerCase())
              : true
          )
          .map(({ icon: IconComponent, iconName, deprecated }) => {
            const isDeprecated = deprecated;
            return (
              <StyledIcon
                key={iconName}
                size={size}
                className={[
                  isDeprecated ? 'deprecated' : '',
                  /Solid/.test(iconName) ? 'solid' : '',
                  /Duotone/.test(iconName) ? 'duotone' : '',
                ].join(' ')}
              >
                <IconComponent
                  size={size}
                  color={color}
                  secondaryColor={secondaryColor}
                />
                <div>{iconName}</div>
                {isDeprecated && <Text type="small-header">(Deprecated)</Text>}
              </StyledIcon>
            );
          })}
      </StyledWrapper>
    </VStack>
  );
};
