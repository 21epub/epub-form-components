import React from 'react';
import { Checkbox, Tooltip } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { QuestionCircleFilled } from '@ant-design/icons';
import type { ValidateValue } from '../type';
import { FlexBox } from './Styled';

export interface IsRequiredProps {
  validateValue: ValidateValue;
  onChange: (value: { isRequired: boolean }) => void;
}

const IsRequired: React.FC<IsRequiredProps> = (props) => {
  const { validateValue, onChange } = props;

  const onCheckedChange = (e: CheckboxChangeEvent) => {
    onChange({ isRequired: e.target.checked });
  };

  return (
    <FlexBox>
      <Checkbox
        checked={!!validateValue?.isRequired}
        onChange={onCheckedChange}
      />
      <span>必填</span>
      <Tooltip title='设为必填后，用户必须填写该字段才能提交'>
        <QuestionCircleFilled style={{ marginLeft: '5px' }} />
      </Tooltip>
    </FlexBox>
  );
};

export default IsRequired;
