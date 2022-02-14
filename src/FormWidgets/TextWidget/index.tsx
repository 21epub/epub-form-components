import React from 'react';
import { Typography } from 'antd';
import type { TextProps } from 'antd/lib/typography/Text';
import { Wrapper } from './Styled';

export interface TextWidgetProps extends TextProps {
  text: string;
  styled?: string;
}

// 文本展示组件
const TextWidget: React.FC<TextWidgetProps> = (props) => {
  const { text } = props;
  const { Text } = Typography;
  const { styled, ...rest } = props;
  return (
    <Wrapper styled={styled}>
      <Text {...rest}>{text}</Text>
    </Wrapper>
  );
};

export default TextWidget;
