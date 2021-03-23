import React from 'react';
import { Checkbox, Tooltip } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { QuestionCircleFilled } from '@ant-design/icons';
import { ValidateValue } from '../index';
import { FormInputNumber } from '../../../index';
import { isNumber } from 'lodash';
import { FlexBox } from './Styled';

export interface PrecisionProps {
  validateValue: ValidateValue;
  onChange: (value: { precision: number | undefined }) => void;
}

const Precision: React.FC<PrecisionProps> = (props) => {
  const { validateValue, onChange } = props;

  const onCheckedChange = (e: CheckboxChangeEvent) => {
    onChange({ precision: e.target.checked ? 1 : undefined });
  };

  const onNumberChange = (value: number | string | null | undefined) => {
    onChange({ precision: Number(value) });
  };

  return (
    <FlexBox>
      <Checkbox
        checked={isNumber(validateValue?.precision)}
        onChange={onCheckedChange}
      />
      <span>设置为</span>
      <FormInputNumber
        value={validateValue?.precision}
        min={0}
        onChange={onNumberChange}
      />
      <span>位小数</span>
      <Tooltip title='设置浮点数的位数'>
        <QuestionCircleFilled style={{ marginLeft: '5px' }} />
      </Tooltip>
    </FlexBox>
  );
};

export default Precision;
