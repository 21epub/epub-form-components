import React from 'react';
import type { Story, Meta } from '@storybook/react';
import DividerWidget from '..';
import type { DividerWidgetProps } from '..';

export default {
  title: '工具组件/分割线',
  component: DividerWidget,
} as Meta;

const Template: Story<DividerWidgetProps> = (args) => (
  <DividerWidget {...args} />
);

export const Divider = Template.bind({});

Divider.args = {
  text: '分割线',
};
