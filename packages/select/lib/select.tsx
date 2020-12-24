import React, {
  useState,
  useEffect,
} from 'react'
import { createPortal } from 'react-dom'

import Items from './option'

import {
  BG,
  Wrap,
  Cancal,
  Option,
} from './style'

interface Props {
  title?: string,
  value?: any,
  data: any,
  show?: any,
  update?: any,
  confirm: any,
  confirmValue?: string,
}

export default (
  {
    title,
    value,
    data,
    show,
    update,
    confirm,
    confirmValue,
  }: Props,
) => {
  const [cho, setCho] = useState([])

  useEffect(() => {
    value.length && setCho(value)
  }, [value])

  useEffect(() => {
    cho?.length && update(cho)
  }, [cho])

  return createPortal(
    <>
      <BG
        role="button"
        tabIndex={0}
        onKeyPress={() => {}}
        onClick={() => show()}
      />
      <Wrap>
        <Cancal>
          {title || '请选择'}
          <div
            role="button"
            tabIndex={0}
            onKeyPress={() => {}}
            onClick={() => { confirm(cho); show(false) }}
          >
            {confirmValue || '确定'}
          </div>
        </Cancal>
        <Option>
          {
            value.map(
              (v, i) => (
                <Items
                  key={[...new Array(99).keys()][i]}
                  value={cho[i]}
                  data={data[i]}
                  update={
                    c => {
                      if (!cho.length) return
                      const cc = JSON.parse(JSON.stringify(cho))
                      cc.splice(i, 1, c)
                      setCho(cc)
                    }
                  }
                />
              ),
            )
          }
        </Option>
      </Wrap>
    </>,
    document.body,
  )
}
