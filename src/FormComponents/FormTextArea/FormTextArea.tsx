import React from 'react'
import { Input } from 'antd'
import { TextAreaProps } from 'antd/lib/input'
import Wrapper from '../styledComponents'
import store from '../store/store'

interface FormTextAreaProps extends TextAreaProps {
  readOnly?: boolean
}

const FormTextArea: React.FC<FormTextAreaProps> = (props) => {
  const { value, placeholder, size, readOnly, onChange } = props
  const [state] = store.useRxjsStore()
  return (
    <Wrapper styled={state.styled}>
      <Input.TextArea
        value={value}
        placeholder={placeholder}
        size={size ?? 'middle'}
        disabled={readOnly}
        autoSize={{ minRows: 4, maxRows: 4 }}
        onChange={onChange}
      />
    </Wrapper>
  )
}

export default FormTextArea
