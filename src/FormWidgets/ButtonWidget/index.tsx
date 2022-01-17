import React from 'react';
import { Button } from 'antd';
import type { ButtonProps } from 'antd/lib/button';
import { Wrapper } from './Styled';

export interface ButtonWidgetProps extends ButtonProps {
  buttonText?: string;
  styled?: string;
}

const ButtonWidget: React.FC<ButtonWidgetProps> = (props) => {
  const { buttonText = '按钮', styled, ...rest } = props;

  return (
    <Wrapper styled={styled}>
      <Button {...rest}>{buttonText}</Button>
    </Wrapper>
  );
};

export default ButtonWidget;
