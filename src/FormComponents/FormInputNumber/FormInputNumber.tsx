import React from 'react'
import { InputNumber } from 'antd'
import { InputNumberProps } from 'antd/lib/input-number'

interface FormInputNumberProps extends InputNumberProps {
  readOnly?: false
}

const FormInput: React.FC<FormInputNumberProps> = (props) => {
  const { value, placeholder, size, step, readOnly, onChange } = props
  return (
    <InputNumber
      value={value}
      placeholder={placeholder}
      size={size ?? 'middle'}
      step={step ?? 1}
      disabled={readOnly}
      onChange={onChange}
    />
  )
}

export default FormInput
