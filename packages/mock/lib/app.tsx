import React from 'react'
import { ThemeProvider } from 'styled-components'

import Select from './select'
import Input from './input'
import SelectObject from './selectObject'
import TimePicker from './timePicker'
import Switch from './switch'
import Modal from './modal'

import GlobalStyle from './theme'

export default () => (
  <>
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <Modal />
      <Input />
      <Select />
      <Switch />
      <SelectObject />
      <TimePicker />
    </ThemeProvider>
  </>
)
