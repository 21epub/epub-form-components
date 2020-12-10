import FormCheckbox from './FormCheckbox/FormCheckbox'
import FormButton from './FormButton/FormButton'
import FormInput from './FormInput/FormInput'
import FormInputNumber from './FormInputNumber/FormInputNumber'
import FormRadio from './FormRadio/FormRadio'
import FormTextArea from './FormTextArea/FormTextArea'
import FormSelect from './FormSelect/FormSelect'
import Mask from './Mask/Mask'
import 'antd/dist/antd.css'

const getComponents = (widgetType: string) => {
  // 根据组件的widgetType，返回对应的通用组件名称(若widgetType和通用组件名相同，则不同在此处写)
  const getComponentType = (widgetType: string) => {
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
    TextArea: FormTextArea,
    Mask: Mask
  }

  return Reflect.get(widgetMap, getComponentType(widgetType)) ?? FormInput
}

export default getComponents
export {
  FormButton,
  FormCheckbox,
  FormInput,
  FormInputNumber,
  FormRadio,
  FormSelect,
  FormTextArea,
  Mask
}
