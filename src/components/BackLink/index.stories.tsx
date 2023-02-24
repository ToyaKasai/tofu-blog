import { type ComponentStoryObj, type ComponentMeta } from '@storybook/react';

import { BackLink } from '.';

type T = typeof BackLink;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
  component: BackLink,
} as Meta;

export const Default: Story = {
  args: {
    to: '#',
  },
};
