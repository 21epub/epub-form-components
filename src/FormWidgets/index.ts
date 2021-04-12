// * 这里导出定制化的widget组件
import OptionsWidget from './OptionsWidget';
import ValidateWidget from './ValidateWidget';
import StyledWidget from './StyledWidget';
export { OptionsWidget, ValidateWidget, StyledWidget };

// 获取通用定制化组件
export const getWidget = (widgetType: string) => {
  const widgetMap = {
    Options: OptionsWidget,
    Validate: ValidateWidget,
    Styled: StyledWidget
  };

  // 找不到对应的组件，默认导出输入框组件
  return Reflect.get(widgetMap, widgetType);
};
