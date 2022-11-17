import React from 'react';
import { DatePicker } from 'antd';
import type { RangePickerProps } from 'antd/lib/date-picker';
import type { RangeValue } from 'rc-picker/lib/interface';
import { Wrapper } from './Styled';
import 'moment/locale/zh-cn';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import moment from 'moment';
import type { MomentFormatSpecification, Moment } from 'moment';
moment.locale('zh-cn');

export type FormRangePickerProps = RangePickerProps & {
  styled?: string;
  onChange?: (formatString: [string, string]) => void;
};

/**
 * @name 日期范围选择框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 示例：styled：`{width:'100%'}`
 * @param picker 选择器类型
 * @link 其他参数详见 https://ant.design/components/date-picker-cn/
 */
const FormRangePicker: React.FC<FormRangePickerProps> = (props) => {
  const {
    value,
    picker,
    styled,
    onChange,
    format = 'YYYY-MM-DD HH:mm',
    ...rest
  } = props;

  const momentFormat = format as MomentFormatSpecification;

  const newValue: RangeValue<Moment> | undefined = value?.[0]
    ? [moment(value?.[0], momentFormat), moment(value?.[1], momentFormat)]
    : undefined;

  const onValueChange = (_values: Any, formatString: [string, string]) => {
    onChange?.(formatString);
  };

  return (
    <Wrapper styled={styled}>
      <DatePicker.RangePicker
        locale={locale}
        picker={picker}
        value={newValue}
        format={format}
        showTime={{ format: 'HH:mm' }}
        onChange={onValueChange}
        {...rest}
      />
    </Wrapper>
  );
};

export default FormRangePicker;
