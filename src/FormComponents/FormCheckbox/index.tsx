import React, { useEffect, useState } from 'react';
import { Checkbox, List } from 'antd';
import { CheckboxGroupProps } from 'antd/lib/checkbox';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { uniqueId } from 'lodash';
import { Wrapper } from './Styled';
import { OptionsConfig, Options } from '../type';

export interface FormCheckboxProps extends CheckboxGroupProps {
  readOnly?: boolean;
  size?: 'large' | 'middle' | 'small';
  optionsConfig: OptionsConfig;
  onChange?: (value: CheckboxValueType[]) => void;
}

export const FormCheckbox: React.FC<FormCheckboxProps> = (props) => {
  const { value, optionsConfig, readOnly, size, onChange } = props;
  const listSize = size === 'middle' ? 'default' : size;
  const [defaultValue, setDefaultValue] = useState<CheckboxValueType[]>(
    (optionsConfig?.defaultValue as CheckboxValueType[]) ?? undefined
  );
  const [propsValue, setPropsValue] = useState(value ?? defaultValue);

  const onRadioChange = (RadioChangeValue: CheckboxValueType[]) => {
    setPropsValue(RadioChangeValue);
    if (typeof onChange === 'function') {
      onChange(RadioChangeValue);
    }
  };

  useEffect(() => {
    setDefaultValue(optionsConfig?.defaultValue as CheckboxValueType[]);
    setPropsValue(optionsConfig?.defaultValue as CheckboxValueType[]);
  }, [optionsConfig]);

  return (
    <Wrapper>
      <List bordered itemLayout='vertical' size={listSize}>
        <Checkbox.Group
          defaultValue={defaultValue}
          value={propsValue}
          disabled={readOnly}
          onChange={onRadioChange}
        >
          {optionsConfig?.options?.map((option: Options) => {
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
