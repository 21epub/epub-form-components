import React from 'react'
import { Checkbox, Tooltip, InputNumber } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { QuestionCircleFilled } from '@ant-design/icons'
import { ValidateValue } from '../Validate'
import { isNumber } from 'lodash'
import styles from './Max.module.less'

interface MaxProps {
  widgetType: string
  validateValue: ValidateValue
  onChange: (value: { max: number | undefined }) => void
}

const Max: React.FC<MaxProps> = (props) => {
  const { widgetType, validateValue, onChange } = props

  const onCheckedChange = (e: CheckboxChangeEvent) => {
    onChange({ max: e.target.checked ? validateValue?.min ?? 0 : undefined })
  }

  const onNumberChange = (value: number | string | undefined) => {
    onChange({ max: Number(value) })
  }

  const setStartTip = (widgetType: string) => {
    switch (widgetType) {
      case 'Text':
        return '最大'
      case 'Checkbox':
        return '最多选'
      case 'InputNumber':
      case 'FloatNumber':
        return '最大值'
      default:
        return '最大为'
    }
  }
  const setEndTip = (widgetType: string) => {
    switch (widgetType) {
      case 'Text':
        return '个字符'
      case 'Checkbox':
        return '项'
      case 'InputNumber':
      case 'FloatNumber':
        return ''
      default:
        return ''
    }
  }

  return (
    <div className={styles.flexBox}>
      <Checkbox
        checked={isNumber(validateValue?.max)}
        onChange={onCheckedChange}
      />
      <span>{setStartTip(widgetType)}</span>
      <InputNumber
        className={styles.inputNumber}
        min={validateValue?.min}
        value={validateValue?.max}
        parser={(value) => String(value).replace(/[^0-9]/gi, '')}
        onChange={onNumberChange}
      />
      <span>{setEndTip(widgetType)}</span>
      <Tooltip title='设置最大'>
        <QuestionCircleFilled style={{ marginLeft: '5px' }} />
      </Tooltip>
    </div>
  )
}

export default Max
