import React from 'react'

import Box from './style'

interface Props {
  value: any,
  update: any,
}

export default (
  {
    value,
    update,
  }: Props,
) => (
  <Box
    role="button"
    onClick={() => update(!value)}
    onKeyPress={() => {}}
    tabIndex={0}
  >
    <span cn={value ? 'open' : ''} />
  </Box>
)
