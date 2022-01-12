import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormStyled from '../../FormComponents/FormStyled';
import type { FormStyledProps } from '../../FormComponents/FormStyled';
import Font from '../../FormComponents/FormStyled/Font';
import type { FontProps } from '../../FormComponents/FormStyled/Font';
import Color from '../../FormComponents/FormStyled/Color';
import type { ColorProps } from '../../FormComponents/FormStyled/Color';
import Border from '../../FormComponents/FormStyled/Border';
import type { BorderProps } from '../../FormComponents/FormStyled/Border';

export default {
  title: 'FormComponents/FormStyled',
  component: FormStyled
} as Meta;

const Template: Story<FormStyledProps> = (args) => <FormStyled {...args} />;

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
