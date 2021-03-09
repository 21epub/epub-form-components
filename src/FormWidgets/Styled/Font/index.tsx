import React from 'react'
import { Select, Button } from 'antd'
import { StyledValue } from '..'
import styles from './index.module.less'

interface FontSizeProps {
  label: string
  defaultValue: {
    fontSize: string
    fontWeight: string
  }
  styledValue: StyledValue
  onChange: (value: { fontSize: string; fontWeight: string }) => void
}

const FontSize: React.FC<FontSizeProps> = (props) => {
  const { label, defaultValue, styledValue, onChange } = props
  const children = []
  const fontSize: string = styledValue?.fontSize ?? defaultValue.fontSize
  let fontWeight: string = styledValue?.fontWeight ?? defaultValue.fontWeight

  // 字号变化时触发
  const onSelectChange = (value: string) => {
    onChange({ fontSize: value ?? fontSize, fontWeight: fontWeight })
  }
  // 字体加粗时触发
  const onWeigthChange = () => {
    if (fontWeight === 'normal') {
      fontWeight = 'bold'
    } else {
      fontWeight = 'normal'
    }
    onChange({ fontSize: fontSize, fontWeight: fontWeight })
  }

  // 循环添加下拉选项
  for (let i = 12; i < 36; i++) {
    children.push(
      <Select.Option key={i} value={i + 'px'}>
        {i}px
      </Select.Option>
    )
  }

  return (
    <div className={styles.flexBox}>
      <span>{label}:</span>
      <Select
        className={styles.select}
        size='small'
        value={fontSize}
        onChange={onSelectChange}
      >
        {children}
      </Select>
      <Button
        className={styles.button}
        style={{
          backgroundColor: fontWeight === 'bold' ? 'lightgray' : '#fff'
        }}
        type='text'
        size='small'
        onClick={onWeigthChange}
      >
        {fontWeight === 'bold' ? <b>B</b> : 'B'}
      </Button>
    </div>
  )
}

export default FontSize
