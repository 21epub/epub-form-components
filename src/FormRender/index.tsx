import React, { FC } from 'react';
import { Form } from 'antd';
import { getFormComponent } from '../FormComponents';
import { DataType, ComponentType } from './type';
import { Wrapper } from './styled';

export interface FormRenderProps {
  initialValues?: DataType;
  componentList: ComponentType[];
  onValuesChange: (changedValues: DataType, values: DataType) => void;
}

// 通用表单渲染
export const FormRender: FC<FormRenderProps> = (props) => {
  const { componentList = [], initialValues, onValuesChange } = props;
  const [form] = Form.useForm();

  // 初始化默认值，将props中的value值，赋值到initialValues中
  const getInitialValue = (component: ComponentType) => {
    return initialValues?.[component.name] ?? component.props?.value;
  };

  return (
    <Wrapper>
      <Form form={form} layout='vertical' onValuesChange={onValuesChange}>
        {componentList?.map((component: ComponentType) => {
          const Component = getFormComponent(component.type);
          return (
            <Form.Item
              key={component.id}
              name={component.name}
              label={component.label}
              initialValue={getInitialValue(component)}
            >
              <Component {...component.props} />
            </Form.Item>
          );
        })}
      </Form>
    </Wrapper>
  );
};
