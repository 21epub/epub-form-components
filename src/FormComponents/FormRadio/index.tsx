import React, { useState } from 'react';
import { Radio, List } from 'antd';
import type { RadioProps, RadioChangeEvent } from 'antd/lib/radio';
import { uniqueId } from 'lodash';
import { Wrapper } from './Styled';
import type { OptionsConfigType, OptionType } from '../../type';

export interface FormRadioProps extends Omit<RadioProps, 'onChange'> {
  optionsConfig: OptionsConfigType<'Radio'>;
  size?: 'large' | 'middle' | 'small';
  styled?: string;
  onChange?: (value: string) => void;
}

const FormRadio: React.FC<FormRadioProps> = (props) => {
  const { value, optionsConfig, size, styled, onChange, ...rest } = props;
  const listSize = size === 'middle' ? 'default' : size;
  const [propsValue, setPropsValue] = useState(value);

  const onRadioChange = (e: RadioChangeEvent) => {
    setPropsValue(e.target.value);
    onChange && onChange(e.target.value);
  };

  return (
    <Wrapper styled={styled}>
      <List bordered itemLayout="vertical" size={listSize}>
        <Radio.Group value={propsValue} onChange={onRadioChange} {...rest}>
          {optionsConfig?.options?.map((option: OptionType) => {
            return (
              <List.Item key={uniqueId()}>
                <Radio value={option.value}>{option.label}</Radio>
              </List.Item>
            );
          })}
        </Radio.Group>
      </List>
    </Wrapper>
  );
};

export default FormRadio;
