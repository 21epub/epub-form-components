import styled from 'styled-components';

export interface WrapperProps {
  styled?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  ${(props) => props.styled};
`;
