import React from 'react'
import { Input } from 'antd'
import { TextAreaProps } from 'antd/lib/input'

interface FormTextAreaProps extends TextAreaProps {
  readOnly?: boolean
}

const FormInput: React.FC<FormTextAreaProps> = (props) => {
  const { value, placeholder, size, readOnly, onChange } = props
  return (
    <Input.TextArea
      value={value}
      placeholder={placeholder}
      size={size ?? 'middle'}
      disabled={readOnly}
      autoSize={{ minRows: 4, maxRows: 4 }}
      onChange={onChange}
    />
  )
}

export default FormInput
