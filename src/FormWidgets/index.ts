// * 这里导出定制化的widget组件
import AlertWidget from './AlertWidget';
import ButtonWidget from './ButtonWidget';
import ColorPickerWidget from './ColorPickerWidget';
import MonacoEditorWidget from './MonacoEditorWidget';
import OptionsWidget from './OptionsWidget';
import StyledWidget from './StyledWidget';
import TableWidget from './TableWidget';
import ValidateWidget from './ValidateWidget';

// 逐个导出所有widget
export {
  AlertWidget,
  ButtonWidget,
  ColorPickerWidget,
  MonacoEditorWidget,
  OptionsWidget,
  StyledWidget,
  TableWidget,
  ValidateWidget
};

// 获取通用定制化组件
export const getWidget = (widgetType: string) => {
  const widgetMap = {
    AlertWidget,
    ButtonWidget,
    ColorPickerWidget,
    MonacoEditorWidget,
    OptionsWidget,
    ValidateWidget,
    TableWidget,
    StyledWidget
  };

  return Reflect.get(widgetMap, widgetType);
};
