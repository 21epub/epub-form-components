import React from 'react';
import type { Story, Meta } from '@storybook/react';
import moment from 'moment';
import FormDatePicker from '../../FormComponents/FormDatePicker';
import type { FormDatePickerProps } from '../../FormComponents/FormDatePicker';

export default {
  title: '表单组件/日期选择器',
  component: FormDatePicker,
  argTypes: {
    size: {
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] }
    }
  }
} as Meta;

const Template: Story<FormDatePickerProps> = (args) => (
  <FormDatePicker {...args} />
);

export const DatePicker = Template.bind({});

DatePicker.args = {
  size: 'middle',
  value: moment('2021-03-02 13:45', 'YYYY-MM-DD HH:mm'),
  picker: 'date',
  placeholder: '请选择日期'
};
