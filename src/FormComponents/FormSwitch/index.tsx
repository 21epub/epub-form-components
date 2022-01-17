import React from 'react';
import { Switch } from 'antd';
import type { SwitchProps } from 'antd/lib/switch';
import { Wrapper } from './Styled';

export interface FormSwitchProps extends SwitchProps {
  value?: boolean;
  styled?: string;
}

const FormSwitch: React.FC<FormSwitchProps> = (props) => {
  const { value, checked, styled, ...rest } = props;
  return (
    <Wrapper styled={styled}>
      <Switch checked={value || checked} {...rest} />
    </Wrapper>
  );
};

export default FormSwitch;
