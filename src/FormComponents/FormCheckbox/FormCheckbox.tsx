import React, { useEffect, useState } from 'react'
import { Checkbox, List } from 'antd'
import { CheckboxGroupProps } from 'antd/lib/checkbox'
import { CheckboxValueType } from 'antd/lib/checkbox/Group'
import styles from './FormCheckbox.module.less'
import { uniqueId } from 'lodash'
console.log(styles)
export interface Options {
  label: string
  value: CheckboxValueType
  checked: boolean
  index: number
}

export interface OptionsConfig {
  type: string
  defaultValue: CheckboxValueType[]
  options: Options[]
}

export interface CheckboxWidgetProps extends CheckboxGroupProps {
  readOnly?: boolean
  size: 'large' | 'middle' | 'small'
  optionsConfig: OptionsConfig
  onChange: (value: CheckboxValueType[]) => void
}

const FormCheckbox: React.FC<CheckboxWidgetProps> = (props) => {
  const { value, optionsConfig, readOnly, size, onChange } = props
  const listSize = size === 'middle' ? 'default' : size
  const [defaultValue, setDefaultValue] = useState<CheckboxValueType[]>(
    optionsConfig?.defaultValue ?? undefined
  )
  const [propsValue, setPropsValue] = useState(value ?? defaultValue)

  const onRadioChange = (value: CheckboxValueType[]) => {
    setPropsValue(value)
    if (typeof onChange === 'function') {
      onChange(value)
    }
  }

  useEffect(() => {
    setDefaultValue(optionsConfig?.defaultValue)
    setPropsValue(optionsConfig?.defaultValue)
  }, [optionsConfig])

  return (
    <List bordered itemLayout='vertical' size={listSize}>
      <Checkbox.Group
        className={styles.CheckboxGroup}
        defaultValue={defaultValue}
        value={propsValue}
        disabled={readOnly}
        onChange={onRadioChange}
        // style={{ width: '100%' }}
      >
        {optionsConfig?.options?.map((option: Options) => {
          return (
            <List.Item key={uniqueId()}>
              <Checkbox value={option.value}>{option.label}</Checkbox>
            </List.Item>
          )
        })}
      </Checkbox.Group>
    </List>
  )
}

export default FormCheckbox
