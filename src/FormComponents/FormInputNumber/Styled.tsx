import styled from 'styled-components';

export interface WrapperProps {
  styled?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  .ant-input-number {
    width: 100% !important;
  }
  ${(props) => props.styled};
`;
