import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      defaultValue: 'Button',
      control: 'text',
    },
    appearance: {
      defaultValue: 'primary',
      control: 'select', 
      options: ['primary', 'secondary', 'ghost', 'highlighted', 'text-only'],
    },
    size: {
      defaultValue: 'medium',
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    shouldFit: {
      defaultValue: false,
      control: 'boolean',
    },
    iconOnly: {
      defaultValue: false,
      control: 'boolean',
    },
    iconPosition: {
      defaultValue: null,
      control: 'radio',
      options: ['before', 'after'],
    },
    icon: {
      defaultValue: null,
      control: 'text',
    },
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Primary button',
    appearance: 'primary',
    size:'medium'
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary button',
    appearance: 'secondary',
    size:'medium'
  },
};

export const Ghost: Story = {
  args: {
    label: 'Ghost button',
    appearance: 'ghost',
    size:'medium'
  },
};


export const Highlighted: Story = {
  args: {
    label: 'Highlighted clickable text',
    appearance: 'highlighted',
    size:'medium'
  },
};

export const TextOnly: Story = {
  name: 'Text only',
  args: {
    label: 'Clickable text only',
    appearance: 'text-only',
    size:'medium'
  },
};

export const WithIcon: Story = {
  name: 'With icon',
  args: {
    label: 'Primary button',
    appearance: 'primary',
    size:'medium',
    icon: 'home',
    iconPosition: 'before',
  },
};

export const IconOnly: Story = {
  name: 'Icon only',
  args: {
    appearance: 'primary',
    size:'medium',
    iconOnly: true,
    icon: 'home',
  },
};


export const Disabled: Story = {
  args: {
    label: 'Disabled button',
    appearance: 'primary',
    size:'medium',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: 'Disabled button',
    appearance: 'primary',
    size:'medium',
    loading: true,
  },
};