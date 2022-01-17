import React from 'react';
import { InputNumber } from 'antd';
import type { InputNumberProps } from 'antd/lib/input-number';
import { Wrapper } from './Styled';

export interface FormInputNumberProps extends InputNumberProps {
  styled?: string;
}

const FormInput: React.FC<FormInputNumberProps> = (props) => {
  const { styled, ...rest } = props;
  return (
    <Wrapper styled={styled}>
      <InputNumber
        parser={(value?: string) =>
          Number(String(value).replace(/[^0-9]/gi, ''))
        }
        {...rest}
      />
    </Wrapper>
  );
};

export default FormInput;
