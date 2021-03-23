import React, { useEffect, useState } from 'react';
import { Radio, List } from 'antd';
import { RadioProps, RadioChangeEvent } from 'antd/lib/radio';
import { uniqueId } from 'lodash';
import { Wrapper } from './Styled';
import { OptionsConfig, Options } from '../type';

export interface FormRadioProps extends RadioProps {
  readOnly?: boolean;
  size?: 'large' | 'middle' | 'small';
  optionsConfig: OptionsConfig;
  onChange: (value: RadioChangeEvent) => void;
}

const FormRadio: React.FC<FormRadioProps> = (props) => {
  const { value, optionsConfig, readOnly, size, onChange } = props;
  const listSize = size === 'middle' ? 'default' : size;
  const [defaultValue, setDefaultValue] = useState(
    optionsConfig?.defaultValue ?? undefined
  );
  const [propsValue, setPropsValue] = useState(value ?? defaultValue);

  const onRadioChange = (e: RadioChangeEvent) => {
    setPropsValue(e.target.value);
    if (typeof onChange === 'function') {
      onChange(e.target.value);
    }
  };

  useEffect(() => {
    // 设置初始选中的值
    setDefaultValue(optionsConfig?.defaultValue);
    setPropsValue(optionsConfig?.defaultValue);
  }, [optionsConfig]);

  return (
    <Wrapper>
      <List bordered itemLayout='vertical' size={listSize}>
        <Radio.Group
          defaultValue={defaultValue}
          value={propsValue}
          disabled={readOnly}
          onChange={onRadioChange}
        >
          {optionsConfig?.options?.map((option: Options) => {
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
