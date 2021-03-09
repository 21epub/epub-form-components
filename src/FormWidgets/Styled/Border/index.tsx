import React, { useState } from 'react'
import { Select } from 'antd'
import { StyledValue } from '..'
import { TwitterPicker, ColorResult } from 'react-color'
import styles from './index.module.less'

export interface ReturnValue {
  [styled: string]: string
}

export interface Option {
  label: string
  value: string
}

interface ColorProps {
  label: string
  name: string
  defaultValue: {
    borderStyle: string
    borderColor: string
  }
  styledValue: StyledValue
  onChange: (value: ReturnValue) => void
}

const Color: React.FC<ColorProps> = (props) => {
  const { label, defaultValue, styledValue, onChange } = props
  const [displayColorPicker, setDisplayColorPicker] = useState<boolean>(false)
  let borderStyle: string = styledValue?.borderStyle ?? defaultValue.borderStyle
  let borderColor: string = styledValue?.borderColor ?? defaultValue.borderColor

  const options: Option[] = [
    { label: '实线边框', value: 'solid' },
    { label: '点线边框', value: 'dotted' },
    { label: '虚线边框', value: 'dashed' },
    { label: '双层边框', value: 'double' }
  ]

  // 颜色改变时触发更新
  const onBorderChange = (borderStyle: string, borderColor: string) => {
    onChange({ borderStyle: borderStyle, borderColor: borderColor })
  }

  // 边框样式改变时触发更新
  const onSelectChange = (value: string) => {
    borderStyle = value ?? borderStyle
    onBorderChange(borderStyle, borderColor)
  }

  // 点击时控制颜色选择面板显示或隐藏
  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker)
  }

  // 关闭颜色选择面板
  const handleClose = () => {
    setDisplayColorPicker(false)
    onBorderChange(borderStyle, borderColor)
  }

  // 颜色选择面板数据改变时
  const handleChange = (color: ColorResult) => {
    borderColor = color.hex
    /**
     * 当用户输入16进制颜色值只有三位时，不触发更新，通过关闭按钮触发更新。
     * 用于避免用户只输入了三个值，就触发更新导致面板关闭，无法输入完整六位的16进制颜色
     * */
    !(
      color.hex[1] === color.hex[2] &&
      color.hex[3] === color.hex[4] &&
      color.hex[5] === color.hex[6]
    ) && onBorderChange(borderStyle, color.hex)
  }

  return (
    <div className={styles.flexBox}>
      <span>{label}:</span>
      <Select
        className={styles.select}
        size='small'
        value={borderStyle}
        onChange={onSelectChange}
      >
        {options.map((option: Option) => {
          return (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          )
        })}
      </Select>
      <div className={styles.swatch} onClick={handleClick}>
        <div className={styles.color} style={{ background: borderColor }} />
      </div>
      {displayColorPicker && (
        <div className={styles.popover}>
          <div className={styles.cover} onClick={handleClose} />
          <TwitterPicker
            width='206px'
            color={borderColor}
            onChangeComplete={handleChange}
          />
        </div>
      )}
    </div>
  )
}

export default Color
