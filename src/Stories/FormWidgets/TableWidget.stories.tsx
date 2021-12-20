import React from 'react';
import type { Story, Meta } from '@storybook/react';
import TableWidget from '../../FormWidgets/TableWidget';
import type { TableWidgetProps } from '../../FormWidgets/TableWidget';

export default {
  title: 'FormWidgets/Table',
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
      id: 'congratulatory_message',
      label: '贺词内容',
      name: 'congratulatory_message',
      type: 'FormTextArea'
    }
  ]
};
