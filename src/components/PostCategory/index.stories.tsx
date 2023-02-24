import { type ComponentStoryObj, type ComponentMeta } from '@storybook/react';

import { PostCategory } from '.';

type T = typeof PostCategory;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
  component: PostCategory,
} as Meta;

export const Default: Story = {
  args: {
    name: 'Next.js',
  },
};
