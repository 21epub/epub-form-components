import React from 'react'
import { Checkbox, Tooltip, InputNumber } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { QuestionCircleFilled } from '@ant-design/icons'
import { ValidateValue } from '../Validate'
import { isNumber } from 'lodash'
import styles from './Min.module.less'

interface MinProps {
  widgetType: string
  validateValue: ValidateValue
  onChange: (value: { min: number | undefined }) => void
}

const Min: React.FC<MinProps> = (props) => {
  const { widgetType, validateValue, onChange } = props

  const onCheckedChange = (e: CheckboxChangeEvent) => {
    onChange({ min: e.target.checked ? 0 : undefined })
  }

  const onNumberChange = (value: number | string | undefined) => {
    onChange({ min: Number(String(value).replace(/[^0-9]/gi, '')) })
  }

  const setStartTip = (widgetType: string) => {
    switch (widgetType) {
      case 'Text':
        return '最小'
      case 'Checkbox':
        return '最少选'
      case 'InputNumber':
      case 'FloatNumber':
        return '最小值'
      default:
        return '最小为'
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
        checked={isNumber(validateValue?.min)}
        onChange={onCheckedChange}
      />
      <span>{setStartTip(widgetType)}</span>
      <InputNumber
        className={styles.inputNumber}
        min={validateValue?.min}
        value={validateValue?.min}
        parser={(value) => String(value).replace(/[^0-9]/gi, '')}
        onChange={onNumberChange}
      />
      <span>{setEndTip(widgetType)}</span>
      <Tooltip title='设置最小'>
        <QuestionCircleFilled style={{ marginLeft: '5px' }} />
      </Tooltip>
    </div>
  )
}

export default Min
