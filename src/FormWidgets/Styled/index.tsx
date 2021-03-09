import React from 'react'
import { getStyled } from './utils'
import styles from './index.module.less'

export interface ReturnValue {
  [styled: string]: string
}

export interface StyledList {
  label: string
  type: string
  name: string
  defaultValue?: ReturnValue | string
}

export interface StyledValue {
  fontSize?: string
  fontWeight?: string
  backgroundColor?: string
  borderStyle?: string
  color?: string
  [key: string]: string | undefined
}

interface StyledProps {
  value: StyledValue
  styledList: StyledList[]
  onChange?: (value: StyledValue | {}) => void
}

const StyledWidget: React.FC<StyledProps> = (props) => {
  const { value, styledList, onChange } = props

  const onStyledValueChange = (styledValue: StyledValue) => {
    onChange && onChange(Object.assign({}, value, styledValue))
  }

  return (
    <div className={styles.styled}>
      {styledList.map((styled, index) => {
        const Styled = getStyled(styled.type)
        return (
          <Styled
            className={styles.styledChild}
            key={index}
            label={styled.label}
            name={styled.name}
            defaultValue={styled.defaultValue}
            styledValue={value}
            onChange={onStyledValueChange}
          />
        )
      })}
    </div>
  )
}

export default StyledWidget
