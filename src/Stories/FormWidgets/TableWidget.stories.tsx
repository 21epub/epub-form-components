import React from 'react';
import type { Story, Meta } from '@storybook/react';
import TableWidget from '../../FormWidgets/TableWidget';
import type { TableWidgetProps } from '../../FormWidgets/TableWidget';

export default {
  title: '工具组件/表格',
  component: TableWidget
} as Meta;

const Template: Story<TableWidgetProps> = (args) => <TableWidget {...args} />;

export const Table = Template.bind({});

Table.args = {
  columns: [
    {
      title: '序号',
      dataIndex: 'key',
      width: '100px',
      align: 'center'
    },
    {
      title: '贺词内容',
      dataIndex: 'congratulatory_message',
      align: 'center'
    }
  ],
  componentList: [
    {
      id: 'message',
      label: '贺词内容',
      name: 'message',
      type: 'FormTextArea',
      rules: [{ required: true, message: '不能为空' }]
    }
  ]
};
