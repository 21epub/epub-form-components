import React, { useEffect } from 'react'
import { Select } from 'antd'
import { SelectProps, OptionProps } from 'antd/lib/select'
import styles from './Select.module.less'

export interface Options {
  label: string
  value: string | number
  checked: boolean
  index: number
}
export interface OptionsConfig {
  type: 'Radio' | 'Checkbox'
  defaultValue: string[] | number[]
  options: Options[]
}
export interface SelectWidgetProps<T> extends SelectProps<T> {
  optionsConfig: OptionsConfig
}
const SelectWidget: React.FC<SelectWidgetProps<string> | OptionProps> = (
  props
) => {
  const { value, optionsConfig = {}, placeholder, onChange } = props
  let propsValue = value || undefined
  let defaultValue = optionsConfig?.defaultValue ?? undefined

  useEffect(() => {
    // 设置初始选中的值
    const checkedOption = optionsConfig?.options.find(
      (option: Options) => option.checked
    )
    defaultValue = checkedOption.value
    propsValue = checkedOption.value
  }, [optionsConfig])

  return (
    <Select
      className={styles.select}
      defaultValue={defaultValue}
      value={propsValue}
      placeholder={placeholder}
      onChange={onChange}
      style={{ width: '100%' }}
    >
      {optionsConfig?.options?.map((option: Options, index: number) => {
        return (
          <Select.Option key={index} value={option.value}>
            {option.label}
          </Select.Option>
        )
      })}
    </Select>
  )
}

export default SelectWidget
