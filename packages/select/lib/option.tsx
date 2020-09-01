import React, {
  useRef,
  useState,
  useEffect,
} from 'react'
import BScroll from '@better-scroll/core'
import Wheel from '@better-scroll/wheel'

import {
  Items,
} from './style'

BScroll.use(Wheel)

interface Props {
  value: string,
  data: any,
  update: any,
}

export default (
  {
    value,
    data,
    update,
  }: Props,
) => {
  const optionsRef = useRef(null)
  const [cho, setCho] = useState('')
  let nb = null

  useEffect(() => {
    if (!data.length) return
    if (!value) return
    if (nb) return
    let idx = typeof value === 'string' ? data.indexOf(value) : data.indexOf(data.find(v => v.value === value?.value))
    if (idx < 0) idx = 0
    /* eslint-disable no-new */
    nb = new BScroll(
      optionsRef.current,
      {
        wheel: {
          selectedIndex: idx,
          wheelWrapperClass: 'wheel-scroll',
          wheelItemClass: 'wheel-item',
          rotate: 25,
          adjustTime: 400,
        },
        click: true,
        probeType: 3,
      },
    )
    nb.on('scrollEnd', () => {
      setCho(data[nb.getSelectedIndex()])
    })
  }, [data, value])

  useEffect(() => {
    data.length && nb && nb.refresh()
  }, [data])

  useEffect(() => {
    cho && update(cho)
  }, [cho])

  return (
    <Items
      ref={optionsRef}
      className="wheel-scroll"
    >
      <ul>
        {
          data.map(
            v => (
              <li
                cn={(typeof value === 'string' ? (cho || value) === v : (cho?.value || value?.value) === v.value) ? 'active' : ''}
                className="wheel-item"
                key={typeof v === 'string' ? v : v.value}
              >
                {typeof v === 'string' ? v : v.value}
              </li>
            ),
          )
        }
      </ul>
    </Items>
  )
}
