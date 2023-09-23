import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    shouldFit: {
      defaultValue: false,
      control: 'boolean',
    },
    spaced: {
      defaultValue: false,
      control: 'boolean',
    }
  }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'This is a example card',
    shouldFit: false,
    spaced: false,
  },
};

export const Spaced: Story = {
  args: {
    children: 'This card has some padding inside it',
    shouldFit: false,
    spaced: true,
  },
};

export const FullWidth: Story = {
  name: 'Full width',
  args: {
    children: 'This card will expand to fill the width of its container.',
    shouldFit: true,
    spaced: false,
  },
};