import React from 'react';
import type { Story, Meta } from '@storybook/react';
import moment from 'moment';
import FormRangePicker from '..';
import type { FormRangePickerProps } from '..';

export default {
  title: '表单组件/日期范围',
  component: FormRangePicker,
  argTypes: {
    size: {
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] },
    },
  },
} as Meta;

const Template: Story<FormRangePickerProps> = (args) => (
  <FormRangePicker {...args} />
);

export const RangePicker = Template.bind({});

RangePicker.args = {
  size: 'middle',
  defaultValue: [moment('2021-04-09 16:08:50'), moment('2021-04-30 16:08:50')],
  placeholder: ['开始日期', '结束日期'],
};
