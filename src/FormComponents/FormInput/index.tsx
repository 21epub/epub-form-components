import React from 'react'
import { Input } from 'antd'
import { InputProps } from 'antd/lib/input'
import Wrapper from '../styledComponents'
import store from '../store'
interface FormInputProps extends InputProps {
  readOnly?: false
}

const FormInput: React.FC<FormInputProps> = (props) => {
  const { value, placeholder, size, readOnly, onChange } = props
  const [state] = store.useRxjsStore()
  return (
    <Wrapper styled={state.styled}>
      <Input
        type='text'
        value={value}
        placeholder={placeholder}
        size={size ?? 'middle'}
        disabled={readOnly}
        onChange={onChange}
      />
    </Wrapper>
  )
}

export default FormInput
