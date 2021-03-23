import styled from 'styled-components';

export const FlexBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
  & > span {
    margin-right: 10px;
  }
`;

export const Swatch = styled.div`
  display: inline-block;
  width: 90px;
  height: 24px;
  padding: 2px;
  background: #fff;
  border-radius: 1px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  .swatch-color {
    width: 86px;
    height: 20px;
    border-radius: 2px;
  }
`;

export const Popover = styled.div`
  position: absolute;
  top: 36px;
  left: 60px;
  z-index: 2;
  .popover-cover {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;
