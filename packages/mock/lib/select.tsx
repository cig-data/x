import React, {
  useState,
  useEffect,
} from 'react'
import Select from '@cig/select'

import {
  Box,
} from './style'

export default () => {
  const [show, setShow] = useState(false)
  const [value, setValue] = useState(['a', 'b', 'c', 'd'])
  const title = '新易互动...'
  const confirmValue = '确定'
  const data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

  useEffect(() => console.log(value), [value])

  return (
    <Box>
      <div
        onClick={() => setShow(!show)}
        role="button"
        onKeyUp={() => {}}
        tabIndex={0}
      >
        {show ? 'Select Hide' : 'Select Show'}
        <p>{JSON.stringify(value)}</p>
      </div>
      {
        show
          ? (
            <Select
              title={title}
              value={value}
              data={[data, data, data, data]}
              show={v => setShow(v)}
              update={v => setValue(v)}
              confirmValue={confirmValue}
              confirm={v => setValue(v)}
            />
          ) : null
      }
    </Box>
  )
}
