import React from 'react';
import { Story, Meta } from '@storybook/react';
import FormButton from '../../FormComponents/FormButton';
import type { FormButtonProps } from '../../FormComponents/FormButton';

export default {
  title: 'FormComponents/FormButton',
  component: FormButton,
  argTypes: {
    size: {
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] }
    }
  }
} as Meta;

const Template: Story<FormButtonProps> = (args) => <FormButton {...args} />;

export const Button = Template.bind({});

Button.args = {
  buttonText: '按钮',
  type: 'primary',
  size: 'middle'
};
