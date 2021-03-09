import InputWidget from './Input'
import TextAreaWidget from './TextArea'
import SelectWidget from './Select'
import DatePickerWidget from './DatePicker'
import OptionsWidget from './Options'
import ValidateWidget from './Validate'
import StyledWidget from './Styled'
import 'antd/dist/antd.css'

export const getWidget = (widgetType: string) => {
  const widgetMap = {
    Input: InputWidget,
    TextArea: TextAreaWidget,
    Select: SelectWidget,
    DatePicker: DatePickerWidget,
    Options: OptionsWidget,
    Validate: ValidateWidget,
    Styled: StyledWidget
  }

  return Reflect.get(widgetMap, widgetType) ?? InputWidget
}

export {
  InputWidget,
  TextAreaWidget,
  SelectWidget,
  DatePickerWidget,
  OptionsWidget,
  ValidateWidget,
  StyledWidget
}
