import { type ComponentStoryObj, type ComponentMeta } from '@storybook/react';

import { PageLayout } from '.';

type T = typeof PageLayout;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
  component: PageLayout,
} as Meta;

export const Default: Story = {};
