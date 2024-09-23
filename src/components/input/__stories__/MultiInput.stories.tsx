import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import {
  type MultiInputProps,
  MultiInput,
} from 'src/components/input/MultiInput';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';

const MultiInputMeta: Meta = {
  argTypes: {
    tagValidation: {
      control: {
        type: 'boolean',
      },
      description: 'Enable or disable tag validation',
    },
  },
  component: MultiInput,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=2628%3A59491&mode=dev',
    },
  },
};

export default MultiInputMeta;

const Template: StoryFn<
  MultiInputProps & {
    setTags: React.Dispatch<React.SetStateAction<string[]>>;
    tags: string[];
  }
> = ({ setTags, tags, tagValidation, ...props }) => {
  const [hasValidationError, setHasValidationError] = useState(false);

  return (
    <VStack>
      <MultiInput
        {...props}
        setHasValidationError={setHasValidationError}
        setTags={setTags}
        tags={tags}
        tagValidation={tagValidation}
      />
      {hasValidationError && (
        <Text color={hasValidationError && 'red600'}>
          Some tags are invalid
        </Text>
      )}
    </VStack>
  );
};

const ParentComponent: StoryFn<MultiInputProps> = args => {
  const { tags: initalTags } = args;
  const [tags, setTags] = useState(initalTags || []);
  return <Template {...args} setTags={setTags} tags={tags} />;
};

export const BasicMultiInput = ParentComponent.bind({});
BasicMultiInput.args = {
  tags: ['example', 'tags'],
};

export const MultiInputWithEmailValidation = ParentComponent.bind({});
MultiInputWithEmailValidation.args = {
  tagValidation: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  tags: ['test@zonos.com', 'bad-email'],
};
