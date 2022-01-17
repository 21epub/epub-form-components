import styled from 'styled-components';

export interface WrapperProps {
  styled?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  .ant-picker {
    width: 330px;
  }
  ${(props) => props.styled};
`;
