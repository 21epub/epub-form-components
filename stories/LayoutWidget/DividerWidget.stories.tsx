import React from 'react';
import type { Story, Meta } from '@storybook/react';
import DividerWidget from '../../src/LayoutWidgets/DividerWidget';
import type { DividerWidgetProps } from '../../src/LayoutWidgets/DividerWidget';

export default {
  title: '布局组件/分割线（DividerWidget）',
  component: DividerWidget,
} as Meta;

const Template: Story<DividerWidgetProps> = (args) => (
  <DividerWidget {...args} />
);

export const 分割线 = Template.bind({});

分割线.args = {
  text: '分割线',
};
