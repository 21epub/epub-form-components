import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormSingleCheckbox from '../../FormSingleCheckbox';
import type { FormSingleCheckboxProps } from '../../FormSingleCheckbox';

export default {
  title: '表单组件/勾选框',
  component: FormSingleCheckbox,
  argTypes: {
    size: {
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] },
    },
  },
} as Meta;

const Template: Story<FormSingleCheckboxProps> = (args) => (
  <FormSingleCheckbox {...args} />
);

export const SingleCheckbox = Template.bind({});

SingleCheckbox.args = {
  value: true,
};
