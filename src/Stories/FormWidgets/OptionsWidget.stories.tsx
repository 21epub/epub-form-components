import React from 'react';
import { Story, Meta } from '@storybook/react';
import OptionsWidget from '../../FormWidgets/OptionsWidget';
import type { OptionsWidgetProps } from '../../FormWidgets/OptionsWidget';

export default {
  title: 'FormWidgets/OptionsWidget',
  component: OptionsWidget
} as Meta;

const Template: Story<OptionsWidgetProps> = (args) => (
  <OptionsWidget {...args} />
);

export const Options = Template.bind({});

Options.args = {
  optionsConfig: {
    type: 'Radio',
    defaultValue: ['middle'],
    options: [
      {
        label:
          '大家好，这是表单名称长度测试显示阿斯利康黑咖喱看到过拉胯话大概行安徽两个卡就离开的发生的',
        value: 'large',
        checked: false,
        index: 0
      },
      { label: '中', value: 'middle', checked: true, index: 1 },
      { label: '小', value: 'small', checked: false, index: 2 }
    ]
  }
};
