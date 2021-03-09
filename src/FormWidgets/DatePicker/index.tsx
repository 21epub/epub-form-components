import React from 'react'
import { DatePicker } from 'antd'
import { DatePickerProps } from 'antd/lib/date-picker'
import 'moment/locale/zh-cn'
import moment, { Moment } from 'moment'
moment.locale('zh-cn')

type DatePickerWidgetProps = DatePickerProps & {
  onChange: (dateString: string) => void
}

const DatePickerWidget: React.FC<DatePickerWidgetProps> = (props) => {
  const { value, placeholder, onChange } = props

  const onValueChange = (moment: Moment | null, dateString: string) => {
    if (onChange) {
      onChange(dateString)
    }
  }

  return (
    <DatePicker
      allowClear
      value={value ? moment(value, 'YYYY-MM-DD HH:mm') : null}
      showTime={{ format: 'HH:mm' }}
      format='YYYY-MM-DD HH:mm'
      placeholder={placeholder}
      style={{ width: '100%' }}
      onChange={onValueChange}
    />
  )
}

export default DatePickerWidget
