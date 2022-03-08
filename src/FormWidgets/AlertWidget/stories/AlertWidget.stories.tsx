import React from 'react';
import type { Story, Meta } from '@storybook/react';
import AlertWidget from '..';
import type { AlertWidgetProps } from '..';

export default {
  title: '工具组件/警告提示',
  component: AlertWidget,
} as Meta;

const Template: Story<AlertWidgetProps> = (args) => <AlertWidget {...args} />;

export const Alert = Template.bind({});

Alert.args = {
  message: '这是提示框',
  type: 'warning',
  closable: true,
  showIcon: true,
};
