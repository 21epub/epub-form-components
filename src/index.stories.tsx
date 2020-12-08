import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { FormInput } from './index'

export default {
  title: 'epub-form-Component',
  component: FormInput,
  argTypes: {
    text: {
      name: '文本',
      type: { name: 'string', required: false }
    }
  }
} as Meta

const Template: Story<{ placeholder: string }> = (args) => (
  <FormInput {...args} />
)

export const PrimaryText = Template.bind({})
PrimaryText.args = {
  placeholder: '这是文本输入框'
}
PrimaryText.parameters = {
  backgrounds: {
    values: [
      { name: 'white', value: '#fff' },
      { name: 'black', value: '#000' }
    ]
  }
}
