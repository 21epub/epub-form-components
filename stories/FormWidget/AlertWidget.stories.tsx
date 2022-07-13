import React from 'react';
import type { Story, Meta } from '@storybook/react';
import AlertWidget from '../../src/FormWidgets/AlertWidget';
import type { AlertWidgetProps } from '../../src/FormWidgets/AlertWidget';

export default {
  title: '工具组件/警告提示（AlertWidget）',
  component: AlertWidget,
} as Meta;

const Template: Story<AlertWidgetProps> = (args) => <AlertWidget {...args} />;

export const 警告提示 = Template.bind({});

警告提示.args = {
  message: '这是提示框',
  type: 'warning',
  closable: true,
  showIcon: true,
};
