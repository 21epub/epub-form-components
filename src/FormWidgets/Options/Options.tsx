import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { SortableEvent } from 'sortablejs'
import ReactSortable from 'react-sortablejs'
import Option, { Options } from './Option'
import styles from './Options.module.less'
import produce from 'immer'

export interface OptionsConfig {
  type: 'Radio' | 'Checkbox'
  defaultValue: string[] | number[] | string
  options: Options[]
}

export interface OptionsConfigWidgetProps {
  value?: OptionsConfig
  optionsConfig: OptionsConfig
  onChange: (optionsConfig: OptionsConfig) => void
}

export const OptionsConfigWidget: React.FC<OptionsConfigWidgetProps> = (
  props
) => {
  const { value, onChange } = props
  const [optionsConfig, setOptionsConfig] = useState<OptionsConfig>(
    value ?? props.optionsConfig
  )
  const [visible, setVisible] = useState(true)

  const setChangeValue = (newOptions: Options[]) => {
    if (optionsConfig.type === 'Radio') {
      let defaultValue: string = ''
      newOptions.map((option: Options) => {
        if (option.checked) {
          defaultValue = option.value
        }
      })
      onChange({ ...optionsConfig, defaultValue, options: newOptions })
    } else if (optionsConfig.type === 'Checkbox') {
      const defaultValue: string[] = []
      newOptions.map((option: Options) => {
        if (option.checked) {
          defaultValue.push(option.value)
        }
      })
      onChange({ ...optionsConfig, defaultValue, options: newOptions })
    }
  }

  // 选项值改变时
  const onOptionChange = (newOption: Options) => {
    const newOptions = optionsConfig?.options.map(
      (option: Options, idx: number) => ({
        ...option,
        index: idx,
        value: idx === newOption.index ? newOption.value : option.value,
        label: idx === newOption.index ? newOption.label : option.label
      })
    )
    setChangeValue(newOptions)
  }

  // 选中项改变时
  const onCheckedChange = (index: number) => {
    const newOptions = optionsConfig?.options.map(
      (option: Options, idx: number) => ({
        ...option,
        index: idx,
        checked:
          optionsConfig.type === 'Radio'
            ? idx === index
              ? !option.checked
              : false
            : idx === index
            ? !option.checked
            : option.checked
      })
    )
    setChangeValue(newOptions)
  }

  // 点击添加按钮时
  const onClickAddBtn = () => {
    const newOptions = [
      ...optionsConfig.options,
      {
        label: `选项${optionsConfig.options.length + 1}`,
        value: `选项${optionsConfig.options.length + 1}`,
        checked: false,
        index: optionsConfig.options.length + 1
      }
    ]
    setChangeValue(newOptions)
  }

  // 点击删除按钮时
  const onClickRemoveBtn = (index: number) => {
    if (optionsConfig.options.length <= 1) return
    const draftOptions = produce(optionsConfig.options, (draft: Options[]) => {
      draft.splice(index, 1)
    })
    const newOptions = draftOptions.map((option: Options, idx: number) => ({
      ...option,
      index: idx
    }))
    setVisible(false)
    setTimeout(() => {
      setVisible(true)
    })
    setChangeValue(newOptions)
  }

  // 拖动排序时
  const onSortableChange = (event: SortableEvent) => {
    const { oldIndex = 0, newIndex = 0 } = event
    const draftOptions = produce(optionsConfig.options, (draft: Options[]) => {
      const [Item] = draft.splice(oldIndex, 1)
      draft.splice(newIndex, 0, Item)
    })
    const newOptions = draftOptions.map((option: Options, idx: number) => ({
      ...option,
      index: idx
    }))
    setOptionsConfig({ ...optionsConfig, options: newOptions })
    setVisible(false)
    setVisible(true)
    onChange({ ...optionsConfig, options: newOptions })
  }

  useEffect(() => {
    setOptionsConfig(value ?? props.optionsConfig)
  }, [props])

  useEffect(() => {
    setVisible(false)
    setTimeout(() => {
      setVisible(true)
    })
  }, [])

  return (
    (visible || null) && (
      <ReactSortable
        className={styles.canvasStyle}
        style={{ width: '100%', backgroundColor: '#fff' }}
        options={{
          group: {
            name: `options`
          },
          handle: '.dropMenu',
          sort: true,
          animation: 150
        }}
        onChange={(list, sortable, event: SortableEvent) => {
          onSortableChange(event)
        }}
      >
        {optionsConfig?.options?.map((option: Options, index: number) => {
          return (
            <Option
              key={index}
              option={option}
              index={index}
              type={optionsConfig.type}
              onClickRemoveBtn={(index: number) => onClickRemoveBtn(index)}
              onCheckedChange={(index: number) => onCheckedChange(index)}
              onOptionChange={(newOption: Options) => onOptionChange(newOption)}
            />
          )
        })}
        <Button
          type='text'
          style={{ color: '#00bcd4' }}
          onClick={onClickAddBtn}
        >
          <PlusOutlined /> 添加选项
        </Button>
      </ReactSortable>
    )
  )
}

export default OptionsConfigWidget
