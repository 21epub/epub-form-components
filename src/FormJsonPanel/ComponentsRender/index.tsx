import React, { Fragment, useState } from 'react';
import { Form } from 'antd';
import type { FormInstance } from 'antd';
import { isBoolean } from 'lodash';
import type { ComponentMapType, ComponentType } from '../type';
import { getComponent } from '../components';
import { Wrapper } from './Styled';
import { formatProps } from './utils';

interface ComponentsRenderProps {
  initialValues?: AnyObject;
  componentList: ComponentType[];
  componentMap?: ComponentMapType;
  onValuesChange: (
    changedValues: AnyObject,
    values: AnyObject,
    form: FormInstance<any>
  ) => void;
}

// 渲染组件
export const ComponentsRender: React.FC<ComponentsRenderProps> = (props) => {
  const {
    initialValues = {},
    componentList,
    componentMap = {},
    onValuesChange
  } = props;
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<AnyObject>(initialValues);

  const onFormValuesChange = (changedValues: AnyObject, values: AnyObject) => {
    // 获取当前改变字段的name值
    const [name] = Object.keys(changedValues);
    // 判断改变的字段，有没有包含children。
    const isHaveChildren = !!componentList.find((item) => item.name === name)
      ?.children;
    // 若有children，则表示此字段的值可能会用于判断渲染children
    if (isHaveChildren) setFormValues(values);
    onValuesChange(changedValues, values, form);
  };

  // 渲染行
  const rowRender = (component: ComponentType, count: number) => {
    if (!component?.children) return;
    const RowWidget = getComponent('RowWidget');
    return (
      <RowWidget key={component.name} {...component.props}>
        {loopRender(component.children, count)}
      </RowWidget>
    );
  };

  // 渲染列
  const colRender = (component: ComponentType, count: number) => {
    if (!component?.children) return;
    const ColWidget = getComponent('ColWidget');
    return (
      <ColWidget key={component.name} {...component.props}>
        {loopRender(component.children, count)}
      </ColWidget>
    );
  };

  // 渲染组件
  const componentRender = (component: ComponentType, count: number) => {
    const JsonPanelComponent =
      Reflect.get(componentMap, component.type) || getComponent(component.type);
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
            {...formatProps(initialValues)}
            {...component.props}
          />
        </Form.Item>
        {component.children &&
          isBoolean(formValues?.[component.name]) &&
          formValues?.[component.name] &&
          loopRender(component.children, count + 1)}
      </Fragment>
    );
  };

  // 循环渲染页面
  const loopRender = (
    // 需要渲染的组件列表
    components: ComponentType[],
    // 递归的层级
    count: number
  ): React.ReactNode => {
    return components?.map((component: ComponentType) => {
      if (component.type === 'RowWidget') return rowRender(component, count);
      if (component.type === 'ColWidget') return colRender(component, count);
      return componentRender(component, count);
    });
  };

  return (
    <Wrapper>
      <Form form={form} layout='vertical' onValuesChange={onFormValuesChange}>
        {loopRender(componentList, 0)}
      </Form>
    </Wrapper>
  );
};
