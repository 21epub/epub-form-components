import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { FormSwitch } from '../../src/FormComponents';
import type { FormSwitchProps } from '../../src/FormComponents';

export default {
  title: '表单组件/FormSwitch',
  component: FormSwitch,
  argTypes: {
    size: {
      control: { type: 'inline-radio', options: ['large', 'middle', 'small'] },
    },
  },
} as Meta;

const Template: Story<FormSwitchProps> = (args) => <FormSwitch {...args} />;

export const 开关 = Template.bind({});

开关.args = {
  value: true,
};
