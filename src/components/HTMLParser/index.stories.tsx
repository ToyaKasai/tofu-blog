import { type ComponentStoryObj, type ComponentMeta } from '@storybook/react';

import { HTMLParser } from '.';

type T = typeof HTMLParser;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
  component: HTMLParser,
} as Meta;

export const Default: Story = {};
