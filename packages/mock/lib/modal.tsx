import React, {
  useState,
  useEffect,
} from 'react'
import Modal from '../../modal/lib'

import {
  Box,
} from './style'

export default () => {
  const [show, setShow] = useState(false)

  useEffect(() => console.log(show), [show])

  return (
    <Box>
      <div
        onClick={() => setShow(true)}
        role="button"
        onKeyUp={() => {}}
        tabIndex={0}
      >
        <p>click show modal</p>
      </div>
      <Modal
        show={show}
        content="hello world"
        onChange={() => setShow(false)}
      />
    </Box>
  )
}
