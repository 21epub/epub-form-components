import React, { useEffect, useState } from 'react'
import { Select } from 'antd'
import { SelectProps } from 'antd/lib/select'
import styles from './FormSelect.module.less'
import { uniqueId } from 'lodash'

export interface Options {
  label: string
  value: string
  checked: boolean
  index: number
}

export interface OptionsConfig {
  type: string
  defaultValue: string
  options: Options[]
}

export interface SelectWidgetProps<T> extends SelectProps<T> {
  readOnly?: boolean
  optionsConfig: OptionsConfig
  onChange: (value: T) => void
}

const FormSelect: React.FC<SelectWidgetProps<string>> = (props) => {
  const { value, optionsConfig, placeholder, readOnly, onChange } = props
  const [defaultValue, setDefaultValue] = useState(
    optionsConfig?.defaultValue ?? undefined
  )
  const [propsValue, setPropsValue] = useState(value ? value[0] : defaultValue)

  const onSelectChange = (value: string) => {
    setPropsValue(value)
    if (typeof onChange === 'function') {
      onChange(String(value))
    }
  }

  useEffect(() => {
    // 设置初始选中的值
    setDefaultValue(optionsConfig?.defaultValue)
    setPropsValue(optionsConfig?.defaultValue)
  }, [optionsConfig])

  return (
    <Select
      className={styles.select}
      defaultValue={defaultValue}
      value={propsValue}
      placeholder={placeholder}
      disabled={readOnly}
      onChange={onSelectChange}
      style={{ width: '100%' }}
    >
      {optionsConfig?.options?.map((option: Options) => {
        return (
          <Select.Option key={uniqueId()} value={option.value}>
            {option.label}
          </Select.Option>
        )
      })}
    </Select>
  )
}

export default FormSelect
