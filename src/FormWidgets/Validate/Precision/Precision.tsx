import React from 'react'
import { Checkbox, Tooltip, InputNumber } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { QuestionCircleFilled } from '@ant-design/icons'
import { ValidateValue } from '../Validate'
import { isNumber } from 'lodash'
import styles from './Precision.module.less'

interface PrecisionProps {
  validateValue: ValidateValue
  onChange: (value: { precision: number | undefined }) => void
}

const Precision: React.FC<PrecisionProps> = (props) => {
  const { validateValue, onChange } = props

  const onCheckedChange = (e: CheckboxChangeEvent) => {
    onChange({ precision: e.target.checked ? 1 : undefined })
  }

  const onNumberChange = (value: number | string | null | undefined) => {
    onChange({ precision: Number(value) })
  }

  return (
    <div className={styles.flexBox}>
      <Checkbox
        checked={isNumber(validateValue?.precision)}
        onChange={onCheckedChange}
      />
      <span>设置为</span>
      <InputNumber
        className={styles.inputNumber}
        value={validateValue?.precision}
        min={0}
        parser={(value) => String(value).replace(/[^0-9]/gi, '')}
        onChange={onNumberChange}
      />
      <span>位小数</span>
      <Tooltip title='设置浮点数的位数'>
        <QuestionCircleFilled style={{ marginLeft: '5px' }} />
      </Tooltip>
    </div>
  )
}

export default Precision
