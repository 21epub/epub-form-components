import React from 'react'
import { Button } from 'antd'
import { ButtonProps } from 'antd/lib/button'

interface FormButtonProps extends ButtonProps {
  buttonText: string
}

const FormButton: React.FC<FormButtonProps> = (props) => {
  const { type, size, buttonText, onClick } = props
  return (
    <Button type={type ?? 'primary'} size={size ?? 'middle'} onClick={onClick}>
      {buttonText}
    </Button>
  )
}

export default FormButton
