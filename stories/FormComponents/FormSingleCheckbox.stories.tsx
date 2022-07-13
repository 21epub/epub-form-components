import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormSingleCheckbox from '../../src/FormComponents/FormSingleCheckbox';
import type { FormSingleCheckboxProps } from '../../src/FormComponents/FormSingleCheckbox';

export default {
  title: '表单组件/单个勾选框（FormSingleCheckbox）',
  component: FormSingleCheckbox,
} as Meta;

const Template: Story<FormSingleCheckboxProps> = (args) => (
  <FormSingleCheckbox {...args} />
);

export const 单个勾选框 = Template.bind({});

单个勾选框.args = {
  value: true,
};
