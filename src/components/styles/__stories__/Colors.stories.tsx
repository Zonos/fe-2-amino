import type { Meta } from '@storybook/react';
import styled from 'styled-components';

import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import { type Color, colorContrasts, colorPrefixes } from 'src/types/Color';

const meta: Meta = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=3576%3A73760&t=GYq7PyhsfdRYIayr-0',
    },
  },
  title: 'Color Palette',
};

export default meta;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, calc(33% - ${theme.space24}));
  gap: ${theme.space24};
  align-items: center;
`;

const ColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.space24};
  text-align: center;
`;

const StyledColorIntensity = styled.div<{
  $background: Color;
  $color: Color;
}>`
  color: ${p => theme[p.$color]};
  font-size: ${theme.fontSizeS};
  padding: ${theme.space24};
  background: ${p => theme[p.$background]};
`;

export const ColorPalette = () => (
  <Wrapper>
    {colorPrefixes.map(color => (
      <ColorWrapper key={color}>
        <Text type="title">{color.toUpperCase()}</Text>
        <VStack spacing={0}>
          {(color !== 'gray' && color !== 'glass'
            ? colorContrasts
            : ['0', '50', ...colorContrasts, '1100', '1200']
          ).map(value => {
            const aminoColor: Color = `${color}${value}` as Color;
            return (
              <div key={aminoColor}>
                <StyledColorIntensity
                  $background={aminoColor}
                  $color={Number(value) <= 500 ? 'gray1200' : 'gray0'}
                >
                  <Text>{value}</Text>
                </StyledColorIntensity>
              </div>
            );
          })}
        </VStack>
      </ColorWrapper>
    ))}
  </Wrapper>
);
