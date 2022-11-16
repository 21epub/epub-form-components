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
export const layoutRender = (props: RenderItemPropsType, index: number) => {
  const { component, count, componentMap, initialValues, formValues } = props;
  const { id = '', name = '', type, children, hidden } = component || {};
  if (!children || hidden) return;
  const LayoutWidget = getComponent(type);
  return (
    <LayoutWidget
      key={id + name + index}
      {...component?.props}
      styled={styledToString(component?.props?.styled)}
    >
      {loopRender({
        componentList: children,
        count,
        componentMap,
        initialValues,
        formValues,
      })}
    </LayoutWidget>
  );
};

// 渲染组件
export const componentRender = (props: RenderItemPropsType, index: number) => {
  const { component, count, componentMap, initialValues, formValues } = props;
  const {
    id = '',
    name = '',
    label = '',
    type,
    children,
    styled,
  } = component || {};
  const ComponentWidget = getComponent(type, componentMap);
  return (
    <Fragment key={id + name + index}>
      <FormItemWrapper
        key={id + name + index}
        className={count ? 'FormItemRender' : ''}
        initialValue={initialValues?.[name]}
        style={{ position: 'relative', marginLeft: `${count * 50}px` }}
        name={name || id + type + label}
        {...component}
        styled={styledToString(styled || {})}
      >
        <ComponentWidget
          slug={initialValues?.slug || initialValues?.id}
          componentprops={component}
          {...formatProps(initialValues || {})}
          {...component?.props}
        />
      </FormItemWrapper>
      {children &&
        isBoolean(formValues?.[name]) &&
        formValues?.[name] &&
        loopRender({
          componentList: children,
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
  return componentList?.map((component: ComponentType, index: number) => {
    if (Object.keys(LayoutWidgets).includes(component?.type)) {
      return layoutRender({ component, ...props }, index);
    }
    return componentRender({ component, ...props }, index);
  });
};
