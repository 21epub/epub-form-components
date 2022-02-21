import React, { useState } from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd/lib/select';
import { uniqueId } from 'lodash';
import { Wrapper } from './Styled';
import type { OptionsConfigType, OptionType } from '../../type';

export interface FormSelectProps extends SelectProps<string> {
  optionsConfig: OptionsConfigType<'Radio'>;
  styled?: string;
  onChange?: (value: string) => void;
}

const FormSelect: React.FC<FormSelectProps> = (props) => {
  const { value, optionsConfig, styled, onChange, ...rest } = props;
  const [propsValue, setPropsValue] = useState<string | undefined>(value);

  const onSelectChange = (changeValue: string) => {
    setPropsValue(changeValue);
    onChange && onChange(String(changeValue));
  };

  return (
    <Wrapper styled={styled}>
      <Select value={propsValue} onChange={onSelectChange} {...rest}>
        {optionsConfig?.options?.map((option: OptionType) => {
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
