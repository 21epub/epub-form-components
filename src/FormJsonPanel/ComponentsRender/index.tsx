import React, { useState } from 'react';
import { Form } from 'antd';
import type { FormInstance, FormProps } from 'antd';
import type { ComponentMapType, ComponentType } from '../type';
import { Wrapper } from './Styled';
import { loopRender } from './render';

interface ComponentsRenderProps {
  initialValues?: AnyObject;
  componentList: ComponentType[];
  componentMap?: ComponentMapType;
  formProps?: FormProps;
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
    formProps,
    onValuesChange,
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

  return (
    <Wrapper>
      <Form
        form={form}
        layout="vertical"
        onValuesChange={onFormValuesChange}
        {...formProps}
      >
        {loopRender({
          componentList,
          count: 0,
          componentMap,
          initialValues,
          formValues,
        })}
      </Form>
    </Wrapper>
  );
};
