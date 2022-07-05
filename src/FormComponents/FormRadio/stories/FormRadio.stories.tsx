import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormRadio from '..';
import type { FormRadioProps } from '..';

export default {
  title: '表单组件/单选项（FormRadio）',
  component: FormRadio,
  argTypes: {
    size: {
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] },
    },
  },
} as Meta;

const Template: Story<FormRadioProps> = (args) => <FormRadio {...args} />;

export const 单选项 = Template.bind({});

单选项.args = {
  size: 'middle',
  optionsConfig: {
    type: 'Radio',
    defaultValue: 'middle',
    options: [
      { label: '大', value: 'large', checked: false, id: '0' },
      { label: '中', value: 'middle', checked: true, id: '1' },
      { label: '小', value: 'small', checked: false, id: '2' },
    ],
  },
};
