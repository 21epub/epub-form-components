import React from 'react';
import { Story, Meta } from '@storybook/react';
import MonacoEditorWidget from '../../FormWidgets/MonacoEditorWidget';
import type { MonacoEditorWidgetProps } from '../../FormWidgets/MonacoEditorWidget';

export default {
  title: 'FormWidgets/MonacoEditor',
  component: MonacoEditorWidget
} as Meta;

const Template: Story<MonacoEditorWidgetProps> = (args) => (
  <MonacoEditorWidget {...args} />
);

export const MonacoEditor = Template.bind({});

const onChange = (value?: string, ev?: any) => {
  console.log('change', value);
  // console.log('changeEv', ev);
};

MonacoEditor.args = {
  debounceOptions: { wait: 300 },
  height: '500px',
  defaultLanguage: 'css',
  onChange
};
