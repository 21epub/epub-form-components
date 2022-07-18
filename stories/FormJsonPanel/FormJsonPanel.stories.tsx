import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { JsonPanel } from '../../src/FormJsonPanel';
import type { JsonPanelProps } from '../../src/FormJsonPanel';
import { jsonPanelSetting } from './mock/settingConfig';
// import {
//   Title,
//   Subtitle,
//   Description,
//   Primary,
//   ArgsTable,
//   Stories,
//   PRIMARY_STORY
// } from '@storybook/addon-docs/blocks';

export default {
  title: '面板/JsonPanel',
  component: JsonPanel,
  // parameters: {
  //   docs: {
  //     description: {
  //       component: '组件描述111'
  //     },
  //     page: () => (
  //       <>
  //         <Title />
  //         <Subtitle />
  //         <Description />
  //         <Primary />
  //       </>
  //     )
  //   },
  //   componentSubtitle: '副标题'
  // }
} as Meta;

const Template: Story<JsonPanelProps> = (args) => <JsonPanel {...args} />;

export const Json面板 = Template.bind({});

const onChange = (value: any) => {
  console.log(value);
};

Json面板.args = {
  panelType: 'EditorPanel',
  panelProps: {
    panelData: { need_user_info: true, name: '姓名' },
    panelConfig: jsonPanelSetting,
    onChange,
  },
  monacoLanguage: 'json',
};
