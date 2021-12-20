import React from 'react';
import type { Story, Meta } from '@storybook/react';
import ValidateWidget from '../../FormWidgets/ValidateWidget';
import type { ValidateWidgetProps } from '../../FormWidgets/ValidateWidget';
import IsRequired from '../../FormWidgets/ValidateWidget/IsRequired';
import type { IsRequiredProps } from '../../FormWidgets/ValidateWidget/IsRequired';
import Max from '../../FormWidgets/ValidateWidget/Max';
import type { MaxProps } from '../../FormWidgets/ValidateWidget/Max';
import Min from '../../FormWidgets/ValidateWidget/Min';
import type { MinProps } from '../../FormWidgets/ValidateWidget/Min';
import Precision from '../../FormWidgets/ValidateWidget/Precision';
import type { PrecisionProps } from '../../FormWidgets/ValidateWidget/Precision';
import ReadOnly from '../../FormWidgets/ValidateWidget/ReadOnly';
import type { ReadOnlyProps } from '../../FormWidgets/ValidateWidget/ReadOnly';

export default {
  title: 'FormWidgets/ValidateWidget',
  component: ValidateWidget
} as Meta;

const Template: Story<ValidateWidgetProps> = (args) => (
  <ValidateWidget {...args} />
);
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
