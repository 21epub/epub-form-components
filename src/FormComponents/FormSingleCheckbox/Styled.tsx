import styled from 'styled-components';
import { Space } from 'antd';

export interface SpaceWrapperProps {
  styled?: string;
}

export const SpaceWrapper = styled(Space)<SpaceWrapperProps>`
  ${(props) => props.styled};
`;
