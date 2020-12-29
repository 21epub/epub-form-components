import React from 'react'
import { Button } from 'antd'
import { ButtonProps } from 'antd/lib/button'
import Wrapper from '../styledComponents'
import store from '../store/store'

interface FormButtonProps extends ButtonProps {
  buttonText: string
}

const FormButton: React.FC<FormButtonProps> = (props) => {
  const { type, size, buttonText, onClick } = props
  const [state] = store.useRxjsStore()
  return (
    <Wrapper styled={state.styled}>
      <Button
        type={type ?? 'primary'}
        size={size ?? 'middle'}
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </Wrapper>
  )
}

export default FormButton
