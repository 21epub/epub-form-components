import React from 'react';
import { getStyled } from './utils';
import { Wrapper } from './Styled';

export interface ReturnValue {
  [styled: string]: string;
}

export interface StyledList {
  label: string;
  type: string;
  name: string;
  defaultValue?: ReturnValue | string;
}

export interface StyledValue {
  fontSize?: string;
  fontWeight?: string;
  backgroundColor?: string;
  borderStyle?: string;
  color?: string;
  [key: string]: string | undefined;
}

export interface StyledWidgetProps {
  value: StyledValue;
  styledList: StyledList[];
  onChange?: (value: StyledValue | {}) => void;
}

const StyledWidget: React.FC<StyledWidgetProps> = (props) => {
  const { value, styledList, onChange } = props;

  const onStyledValueChange = (styledValue: StyledValue) => {
    onChange && onChange(Object.assign({}, value, styledValue));
  };

  return (
    <Wrapper>
      {styledList.map((styled, index) => {
        const Styled = getStyled(styled.type);
        return (
          <Styled
            className='styledChild'
            key={index}
            label={styled.label}
            name={styled.name}
            defaultValue={styled.defaultValue}
            styledValue={value}
            onChange={onStyledValueChange}
          />
        );
      })}
    </Wrapper>
  );
};

export default StyledWidget;
