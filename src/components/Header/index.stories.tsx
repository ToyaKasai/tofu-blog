import { type ComponentStoryObj, type ComponentMeta } from '@storybook/react';

import { Header } from '.';

type T = typeof Header;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
  component: Header,
} as Meta;

export const Default: Story = {};
