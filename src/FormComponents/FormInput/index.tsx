import React from 'react';
import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';
import { Wrapper } from './Styled';

export interface FormInputProps extends InputProps {
  readOnly?: boolean;
}

const FormInput: React.FC<FormInputProps> = (props) => {
  const { value, placeholder, size, readOnly, onChange } = props;
  return (
    <Wrapper>
      <Input
        type='text'
        value={value}
        placeholder={placeholder}
        size={size ?? 'middle'}
        disabled={readOnly}
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default FormInput;
