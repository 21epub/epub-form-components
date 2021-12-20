import React from 'react';
import type { Story, Meta } from '@storybook/react';
import StyledWidget from '../../FormWidgets/StyledWidget';
import type { StyledWidgetProps } from '../../FormWidgets/StyledWidget';
import Font from '../../FormWidgets/StyledWidget/Font';
import type { FontProps } from '../../FormWidgets/StyledWidget/Font';
import Color from '../../FormWidgets/StyledWidget/Color';
import type { ColorProps } from '../../FormWidgets/StyledWidget/Color';
import Border from '../../FormWidgets/StyledWidget/Border';
import type { BorderProps } from '../../FormWidgets/StyledWidget/Border';

export default {
  title: 'FormWidgets/StyledWidget',
  component: StyledWidget
} as Meta;

const Template: Story<StyledWidgetProps> = (args) => <StyledWidget {...args} />;

export const Styled = Template.bind({});

Styled.args = {
  value: {
    fontSize: '14px',
    fontWeight: 'normal',
    backgroundColor: 'red',
    borderStyle: 'solid',
    color: 'green'
  },
  styledList: [
    {
      label: '字号',
      type: 'Font',
      name: 'font',
      defaultValue: { fontSize: '14px', fontWeight: 'bold' }
    },
    {
      label: '颜色',
      type: 'Color',
      name: 'color',
      defaultValue: '#A83E39'
    },
    {
      label: '边框',
      type: 'Border',
      name: 'border',
      defaultValue: { borderStyle: 'solid', borderColor: '#d9d9d9' }
    }
  ]
};

// 字体组件
const FontTemplate: Story<FontProps> = (args) => <Font {...args} />;
export const FontWidget = FontTemplate.bind({});
FontWidget.args = {
  label: '字体',
  defaultValue: {
    fontSize: '14px',
    fontWeight: 'normal'
  }
};

// 边框组件
const BorderTemplate: Story<BorderProps> = (args) => <Border {...args} />;
export const BorderWidget = BorderTemplate.bind({});
BorderWidget.args = {
  label: '边框',
  defaultValue: {
    borderStyle: 'solid',
    borderColor: '#d9d9d9'
  }
};

// 颜色组件
const ColorTemplate: Story<ColorProps> = (args) => <Color {...args} />;
export const ColorWidget = ColorTemplate.bind({});
ColorWidget.args = {
  label: '颜色',
  name: 'color',
  defaultValue: '#66ccff'
};
