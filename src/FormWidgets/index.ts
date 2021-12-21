// * 这里导出定制化的widget组件
import AlertWidget from './AlertWidget';
import type { AlertWidgetProps } from './AlertWidget';
import ButtonWidget from './ButtonWidget';
import type { ButtonWidgetProps } from './ButtonWidget';
import ColorPickerWidget from './ColorPickerWidget';
import type { ColorPickerWidgetProps } from './ColorPickerWidget';
import MonacoEditorWidget from './MonacoEditorWidget';
import type { MonacoEditorWidgetProps } from './MonacoEditorWidget';
import OptionsWidget from './OptionsWidget';
import type { OptionsWidgetProps } from './OptionsWidget';
import StyledWidget from './StyledWidget';
import type { StyledWidgetProps } from './StyledWidget';
import TableWidget from './TableWidget';
import type { TableWidgetProps } from './TableWidget';
import ValidateWidget from './ValidateWidget';
import type { ValidateWidgetProps } from './ValidateWidget';

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

export type {
  AlertWidgetProps,
  ButtonWidgetProps,
  ColorPickerWidgetProps,
  MonacoEditorWidgetProps,
  OptionsWidgetProps,
  StyledWidgetProps,
  TableWidgetProps,
  ValidateWidgetProps
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
