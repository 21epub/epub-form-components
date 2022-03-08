import React from 'react';
import { Input } from 'antd';
import type { TextAreaProps } from 'antd/lib/input';
import { Wrapper } from './Styled';

export interface FormTextAreaProps extends TextAreaProps {
  styled?: string;
}

/**
 * @name 多行文本域
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @link 其他参数详见 https://ant.design/components/input-cn/#Input.TextArea
 */
const FormTextArea: React.FC<FormTextAreaProps> = (props) => {
  const { styled, ...rest } = props;
  return (
    <Wrapper styled={styled}>
      <Input.TextArea {...rest} />
    </Wrapper>
  );
};

export default FormTextArea;
