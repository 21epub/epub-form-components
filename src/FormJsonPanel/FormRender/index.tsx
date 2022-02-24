import React, { useState } from 'react';
import { Form } from 'antd';
import type { FormInstance, FormProps } from 'antd';
import type {
  ComponentMapType,
  ComponentType,
  ComponentStructureType,
} from '../type';
import { separateToIntegrate } from './utils';
import { Wrapper } from './Styled';
import { loopRender } from './render';

interface FormRenderProps {
  initialValues?: AnyObject;
  // 表单结构,布局
  componentStructure?: ComponentStructureType[];
  // 表单组件列表
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
export const FormRender: React.FC<FormRenderProps> = (props) => {
  const {
    initialValues = {},
    componentStructure,
    componentList,
    componentMap = {},
    formProps,
    onValuesChange,
  } = props;
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<AnyObject>(initialValues);
  const newComponentList = separateToIntegrate(
    componentList,
    componentStructure
  );

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
          componentList: newComponentList,
          count: 0,
          componentMap,
          initialValues,
          formValues,
        })}
      </Form>
    </Wrapper>
  );
};
