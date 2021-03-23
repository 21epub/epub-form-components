import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import { SelectProps } from 'antd/lib/select';
import { uniqueId } from 'lodash';
import { Wrapper } from './Styled';
import { OptionsConfig, Options } from '../type';

export interface FormSelectProps<T> extends SelectProps<T> {
  readOnly?: boolean;
  optionsConfig: OptionsConfig;
  onChange: (value: T) => void;
}

const FormSelect: React.FC<FormSelectProps<string>> = (props) => {
  const { value, optionsConfig, placeholder, size, readOnly, onChange } = props;
  const [defaultValue, setDefaultValue] = useState(
    optionsConfig?.defaultValue ? optionsConfig?.defaultValue : undefined
  );
  const [propsValue, setPropsValue] = useState(value ? value[0] : defaultValue);

  const onSelectChange = (changeValue: string) => {
    setPropsValue(changeValue);
    if (typeof onChange === 'function') {
      onChange(String(changeValue));
    }
  };

  useEffect(() => {
    // 设置初始选中的值
    setDefaultValue(optionsConfig?.defaultValue);
    setPropsValue(optionsConfig?.defaultValue);
  }, [optionsConfig]);

  return (
    <Wrapper>
      <Select
        defaultValue={(defaultValue as string | undefined) || undefined}
        value={(propsValue as string | undefined) || undefined}
        placeholder={placeholder}
        size={size}
        disabled={readOnly}
        onChange={onSelectChange}
      >
        {optionsConfig?.options?.map((option: Options) => {
          return (
            <Select.Option key={uniqueId()} value={option.value as string}>
              {option.label}
            </Select.Option>
          );
        })}
      </Select>
    </Wrapper>
  );
};

export default FormSelect;
