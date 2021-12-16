import React from 'react';
import { Story, Meta } from '@storybook/react';
import AlertWidget from '../../FormWidgets/AlertWidget';
import type { AlertWidgetProps } from '../../FormWidgets/AlertWidget';

export default {
  title: 'FormWidgets/AlertWidget',
  component: AlertWidget
} as Meta;

const Template: Story<AlertWidgetProps> = (args) => <AlertWidget {...args} />;

export const Alert = Template.bind({});

Alert.args = {
  message: '这是提示框',
  type: 'warning',
  closable: true,
  showIcon: true
};
