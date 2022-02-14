import React from 'react';
import { Typography } from 'antd';
import type { TitleProps } from 'antd/lib/typography/Title';
import { Wrapper } from './Styled';

export interface TitleWidgetProps extends TitleProps {
  title: string;
  styled?: string;
}

// 文本展示组件
const TextWidget: React.FC<TitleWidgetProps> = (props) => {
  const { title } = props;
  const { Title } = Typography;
  const { styled, ...rest } = props;
  return (
    <Wrapper styled={styled}>
      <Title {...rest}>{title}</Title>
    </Wrapper>
  );
};

export default TextWidget;
