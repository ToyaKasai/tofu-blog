import { type ComponentStoryObj, type ComponentMeta } from '@storybook/react';

import { PostCard } from '.';

type T = typeof PostCard;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
  component: PostCard,
} as Meta;

export const Default: Story = {
  args: {
    postTitle: 'Next.js Directory Structure',
    postDescription: 'post description',
    categories: ['Frontend', 'Next.js'],
    href: '#',
  },
};
