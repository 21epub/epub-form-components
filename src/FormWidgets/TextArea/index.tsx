import React from 'react'
import { Input } from 'antd'
import { TextAreaProps } from 'antd/lib/input'

const TextAreaWidget: React.FC<TextAreaProps> = (props) => {
  const { value, placeholder, onChange } = props
  return (
    <Input.TextArea
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default TextAreaWidget
