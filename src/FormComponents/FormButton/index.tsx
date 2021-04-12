import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import { Wrapper } from './Styled';

export interface FormButtonProps extends ButtonProps {
  buttonText: string;
}

const FormButton: React.FC<FormButtonProps> = (props) => {
  const { buttonText, ...rest } = props;

  return (
    <Wrapper>
      <Button {...rest}>{buttonText}</Button>
    </Wrapper>
  );
};

export default FormButton;
