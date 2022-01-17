import styled from 'styled-components';

export interface WrapperProps {
  styled?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  .styledChild {
    height: 40px;
    margin: 10px 0;
  }
  ${(props) => props.styled};
`;
