import React, { useState } from 'react';
import { Checkbox, List } from 'antd';
import type { CheckboxGroupProps } from 'antd/lib/checkbox';
import type { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { uniqueId } from 'lodash';
import { Wrapper } from './Styled';
import type { OptionsConfigType, OptionType } from '../../type';

export interface FormCheckboxProps extends CheckboxGroupProps {
  size?: 'large' | 'middle' | 'small';
  optionsConfig: OptionsConfigType<'Checkbox'>;
  styled?: string;
}

export const FormCheckbox: React.FC<FormCheckboxProps> = (props) => {
  const { value, optionsConfig, size, styled, onChange, ...rest } = props;
  const listSize = size === 'middle' ? 'default' : size;
  const [propsValue, setPropsValue] = useState(value);

  const onRadioChange = (radioChangeValue: CheckboxValueType[]) => {
    setPropsValue(radioChangeValue);
    onChange && onChange(radioChangeValue);
  };

  return (
    <Wrapper styled={styled}>
      <List bordered itemLayout="vertical" size={listSize}>
        <Checkbox.Group value={propsValue} onChange={onRadioChange} {...rest}>
          {optionsConfig?.options?.map((option: OptionType) => {
            return (
              <List.Item key={uniqueId()}>
                <Checkbox value={option.value}>{option.label}</Checkbox>
              </List.Item>
            );
          })}
        </Checkbox.Group>
      </List>
    </Wrapper>
  );
};

export default FormCheckbox;
