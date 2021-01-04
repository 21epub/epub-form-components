import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { FormRadio } from './index'

export default {
  title: 'epub-form-Component',
  component: FormRadio,
  argTypes: {
    text: {
      name: '文本',
      type: { name: 'string', required: false }
    }
  }
} as Meta

const Template: Story<{
  optionsConfig: any
  size: 'large' | 'middle' | 'small'
  readOnly: boolean
  onChange: (value: any) => void
}> = (args) => <FormRadio {...args} />

export const PrimaryText = Template.bind({})
PrimaryText.args = {
  optionsConfig: {
    type: 'Radio',
    defaultValue: ['middle'],
    options: [
      {
        label:
          '大家好，这是表单名称长度测试sdsdfga显示阿斯利康黑咖喱看到过拉胯话大概行安徽两个卡就离开的发生的',
        value: 'large',
        checked: false,
        index: 0
      },
      { label: '中', value: 'middle', checked: true, index: 1 },
      { label: '小', value: 'small', checked: false, index: 2 }
    ]
  }
}
PrimaryText.parameters = {
  backgrounds: {
    values: [
      { name: 'white', value: '#fff' },
      { name: 'black', value: '#000' }
    ]
  }
}
