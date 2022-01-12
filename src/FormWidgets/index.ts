// * 这里导出定制化的widget组件。不包含value与onChange字段的独立组件。不与外界数据产生交互
import AlertWidget from './AlertWidget';
import type { AlertWidgetProps } from './AlertWidget';
import ButtonWidget from './ButtonWidget';
import type { ButtonWidgetProps } from './ButtonWidget';
import TableWidget from './TableWidget';
import type { TableWidgetProps } from './TableWidget';

// 逐个导出所有widget
export { AlertWidget, ButtonWidget, TableWidget };

export type { AlertWidgetProps, ButtonWidgetProps, TableWidgetProps };

// 获取通用定制化组件
export const getWidget = (widgetType: string) => {
  const widgetMap = {
    AlertWidget,
    ButtonWidget,
    TableWidget
  };

  return Reflect.get(widgetMap, widgetType);
};
