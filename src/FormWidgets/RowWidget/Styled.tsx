import styled from 'styled-components';
import { Row } from 'antd';

export interface RowWrapperProps {
  styled?: string;
}

export const RowWrapper = styled(Row)<RowWrapperProps>`
  ${(props) => props.styled};
`;
