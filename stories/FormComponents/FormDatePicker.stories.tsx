import React from 'react';
import type { Story, Meta } from '@storybook/react';
import moment from 'moment';
import { FormDatePicker } from '../../src/FormComponents';
import type { FormDatePickerProps } from '../../src/FormComponents';

export default {
  title: '表单组件/FormDatePicker',
  component: FormDatePicker,
  argTypes: {
    size: {
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] },
    },
  },
} as Meta;

const Template: Story<FormDatePickerProps> = (args) => (
  <FormDatePicker {...args} />
);

export const 日期选择器 = Template.bind({});

日期选择器.args = {
  size: 'middle',
  defaultValue: moment('2021-03-02 13:45', 'YYYY-MM-DD HH:mm'),
  picker: 'date',
  placeholder: '请选择日期',
};
