import React, {
  useState,
  useEffect,
} from 'react'
import Select from '../../timepicker/lib/timePicker'

import {
  Box,
} from './style'

export default () => {
  const [show, setShow] = useState(false)
  const [value, setValue] = useState('2020-10-01')
  const title = '新易互动...'
  const confirmValue = '确定'
  const minDate = '2010-01-01'
  const maxDate = '2020-12-31'

  useEffect(() => console.log(value), [value])

  return (
    <Box>
      <div
        onClick={() => setShow(!show)}
        role="button"
        onKeyUp={() => {}}
        tabIndex={0}
      >
        {show ? 'Time Picker Hide' : 'Time Picker Show'}
        <p>{JSON.stringify(value)}</p>
      </div>
      {
        show
          ? (
            <Select
              title={title}
              value={value}
              minDate={minDate}
              maxDate={maxDate}
              show={v => setShow(v)}
              confirmValue={confirmValue}
              confirm={v => setValue(v)}
            />
          ) : null
      }
    </Box>
  )
}
