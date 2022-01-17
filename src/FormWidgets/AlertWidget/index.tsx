import React from 'react';
import { Alert } from 'antd';
import type { AlertProps } from 'antd/lib/alert';
import { Wrapper } from './Styled';

export interface AlertWidgetProps extends AlertProps {
  styled?: string;
}

const AlertWidget: React.FC<AlertWidgetProps> = (props) => {
  const { styled, ...rest } = props;
  return (
    <Wrapper styled={styled}>
      <Alert {...rest} />
    </Wrapper>
  );
};

export default AlertWidget;
