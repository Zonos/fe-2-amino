import type { Meta, StoryFn } from '@storybook/react';

import { Card } from 'src/components/card/Card';
import { NavigationGroup as NavigationGroupStory } from 'src/components/layout/__stories__/NavigationGroup.stories';
import { UserMenu } from 'src/components/layout/__stories__/UserMenu';
import { type LayoutProps, Layout } from 'src/components/layout/Layout';
import {
  NavigationGroup,
  NavigationItem,
} from 'src/components/layout/NavigationGroup';
import { HStack } from 'src/components/stack/HStack';
import { ZonosIcon } from 'src/icons/custom/ZonosIcon';

import styles from './Layout.stories.module.scss';

const LayoutMeta: Meta = {
  argTypes: {
    content: {
      table: {
        disable: true,
      },
    },
    footer: {
      table: {
        disable: true,
      },
    },
    headerContent: {
      table: {
        disable: true,
      },
    },
    logoSidebar: {
      description: 'Want to have logo on sidebar or not',
      mapping: {
        'Has Logo Sidebar': <ZonosIcon size={110} />,
        'No Logo Sidebar': null,
      },
      options: ['No Logo Sidebar', 'Has Logo Sidebar'],
    },
    searchInput: {
      mapping: {
        'Has Search Input': {
          onChange: () => {},
          value: '',
        },
        'No Search Input': null,
      },
      options: ['No Search Input', 'Has Search Input'],
    },
    sidebar: {
      table: {
        disable: true,
      },
    },
  },
  component: Layout,
  parameters: {
    docs: { source: { type: 'code' } },
  },
  subcomponents: {
    // @ts-ignore subcomponents don't seem to be working
    NavigationGroup,
    // @ts-ignore subcomponents don't seem to be working
    NavigationItem,
  },
};

export default LayoutMeta;

const Template: StoryFn<LayoutProps> = ({
  content,
  headerContent,
  logoSidebar,
  searchInput,
}: LayoutProps) => (
  <Layout
    content={content}
    footer={<UserMenu />}
    headerContent={headerContent}
    logoSidebar={logoSidebar}
    searchInput={searchInput}
    sidebar={<NavigationGroupStory />}
  />
);

export const BasicLayout = Template.bind({});
BasicLayout.args = {
  content: (
    <HStack>
      <Card label="Content">Here is content description</Card>
    </HStack>
  ),
  headerContent: (
    <div className={styles.styledHeader}>
      <ZonosIcon size={110} />
    </div>
  ),
};

export const LayoutWithoutHeader = Template.bind({});
LayoutWithoutHeader.args = {
  content: (
    <HStack>
      <Card label="Content">Here is content description</Card>
    </HStack>
  ),
  logoSidebar: <ZonosIcon size={110} />,
};
