import { type ComponentStoryObj, type ComponentMeta } from '@storybook/react';

import { Footer } from '.';

type T = typeof Footer;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
  component: Footer,
} as Meta;

export const Default: Story = {};
