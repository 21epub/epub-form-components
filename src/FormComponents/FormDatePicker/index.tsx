import React from 'react';
import { DatePicker } from 'antd';
import type { DatePickerProps } from 'antd/lib/date-picker';
import { Wrapper } from './Styled';
import 'moment/locale/zh-cn';
import type { Moment } from 'moment';
import moment from 'moment';
import locale from 'antd/lib/date-picker/locale/zh_CN';
moment.locale('zh-cn');

export type FormDatePickerProps = DatePickerProps & {
  styled?: string;
  onChange?: (dateString: string) => void;
};

// 日期选择框
const FormDatePicker: React.FC<FormDatePickerProps> = (props) => {
  const { value, picker, styled, onChange, ...rest } = props;

  const onValueChange = (_momentValue: Moment | null, dateString: string) => {
    onChange && onChange(dateString);
  };

  return (
    <Wrapper styled={styled}>
      <DatePicker
        locale={locale}
        picker={picker}
        value={value ? moment(value, 'YYYY-MM-DD HH:mm') : null}
        showTime={{ format: 'HH:mm' }}
        format="YYYY-MM-DD HH:mm"
        onChange={onValueChange}
        {...rest}
      />
    </Wrapper>
  );
};

export default FormDatePicker;
