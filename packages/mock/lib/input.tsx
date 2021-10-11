import React, {
  useState,
  useEffect,
} from 'react'
import Input from '../../inputAdaptionX/lib/input'

import {
  Box,
} from './style'

export default () => {
  const [value, setValue] = useState(['a', 'b', 'c', 'd'])

  useEffect(() => console.log(value), [value])

  return (
    <Box>
      <Input
        value={value}
        onChange={(v) => setValue(v)}
      />
    </Box>
  )
}
