import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormSlider from '..';
import type { FormSliderProps } from '..';

export default {
  title: '表单组件/滑动输入条',
  component: FormSlider,
} as Meta;

const Template: Story<FormSliderProps> = (args) => <FormSlider {...args} />;

export const Slider = Template.bind({});

Slider.args = {};
