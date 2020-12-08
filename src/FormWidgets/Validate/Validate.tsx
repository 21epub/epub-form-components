import React from 'react'
import { getValidate } from './utils'
import styles from './Validate.module.less'

export interface ValidateValue {
  readOnly: boolean
  isRequired: boolean
  min: number
  max: number
  precision: number
  [key: string]: boolean | number
}

interface ValidateList {
  type: string
}

interface ValidateProps {
  value: ValidateValue
  widgetType: string
  validateList: ValidateList[]
  onChange: (value: ValidateValue | {}) => void
}

const ValidateWidget: React.FC<ValidateProps> = (props) => {
  const { value, widgetType, validateList, onChange } = props

  const onValidateValueChange = (validateValue: ValidateValue) => {
    onChange(Object.assign({}, value, validateValue))
  }

  return (
    <div className={styles.validate}>
      {validateList.map((validate, index) => {
        const Validate = getValidate(validate.type)
        return (
          <Validate
            key={index}
            widgetType={widgetType}
            validateValue={value ?? undefined}
            onChange={onValidateValueChange}
          />
        )
      })}
    </div>
  )
}

export default ValidateWidget
