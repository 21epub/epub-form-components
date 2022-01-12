import React from 'react';
import { getValidate } from './utils';
import { Wrapper } from './Styled';
import type { ValidateValue } from './type';

interface ValidateList {
  type: string;
}

export interface FormValidateProps {
  value: ValidateValue;
  widgetType: string;
  validateList: ValidateList[];
  onChange?: (value: ValidateValue) => void;
}

const FormValidate: React.FC<FormValidateProps> = (props) => {
  const { value, widgetType, validateList, onChange } = props;

  const onValidateValueChange = (validateValue: ValidateValue) => {
    onChange && onChange(Object.assign({}, value, validateValue));
  };

  return (
    <Wrapper>
      {validateList.map((validate, index) => {
        const Validate = getValidate(validate.type);
        return (
          <Validate
            key={index}
            widgetType={widgetType}
            validateValue={value || undefined}
            onChange={onValidateValueChange}
          />
        );
      })}
    </Wrapper>
  );
};

export default FormValidate;
