import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { FormCheckbox } from './index'

export default {
  title: 'epub-form-Component',
  component: FormCheckbox,
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
}> = (args) => <FormCheckbox {...args} />

export const PrimaryText = Template.bind({})
PrimaryText.args = {
  optionsConfig: {
    type: 'Radio',
    defaultValue: ['middle'],
    options: [
      { label: '大', value: 'large', checked: false, index: 0 },
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
