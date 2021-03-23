import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import { Wrapper } from './Styled';

export interface FormButtonProps extends ButtonProps {
  buttonText: string;
  type?: ButtonProps['type'];
}

const FormButton: React.FC<FormButtonProps> = (props) => {
  const { type, size, buttonText, style, onClick } = props;

  return (
    <Wrapper>
      <Button
        style={style}
        type={type ?? 'primary'}
        size={size ?? 'middle'}
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </Wrapper>
  );
};

export default FormButton;
