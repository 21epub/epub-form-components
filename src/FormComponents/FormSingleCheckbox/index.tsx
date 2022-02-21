import React from 'react';
import { Checkbox } from 'antd';
import type { CheckboxProps, CheckboxChangeEvent } from 'antd/es/checkbox';
import { SpaceWrapper } from './Styled';

export interface FormSingleCheckboxProps
  extends Omit<CheckboxProps, 'onChange'> {
  prefixText?: string;
  suffixText?: string;
  styled?: string;
  onChange: (value: boolean) => void;
}

const FormSingleCheckbox: React.FC<FormSingleCheckboxProps> = (props) => {
  const { value, prefixText, suffixText, styled, onChange } = props;

  const onCheckedChange = (e: CheckboxChangeEvent) => {
    onChange && onChange(e.target.checked);
  };

  return (
    <SpaceWrapper styled={styled}>
      {prefixText}
      <Checkbox checked={!!value} onChange={onCheckedChange} />
      {suffixText}
    </SpaceWrapper>
  );
};

export default FormSingleCheckbox;
