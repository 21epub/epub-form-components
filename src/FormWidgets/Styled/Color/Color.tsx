import React, { useState } from 'react'
import { StyledValue } from '../Styled'
import { TwitterPicker, ColorResult } from 'react-color'
import styles from './Color.module.less'

export interface ReturnValue {
  [styled: string]: string
}

interface ColorProps {
  label: string
  name: string
  defaultValue: string
  styledValue: StyledValue
  onChange: (value: ReturnValue) => void
}

const Color: React.FC<ColorProps> = (props) => {
  const { label, name, defaultValue, styledValue, onChange } = props
  const [displayColorPicker, setDisplayColorPicker] = useState<boolean>(false)
  const [color, setColor] = useState<string>(
    styledValue?.[name] ?? defaultValue
  )

  // onChange触发更新
  const onColorChange = (color: string) => {
    const value: ReturnValue = {}
    value[name] = color
    onChange(value)
  }

  // 点击时控制颜色选择面板显示或隐藏
  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker)
  }

  // 关闭颜色选择面板
  const handleClose = () => {
    setDisplayColorPicker(false)
    onColorChange(color)
  }

  // 颜色选择面板数据改变时
  const handleChange = (color: ColorResult) => {
    setColor(color.hex)
    /**
     * 当用户输入16进制颜色值只有三位时，不触发更新，通过关闭按钮触发更新。
     * 用于避免用户只输入了三个值，就触发更新导致面板关闭，无法输入完整六位的16进制颜色
     * */
    !(
      color.hex[1] === color.hex[2] &&
      color.hex[3] === color.hex[4] &&
      color.hex[5] === color.hex[6]
    ) && onColorChange(color.hex)
  }

  return (
    <div className={styles.flexBox}>
      <span>{label}:</span>
      <div className={styles.swatch} onClick={handleClick}>
        <div className={styles.color} style={{ background: color }} />
      </div>
      {displayColorPicker && (
        <div className={styles.popover}>
          <div className={styles.cover} onClick={handleClose} />
          <TwitterPicker
            width='206px'
            color={color}
            onChangeComplete={handleChange}
          />
        </div>
      )}
    </div>
  )
}

export default Color
