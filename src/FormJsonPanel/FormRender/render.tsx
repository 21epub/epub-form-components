import React, { Fragment } from 'react';
import { isBoolean } from 'lodash';
import type { ComponentMapType, ComponentType } from '../type';
import { getComponent } from '../components';
import { formatProps, styledToString } from './utils';
import { FormItemWrapper } from './Styled';
import * as LayoutWidgets from '../../LayoutWidgets';

// 渲染组件列表参数
export interface RenderPropsType {
  componentList?: ComponentType[];
  count: number;
  componentMap?: ComponentMapType;
  initialValues?: AnyObject;
  formValues?: AnyObject;
}

// 渲染单个组件参数
export interface RenderItemPropsType extends RenderPropsType {
  component: ComponentType;
}

// 渲染包含children的布局组件
export const layoutRender = (props: RenderItemPropsType) => {
  const { component, count, componentMap, initialValues, formValues } = props;
  if (!component?.children) return;
  const LayoutWidget = getComponent(component?.type);
  return (
    <LayoutWidget
      key={component?.id + component?.name}
      {...component?.props}
      styled={styledToString(component?.props?.styled)}
    >
      {loopRender({
        componentList: component?.children,
        count,
        componentMap,
        initialValues,
        formValues,
      })}
    </LayoutWidget>
  );
};

// 渲染组件
export const componentRender = (props: RenderItemPropsType) => {
  const { component, count, componentMap, initialValues, formValues } = props;
  const ComponentWidget = getComponent(component?.type, componentMap);
  return (
    <Fragment key={component?.id + component?.name}>
      <FormItemWrapper
        key={component?.id + component?.name}
        className={count ? 'FormItemRender' : ''}
        initialValue={initialValues?.[component?.name]}
        style={{ position: 'relative', marginLeft: `${count * 50}px` }}
        {...component}
        styled={styledToString(component?.styled || {})}
      >
        <ComponentWidget
          slug={initialValues?.slug || initialValues?.id}
          componentprops={component}
          {...formatProps(initialValues || {})}
          {...component?.props}
        />
      </FormItemWrapper>
      {component?.children &&
        isBoolean(formValues?.[component?.name]) &&
        formValues?.[component?.name] &&
        loopRender({
          componentList: component?.children,
          count: count + 1,
          componentMap,
          initialValues,
          formValues,
        })}
    </Fragment>
  );
};

// 循环渲染页面
export const loopRender = (props: RenderPropsType): React.ReactNode => {
  const { componentList } = props;
  return componentList?.map((component: ComponentType) => {
    if (Object.keys(LayoutWidgets).includes(component?.type)) {
      return layoutRender({ component, ...props });
    } else return componentRender({ component, ...props });
  });
};
