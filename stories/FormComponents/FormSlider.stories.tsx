import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormSlider from '../../src/FormComponents/FormSlider';
import type { FormSliderProps } from '../../src/FormComponents/FormSlider';

export default {
  title: '表单组件/滑动输入条（FormSlider）',
  component: FormSlider,
} as Meta;

const Template: Story<FormSliderProps> = (args) => <FormSlider {...args} />;

export const 滑动输入条 = Template.bind({});

滑动输入条.args = {};
