import React from 'react';
import { Input } from 'antd';
import type { TextAreaProps } from 'antd/lib/input';
import { Wrapper } from './Styled';

export interface FormTextAreaProps extends TextAreaProps {
  styled?: string;
}

const FormTextArea: React.FC<FormTextAreaProps> = (props) => {
  const { styled, ...rest } = props;
  return (
    <Wrapper styled={styled}>
      <Input.TextArea {...rest} />
    </Wrapper>
  );
};

export default FormTextArea;
