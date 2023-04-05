import { useState } from 'react';

import { useEffect } from '@storybook/addons';
import { Meta, Story } from '@storybook/react/types-6-0';
import { RichRadio, RichRadioProps } from 'src/components/rich-radio/RichRadio';
import { CheckmarkIcon } from 'src/icons/CheckmarkIcon';
import { ChevronRightIcon } from 'src/icons/ChevronRightIcon';

const RichRadioMeta: Meta = {
  component: RichRadio,
  argTypes: {
    icon: {
      options: ['No Icon', 'Check Icon', 'Chevron Right Icon'],
      mapping: {
        'No Icon': undefined,
        'Check Icon': <CheckmarkIcon />,
        'Chevron Right Icon': <ChevronRightIcon />,
      },
    },
    activeIcon: {
      options: ['Check Icon', 'Chevron Right Icon'],
      mapping: {
        'Check Icon': <CheckmarkIcon />,
        'Chevron Right Icon': <ChevronRightIcon />,
      },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=96%3A2004&t=TdkLVg0lxI1YWk86-4',
    },
  },
};

export default RichRadioMeta;

const Template: Story<RichRadioProps> = ({
  activeIcon,
  icon,
  itemHeight,
  items,
  onChange,
  renderCustomText,
  value,
}: RichRadioProps) => {
  const [radioValue, setRadioValue] = useState<string | null>(null);

  // This effect mimics data fetching where the component is rendered before the data is populated
  useEffect(() => {
    setRadioValue(value);
  }, [value]);

  return (
    <RichRadio
      value={radioValue}
      onChange={onChange}
      renderCustomText={renderCustomText}
      items={items}
      icon={icon}
      itemHeight={itemHeight}
      activeIcon={activeIcon}
    />
  );
};

export const BasicRichRadio = Template.bind({});
BasicRichRadio.args = {
  items: [
    {
      label:
        'Handbags, whether or not with shoulder strap, including those without handle: With outer surface of sheeting of plastics or of textile materials',
      subtitle: 'Item 1 subtitle',
      value: 'item1',
      tooltip:
        'Handbags, whether or not with shoulder strap, including those without handle: With outer surface of sheeting of plastics or of textile materials',
      tooltipSetting: {
        delayShow: 400,
      },
    },
    {
      label: 'Item 2',
      subtitle: 'Item 2 subtitle (with tooltip)',
      value: 'item2',
      tooltip:
        'Handbags, whether or not with shoulder strap, including those without handle: With outer surface of sheeting of plastics or of textile materials',
      tooltipSetting: {
        delayShow: 200,
      },
    },
    {
      label: 'Item 3',
      subtitle: 'Item 3 subtitle',
      value: 'item3',
    },
    {
      label: 'Item 4',
      value: 'item4',
    },
  ],
  value: 'item1',
};

export const CustomRichRadioOption = Template.bind({});
CustomRichRadioOption.args = {
  renderCustomText: ({ label, subtitle }) => (
    <div>
      <span>
        Customized Label: <b>{label}</b>
      </span>
      <span>
        Customized Subtitle: <b>{subtitle}</b>
      </span>
    </div>
  ),
  items: [
    {
      label:
        'Handbags, whether or not with shoulder strap, including those without handle: With outer surface of sheeting of plastics or of textile materials',
      subtitle: 'Item 1 subtitle',
      value: 'item1',
      tooltip:
        'Handbags, whether or not with shoulder strap, including those without handle: With outer surface of sheeting of plastics or of textile materials',
      tooltipSetting: {
        delayShow: 400,
      },
    },
    {
      label: 'Item 2',
      subtitle: 'Item 2 subtitle (with tooltip)',
      value: 'item2',
      tooltip:
        'Handbags, whether or not with shoulder strap, including those without handle: With outer surface of sheeting of plastics or of textile materials',
      tooltipSetting: {
        delayShow: 400,
      },
    },
    {
      label: 'Item 3',
      subtitle: 'Item 3 subtitle',
      value: 'item3',
    },
    {
      label: 'Item 4',
      value: 'item4',
    },
  ],
};

export const SmallRichRadio = Template.bind({});
SmallRichRadio.args = {
  itemHeight: 40,
  items: [
    {
      label: 'Handbags, whether or not with shoulder strap',
      value: 'item1',
      tooltip: 'Handbags, whether or not with shoulder strap',
      tooltipSetting: {
        delayShow: 400,
      },
    },
    {
      label: 'Item 2',
      value: 'item2',
      tooltip:
        'Handbags, whether or not with shoulder strap, including those without handle: With outer surface of sheeting of plastics or of textile materials',
      tooltipSetting: {
        delayShow: 400,
      },
    },
    {
      label: 'Item 3',
      value: 'item3',
    },
    {
      label: 'Item 4',
      value: 'item4',
    },
  ],
};
