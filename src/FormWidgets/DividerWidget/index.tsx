import React from 'react';
import { Divider } from 'antd';
import type { DividerProps } from 'antd/lib/Divider';
import { Wrapper } from './Styled';

export interface DividerWidgetProps extends DividerProps {
  text: string;
  styled?: string;
}

// 文本展示组件
const DividerWidget: React.FC<DividerWidgetProps> = (props) => {
  const { text } = props;
  const { styled, ...rest } = props;
  return (
    <Wrapper styled={styled}>
      <Divider {...rest}>{text}</Divider>
    </Wrapper>
  );
};

export default DividerWidget;
