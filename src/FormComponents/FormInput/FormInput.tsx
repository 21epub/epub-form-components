import React from 'react'
import { Input } from 'antd'
import { InputProps } from 'antd/lib/input'

interface FormInputProps extends InputProps {
  readOnly?: false
}

const FormInput: React.FC<FormInputProps> = (props) => {
  const { value, placeholder, size, readOnly, onChange } = props
  return (
    <Input
      type='text'
      value={value}
      placeholder={placeholder}
      size={size ?? 'middle'}
      disabled={readOnly}
      onChange={onChange}
    />
  )
}

export default FormInput
