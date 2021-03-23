// * 这里导出定制化的widget组件
import { FormInput } from '../FormComponents';
import OptionsWidget from './OptionsWidget';
import ValidateWidget from './ValidateWidget';
import StyledWidget from './StyledWidget';

export const getWidget = (widgetType: string) => {
  const widgetMap = {
    Options: OptionsWidget,
    Validate: ValidateWidget,
    Styled: StyledWidget
  };

  return Reflect.get(widgetMap, widgetType) ?? FormInput;
};

export { OptionsWidget, ValidateWidget, StyledWidget };
