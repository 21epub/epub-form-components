import React from 'react';
import { getValidate } from './utils';
import { Wrapper } from './Styled';

export interface ValidateValue {
  readOnly: boolean;
  isRequired: boolean;
  min: number;
  max: number;
  precision: number;
  [key: string]: boolean | number;
}

interface ValidateList {
  type: string;
}

export interface ValidateWidgetProps {
  value: ValidateValue;
  widgetType: string;
  validateList: ValidateList[];
  onChange?: (value: ValidateValue | {}) => void;
}

const ValidateWidget: React.FC<ValidateWidgetProps> = (props) => {
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
            validateValue={value ?? undefined}
            onChange={onValidateValueChange}
          />
        );
      })}
    </Wrapper>
  );
};

export default ValidateWidget;
