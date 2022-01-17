import React from 'react';
import type { RowProps } from 'antd';
import { RowWrapper } from './Styled';

export interface RowWidgetProps extends RowProps {
  styled?: string;
}

const RowWidget: React.FC<RowWidgetProps> = (props) => {
  const { children, ...rest } = props;
  return <RowWrapper {...rest}>{children}</RowWrapper>;
};

export default RowWidget;
