import React from 'react'
import { Checkbox, Tooltip } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { QuestionCircleFilled } from '@ant-design/icons'
import { ValidateValue } from '..'
import styles from './index.module.less'

interface ReadOnlyProps {
  validateValue: ValidateValue
  onChange: (value: { readOnly: boolean }) => void
}

const ReadOnly: React.FC<ReadOnlyProps> = (props) => {
  const { validateValue, onChange } = props

  const onCheckedChange = (e: CheckboxChangeEvent) => {
    onChange({ readOnly: e.target.checked })
  }

  return (
    <div className={styles.flexBox}>
      <Checkbox checked={validateValue?.readOnly} onChange={onCheckedChange} />
      <span>只读</span>
      <Tooltip title='设为只读后，用户只能查看，不能编辑'>
        <QuestionCircleFilled style={{ marginLeft: '5px' }} />
      </Tooltip>
    </div>
  )
}

export default ReadOnly
