// * 导出组件通用类型及方法
// * FormComponents里是通用表单类型组件。参数中至少包含value与onChange字段，可用于表单收集数据
import FormCheckbox from './FormCheckbox';
import type { FormCheckboxProps } from './FormCheckbox';
import FormColorPicker from './FormColorPicker';
import type { FormColorPickerProps } from './FormColorPicker';
import FormDatePicker from './FormDatePicker';
import type { FormDatePickerProps } from './FormDatePicker';
import FormInput from './FormInput';
import type { FormInputProps } from './FormInput';
import FormInputNumber from './FormInputNumber';
import type { FormInputNumberProps } from './FormInputNumber';
import FormMonacoEditor from './FormMonacoEditor';
import type { FormMonacoEditorProps } from './FormMonacoEditor';
import FormOptions from './FormOptions';
import type { FormOptionsProps } from './FormOptions';
import FormRadio from './FormRadio';
import type { FormRadioProps } from './FormRadio';
import FormRangePicker from './FormRangePicker';
import type { FormRangePickerProps } from './FormRangePicker';
import FormRichText from './FormRichText';
import type { FormRichTextProps } from './FormRichText';
import FormSelect from './FormSelect';
import type { FormSelectProps } from './FormSelect';
import FormStyled from './FormStyled';
import type { FormStyledProps } from './FormStyled';
import FormSwitch from './FormSwitch';
import type { FormSwitchProps } from './FormSwitch';
import FormTextArea from './FormTextArea';
import type { FormTextAreaProps } from './FormTextArea';
import FormValidate from './FormValidate';
import type { FormValidateProps } from './FormValidate';
export * from './utils';

export {
  FormCheckbox,
  FormColorPicker,
  FormDatePicker,
  FormInput,
  FormInputNumber,
  FormMonacoEditor,
  FormOptions,
  FormRadio,
  FormRangePicker,
  FormRichText,
  FormSelect,
  FormStyled,
  FormSwitch,
  FormTextArea,
  FormValidate
};

export type {
  FormCheckboxProps,
  FormColorPickerProps,
  FormDatePickerProps,
  FormInputProps,
  FormInputNumberProps,
  FormMonacoEditorProps,
  FormOptionsProps,
  FormRadioProps,
  FormRangePickerProps,
  FormRichTextProps,
  FormSelectProps,
  FormStyledProps,
  FormSwitchProps,
  FormTextAreaProps,
  FormValidateProps
};

// 通过组件类型选择组件
export const getFormComponent = (componentType: string) => {
  // 通用表单组件列表
  const FormComponentMap = {
    FormCheckbox,
    FormColorPicker,
    FormDatePicker,
    FormInput,
    FormInputNumber,
    FormMonacoEditor,
    FormOptions,
    FormRangePicker,
    FormRadio,
    FormRichText,
    FormSelect,
    FormStyled,
    FormSwitch,
    FormTextArea,
    FormValidate
  };

  // 导出对应的组价，没有则默认导出输入框组件
  return Reflect.get(FormComponentMap, componentType);
};
