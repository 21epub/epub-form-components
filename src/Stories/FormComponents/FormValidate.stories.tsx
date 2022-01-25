import React from 'react';
import type { Story, Meta } from '@storybook/react';
import FormValidate from '../../FormComponents/FormValidate';
import type { FormValidateProps } from '../../FormComponents/FormValidate';
import IsRequired from '../../FormComponents/FormValidate/IsRequired';
import type { IsRequiredProps } from '../../FormComponents/FormValidate/IsRequired';
import Max from '../../FormComponents/FormValidate/Max';
import type { MaxProps } from '../../FormComponents/FormValidate/Max';
import Min from '../../FormComponents/FormValidate/Min';
import type { MinProps } from '../../FormComponents/FormValidate/Min';
import Precision from '../../FormComponents/FormValidate/Precision';
import type { PrecisionProps } from '../../FormComponents/FormValidate/Precision';
import ReadOnly from '../../FormComponents/FormValidate/ReadOnly';
import type { ReadOnlyProps } from '../../FormComponents/FormValidate/ReadOnly';

export default {
  title: '表单组件/验证',
  component: FormValidate
} as Meta;

const Template: Story<FormValidateProps> = (args) => <FormValidate {...args} />;
export const Validate = Template.bind({});
Validate.args = {
  value: {
    readOnly: false,
    isRequired: false,
    min: 10,
    max: 100,
    precision: 2
  },
  widgetType: 'Text',
  validateList: [
    { type: 'readOnly' },
    { type: 'isRequired' },
    { type: 'min' },
    { type: 'max' },
    { type: 'precision' }
  ]
};

// 是否必填组件
const IsRequiredTemplate: Story<IsRequiredProps> = (args) => (
  <IsRequired {...args} />
);
export const IsRequiredWidget = IsRequiredTemplate.bind({});
IsRequiredWidget.args = {
  validateValue: {
    readOnly: false,
    isRequired: false,
    min: 10,
    max: 100,
    precision: 2
  }
};

// 组件
const MaxTemplate: Story<MaxProps> = (args) => <Max {...args} />;
export const MaxWidget = MaxTemplate.bind({});
MaxWidget.args = {
  validateValue: {
    readOnly: false,
    isRequired: false,
    min: 10,
    max: 100,
    precision: 2
  }
};

// 是否必填组件
const MinTemplate: Story<MinProps> = (args) => <Min {...args} />;
export const MinWidget = MinTemplate.bind({});
MinWidget.args = {
  validateValue: {
    readOnly: false,
    isRequired: false,
    min: 10,
    max: 100,
    precision: 2
  }
};

// 是否必填组件
const PrecisionTemplate: Story<PrecisionProps> = (args) => (
  <Precision {...args} />
);
export const PrecisionWidget = PrecisionTemplate.bind({});
PrecisionWidget.args = {
  validateValue: {
    readOnly: false,
    isRequired: false,
    min: 10,
    max: 100,
    precision: 2
  }
};

// 是否必填组件
const ReadOnlyTemplate: Story<ReadOnlyProps> = (args) => <ReadOnly {...args} />;
export const ReadOnlyWidget = ReadOnlyTemplate.bind({});
ReadOnlyWidget.args = {
  validateValue: {
    readOnly: false,
    isRequired: false,
    min: 10,
    max: 100,
    precision: 2
  }
};
