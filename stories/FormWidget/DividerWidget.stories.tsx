import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { DividerWidget } from '../../src/FormWidgets';
import type { DividerWidgetProps } from '../../src/FormWidgets';

export default {
  title: '工具组件/DividerWidget',
  component: DividerWidget,
} as Meta;

const Template: Story<DividerWidgetProps> = (args) => (
  <DividerWidget {...args} />
);

export const 分割线 = Template.bind({});

分割线.args = {
  text: '分割线',
};
