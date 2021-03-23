import React from 'react';
import { DatePicker } from 'antd';
import { DatePickerProps } from 'antd/lib/date-picker';
import { Wrapper } from './Styled';
import 'moment/locale/zh-cn';
import moment, { Moment } from 'moment';
moment.locale('zh-cn');

export type FormDatePickerProps = DatePickerProps & {
  onChange: (dateString: string) => void;
};

// 日期选择框
const FormDatePicker: React.FC<FormDatePickerProps> = (props) => {
  const { value, size, picker, placeholder, onChange } = props;

  const onValueChange = (momentValue: Moment | null, dateString: string) => {
    if (onChange) {
      onChange(dateString);
    }
  };

  return (
    <Wrapper>
      <DatePicker
        allowClear
        picker={picker}
        size={size ?? 'middle'}
        value={value ? moment(value, 'YYYY-MM-DD HH:mm') : null}
        showTime={{ format: 'HH:mm' }}
        format='YYYY-MM-DD HH:mm'
        placeholder={placeholder}
        style={{ width: '100%' }}
        onChange={onValueChange}
      />
    </Wrapper>
  );
};

export default FormDatePicker;
