import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormMonacoEditor from '../../FormComponents/FormMonacoEditor';
import type { FormMonacoEditorProps } from '../../FormComponents/FormMonacoEditor';

export default {
  title: '表单组件/摩纳哥代码编辑器',
  component: FormMonacoEditor
} as Meta;

const Template: Story<FormMonacoEditorProps> = (args) => (
  <FormMonacoEditor {...args} />
);

export const MonacoEditor = Template.bind({});

const onChange = (value?: string, ev?: any) => {
  console.log('change', value);
  console.log('changeEv', ev);
};

MonacoEditor.args = {
  debounceOptions: { wait: 300 },
  height: '500px',
  defaultLanguage: 'css',
  onChange
};
