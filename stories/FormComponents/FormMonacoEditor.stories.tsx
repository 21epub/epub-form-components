import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormMonacoEditor from '../../src/FormComponents/FormMonacoEditor';
import type { FormMonacoEditorProps } from '../../src/FormComponents/FormMonacoEditor';

export default {
  title: '表单组件/摩纳哥代码编辑器（FormMonacoEditor）',
  component: FormMonacoEditor,
} as Meta;

const Template: Story<FormMonacoEditorProps> = (args) => (
  <FormMonacoEditor {...args} />
);

export const 摩纳哥代码编辑器 = Template.bind({});

const onChange = (value?: string, ev?: any) => {
  console.log('change', value);
  console.log('changeEv', ev);
};

摩纳哥代码编辑器.args = {
  debounceOptions: { wait: 300 },
  height: '500px',
  defaultLanguage: 'json',
  onChange,
};
