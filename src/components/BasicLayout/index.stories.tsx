import { type ComponentStoryObj, type ComponentMeta } from '@storybook/react';

import { BasicLayout } from '.';

type T = typeof BasicLayout;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
  component: BasicLayout,
} as Meta;

export const Default: Story = {};
