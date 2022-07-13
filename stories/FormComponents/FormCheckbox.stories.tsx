import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormCheckbox from '../../src/FormComponents/FormCheckbox';
import type { FormCheckboxProps } from '../../src/FormComponents/FormCheckbox';

export default {
  title: '表单组件/多选项（FormCheckbox）',
  component: FormCheckbox,
  argTypes: {
    size: {
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] },
    },
  },
} as Meta;

const Template: Story<FormCheckboxProps> = (args) => <FormCheckbox {...args} />;

export const 多选项 = Template.bind({});

多选项.args = {
  size: 'middle',
  optionsConfig: {
    type: 'Checkbox',
    defaultValue: ['middle'],
    options: [
      { label: '大', value: 'large', checked: false, id: '0' },
      { label: '中', value: 'middle', checked: true, id: '1' },
      { label: '小', value: 'small', checked: false, id: '2' },
    ],
  },
};
