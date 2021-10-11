import React, {
  useRef,
} from 'react'

import {
  Name,
} from './style'

interface Props {
  value: string,
  onChange: any,
}

export default (
  {
    value,
    onChange,
  }: Props,
) => {
  const inputRef = useRef()
  return (
    <Name>
      <input
        ref={inputRef}
        value={value}
        onChange={({ target }) => onChange(target.value)}
      />
      <span>{value}</span>
      <em
        role="button"
        tabIndex={0}
        onKeyUp={() => {}}
        onClick={() => inputRef?.current?.focus()}
      />
    </Name>
  )
}
