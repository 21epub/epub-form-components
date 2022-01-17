import React, { Fragment } from 'react';
import { Form } from 'antd';
import { isBoolean } from 'lodash';
import type { ComponentMapType, ComponentType } from '../type';
import { getComponent } from '../components';
import { formatProps, styledToString } from './utils';

// 渲染行
export const rowRender = (component: ComponentType, count: number) => {
  if (!component?.children) return;
  const RowWidget = getComponent('RowWidget');
  return (
    <RowWidget
      key={component.name}
      {...component.props}
      styled={styledToString(component?.props?.styled)}
    >
      {loopRender(component.children, count)}
    </RowWidget>
  );
};

// 渲染列
export const colRender = (component: ComponentType, count: number) => {
  if (!component?.children) return;
  const ColWidget = getComponent('ColWidget');
  return (
    <ColWidget
      key={component.name}
      {...component.props}
      styled={styledToString(component?.props?.styled)}
    >
      {loopRender(component.children, count)}
    </ColWidget>
  );
};

// 渲染组件
export const componentRender = (
  // 当前组件的数据
  component: ComponentType,
  // 递归的层级
  count: number,
  componentMap?: ComponentMapType,
  initialValues?: AnyObject,
  formValues?: AnyObject
  // 自定义的组件列表
) => {
  const JsonPanelComponent =
    Reflect.get(componentMap || {}, component.type) ||
    getComponent(component.type);
  return (
    <Fragment key={component.id + component.name}>
      <Form.Item
        key={component.id + component.name}
        className={count ? 'FormItemRender' : ''}
        initialValue={initialValues?.[component.name]}
        style={{ position: 'relative', marginLeft: `${count * 50}px` }}
        {...component}
      >
        <JsonPanelComponent
          slug={initialValues?.slug || initialValues?.id}
          componentprops={component}
          {...formatProps(initialValues || {})}
          {...component.props}
          styled={styledToString(component?.props?.styled)}
        />
      </Form.Item>
      {component.children &&
        isBoolean(formValues?.[component.name]) &&
        formValues?.[component.name] &&
        loopRender(
          component.children,
          count + 1,
          componentMap,
          initialValues,
          formValues
        )}
    </Fragment>
  );
};

// 循环渲染页面
export const loopRender = (
  // 需要渲染的组件列表
  components: ComponentType[],
  // 递归的层级
  count: number,
  // 自定义的组件列表
  componentMap?: ComponentMapType,
  initialValues?: AnyObject,
  formValues?: AnyObject
): React.ReactNode => {
  return components?.map((component: ComponentType) => {
    if (component.type === 'RowWidget') return rowRender(component, count);
    if (component.type === 'ColWidget') return colRender(component, count);
    return componentRender(
      component,
      count,
      componentMap,
      initialValues,
      formValues
    );
  });
};
