import React from 'react';
import { Story, Meta } from '@storybook/react';
import MonacoEditorWidget from '../../FormWidgets/MonacoEditorWidget';
import type { MonacoEditorWidgetProps } from '../../FormWidgets/MonacoEditorWidget';
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
  title: 'FormWidgets/MonacoEditor',
  component: MonacoEditorWidget
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
  //       </>
  //     )
  //   },
  //   componentSubtitle: '副标题'
  // }
} as Meta;

const Template: Story<MonacoEditorWidgetProps> = (args) => (
  <MonacoEditorWidget {...args} />
);

export const MonacoEditor = Template.bind({});

MonacoEditor.args = {
  height: '690px',
  language: 'css'
};
