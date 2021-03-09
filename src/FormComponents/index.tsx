import FormCheckbox from './FormCheckbox'
import FormButton from './FormButton'
import FormInput from './FormInput'
import FormInputNumber from './FormInputNumber'
import FormRadio from './FormRadio'
import FormTextArea from './FormTextArea'
import FormSelect from './FormSelect'
import Wrapper, { setGlobalStyled } from './styledComponents'
import 'antd/dist/antd.css'

export const getComponents = (widgetType: string) => {
  // 根据组件的widgetType，返回对应的通用组件名称(若widgetType和通用组件名相同，则不同在此处写)
  const getComponentType = () => {
    switch (widgetType) {
      case 'Name':
      case 'Phone':
      case 'Mail':
      case 'Text':
        return 'Input'
      case 'FloatNumber':
        return 'InputNumber'
      case 'SubmitButton':
        return 'Button'
      default:
        return widgetType
    }
  }

  // 通用组件列表
  const widgetMap = {
    Checkbox: FormCheckbox,
    Button: FormButton,
    Input: FormInput,
    InputNumber: FormInputNumber,
    Radio: FormRadio,
    Select: FormSelect,
    TextArea: FormTextArea
  }

  return Reflect.get(widgetMap, getComponentType()) ?? FormInput
}

export {
  setGlobalStyled,
  Wrapper,
  FormButton,
  FormCheckbox,
  FormInput,
  FormInputNumber,
  FormRadio,
  FormSelect,
  FormTextArea
}
