// * 这里导出定制化的widget组件
import ColorPickerWidget from './ColorPickerWidget';
import OptionsWidget from './OptionsWidget';
import ValidateWidget from './ValidateWidget';
import StyledWidget from './StyledWidget';
export { ColorPickerWidget, OptionsWidget, ValidateWidget, StyledWidget };

// 获取通用定制化组件
export const getWidget = (widgetType: string) => {
  const widgetMap = {
    ColorPicker: ColorPickerWidget,
    Options: OptionsWidget,
    Validate: ValidateWidget,
    Styled: StyledWidget
  };

  return Reflect.get(widgetMap, widgetType);
};
