// * 这里导出最小单位的通用form组件
import FormButton from './FormButton';
import FormCheckbox from './FormCheckbox';
import FormDatePicker from './FormDatePicker';
import FormInput from './FormInput';
import FormInputNumber from './FormInputNumber';
import FormRadio from './FormRadio';
import FormTextArea from './FormTextArea';
import FormSelect from './FormSelect';

// 通过组件类型选择组件
export const getComponents = (componentsType: string) => {
  // 根据组件的widgetType，返回对应的通用组件名称(若widgetType和通用组件名相同，则不同在此处写)
  const getComponentType = () => {
    switch (componentsType) {
      case 'Name':
      case 'Phone':
      case 'Mail':
      case 'Text':
        return 'Input';
      case 'FloatNumber':
        return 'InputNumber';
      case 'SubmitButton':
        return 'Button';
      default:
        return componentsType;
    }
  };

  // 通用组件列表
  const widgetMap = {
    Button: FormButton,
    Checkbox: FormCheckbox,
    DataPicker: FormDatePicker,
    Input: FormInput,
    InputNumber: FormInputNumber,
    Radio: FormRadio,
    Select: FormSelect,
    TextArea: FormTextArea
  };

  return Reflect.get(widgetMap, getComponentType()) ?? FormInput;
};

export * from './type';
export * from './utils';
export {
  FormButton,
  FormCheckbox,
  FormDatePicker,
  FormInput,
  FormInputNumber,
  FormRadio,
  FormSelect,
  FormTextArea
};
