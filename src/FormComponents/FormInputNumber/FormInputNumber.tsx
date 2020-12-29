import React from 'react'
import { InputNumber } from 'antd'
import { InputNumberProps } from 'antd/lib/input-number'
import Wrapper from '../styledComponents'
import store from '../store/store'
interface FormInputNumberProps extends InputNumberProps {
  readOnly?: false
}

const FormInput: React.FC<FormInputNumberProps> = (props) => {
  const { value, placeholder, size, step, readOnly, onChange } = props
  const [state] = store.useRxjsStore()
  return (
    <Wrapper styled={state.styled}>
      <InputNumber
        value={value}
        placeholder={placeholder}
        size={size ?? 'middle'}
        step={step ?? 1}
        disabled={readOnly}
        onChange={onChange}
      />
    </Wrapper>
  )
}

export default FormInput
