import InputWidget from './Input/Input'
import TextAreaWidget from './TextArea/TextArea'
import SelectWidget from './Select/Select'
import DatePickerWidget from './DatePicker/DatePicker'
import OptionsWidget from './Options/Options'
import ValidateWidget from './Validate/Validate'
import StyledWidget from './Styled/Styled'
import 'antd/dist/antd.css'

const getWidget = (widgetType: string) => {
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

export default getWidget
export {
  InputWidget,
  TextAreaWidget,
  SelectWidget,
  DatePickerWidget,
  OptionsWidget,
  ValidateWidget,
  StyledWidget
}
