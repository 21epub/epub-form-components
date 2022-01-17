import React from 'react';
import { Input } from 'antd';
import type { InputProps } from 'antd/lib/input';
import { Wrapper } from './Styled';

export interface FormInputProps extends InputProps {
  styled?: string;
}

const FormInput: React.FC<FormInputProps> = (props) => {
  const { styled, ...rest } = props;
  return (
    <Wrapper styled={styled}>
      <Input {...rest} />
    </Wrapper>
  );
};

export default FormInput;
