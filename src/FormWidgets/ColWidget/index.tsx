import React from 'react';
import type { ColProps } from 'antd';
import { ColWrapper } from './Styled';

export interface ColWidgetProps extends ColProps {
  styled?: string;
}

const ColWidget: React.FC<ColWidgetProps> = (props) => {
  const { children, ...rest } = props;
  return <ColWrapper {...rest}>{children}</ColWrapper>;
};

export default ColWidget;
