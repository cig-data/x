import React, {
  useState,
} from 'react'
import Switch from '../../switch/lib/switch'

import {
  Box,
} from './style'

export default () => {
  const [value, setValue] = useState(true)

  return (
    <Box>
      <Switch
        value={value}
        update={v => setValue(v)}
      />
    </Box>
  )
}
