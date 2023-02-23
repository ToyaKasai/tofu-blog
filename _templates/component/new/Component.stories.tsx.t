---
to: src/components/<%= componentName %>/index.stories.tsx
---

import { type ComponentStoryObj, type ComponentMeta } from '@storybook/react';

import { <%= componentName %> } from '.';

type T = typeof <%= componentName %>;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
  component: <%= componentName %>,
} as Meta;

export const Default: Story = {};





