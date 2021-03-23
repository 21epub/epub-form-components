import React from 'react';
import { InputNumber } from 'antd';
import { InputNumberProps } from 'antd/lib/input-number';
import { Wrapper } from './Styled';

export interface FormInputNumberProps extends InputNumberProps {
  readOnly?: false;
}

const FormInput: React.FC<FormInputNumberProps> = (props) => {
  const { value, placeholder, size, step, readOnly, onChange } = props;
  return (
    <Wrapper>
      <InputNumber
        value={value}
        placeholder={placeholder}
        size={size ?? 'middle'}
        step={step ?? 1}
        disabled={readOnly}
        parser={(value: string | undefined) =>
          Number(String(value).replace(/[^0-9]/gi, ''))
        }
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default FormInput;
