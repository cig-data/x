import React from 'react'
import { ThemeProvider } from 'styled-components'

import Select from './select'
import SelectObject from './selectObject'
import TimePicker from './timePicker'

import GlobalStyle from './theme'

export default () => (
  <>
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <Select />
      <SelectObject />
      <TimePicker />
    </ThemeProvider>
  </>
)
