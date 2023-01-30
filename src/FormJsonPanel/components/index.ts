import type React from 'react';
import * as FormComponents from '../../FormComponents';
import * as FormWidgets from '../../FormWidgets';
import * as ProComponents from '../../ProComponents';
import * as LayoutWidgets from '../../LayoutWidgets';
import type { ComponentMapType, ComponentType } from '../type';
import ErrorAlertWidget from './ErrorAlertWidget';

export { default as ErrorAlertWidget } from './ErrorAlertWidget';
export type { ErrorAlertWidgetProps } from './ErrorAlertWidget';

// 组件库中的所有组件
export const componentsMap = {
  ...FormComponents,
  ...FormWidgets,
  ...LayoutWidgets,
  ...ProComponents,
};

/**
 * @name 通过组件type获取对应的组件实例
 * @param componentType 组件类型
 * @param componentMap 外部传入的组件map
 * @returns
 */
export const getComponent = (
  componentType?: ComponentType['type'],
  componentMap?: ComponentMapType
): React.FC<any> => {
  if (!componentType) return ErrorAlertWidget;
  return (
    Reflect.get({ ...componentsMap, ...componentMap }, componentType) ||
    ErrorAlertWidget
  );
};
