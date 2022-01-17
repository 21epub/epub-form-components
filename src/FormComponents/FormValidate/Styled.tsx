import styled from 'styled-components';

export interface WrapperProps {
  styled?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  label {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 30px;
  }
  ${(props) => props.styled};
`;
