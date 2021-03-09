import React from 'react'
import { Input } from 'antd'
import { InputProps } from 'antd/lib/input'

const InputWidget: React.FC<InputProps> = (props) => {
  const { value, placeholder, onChange } = props
  return (
    <Input
      type='text'
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default InputWidget
