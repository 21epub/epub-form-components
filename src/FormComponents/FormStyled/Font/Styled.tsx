import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
  & > span {
    margin-right: 10px;
  }

  .flexbox-select {
    width: 170px;
    margin-right: 10px;
  }

  .flexbox-button {
    background-color: gray;
  }
`;
