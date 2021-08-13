// * 这里导出定制化的widget组件
import ColorPickerWidget from './ColorPickerWidget';
import MonacoEditorWidget from './MonacoEditorWidget';
import OptionsWidget from './OptionsWidget';
import StyledWidget from './StyledWidget';
import TableWidget from './TableWidget';
import ValidateWidget from './ValidateWidget';

// 逐个导出所有widget
export {
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
    ColorPicker: ColorPickerWidget,
    MonacoEditor: MonacoEditorWidget,
    Options: OptionsWidget,
    Validate: ValidateWidget,
    Table: TableWidget,
    Styled: StyledWidget
  };

  return Reflect.get(widgetMap, widgetType);
};
