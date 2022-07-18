import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { FormTable } from '../../src/ProComponents';
import type { FormTableProps } from '../../src/ProComponents';

export default {
  title: '高级组件/FormTable',
  component: FormTable,
} as Meta;

const Template: Story<FormTableProps> = (args) => <FormTable {...args} />;

export const 表格 = Template.bind({});

表格.args = {
  columns: [
    {
      title: '序号',
      dataIndex: 'key',
      width: '100px',
      align: 'center',
    },
    {
      title: '信息',
      dataIndex: 'message',
      align: 'center',
    },
  ],
  componentList: [
    {
      id: 'message',
      label: '信息内容',
      name: 'message',
      type: 'FormTextArea',
      rules: [{ required: true, message: '不能为空' }],
    },
  ],
};
