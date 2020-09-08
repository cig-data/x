# @cig/select
The Time Picker control for React.

## Installation and usage
The easiest way to use @cig/timepicker is to install it from npm and build it into your app with Webpack.

```js
npm i -S @cig/timepicker
```

Then use it in your App:

```js
import React, {
  useState,
  useEffect,
} from 'react'
import Select from '@cig/timepicker'

import {
  Box,
} from './style'

export default () => {
  const [show, setShow] = useState(false)
  const [value, setValue] = useState('2020-10-01')
  const title = '新易互动...'
  const confirmValue = '确定'
  const minDate = '2010/01/01'
  const maxDate = '2020/12/31'

  useEffect(() => console.log(value), [value])

  return (
    <Box>
      <div
        onClick={() => setShow(!show)}
        role="button"
        onKeyUp={() => {}}
        tabIndex={0}
      >
        {show ? 'Time Pikcer Hide' : 'Time Picker Show'}
      </div>
      {
        show
          ? (
            <Select
              title={title}
              value={value}
              format={format}
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
```

## Props
| 名称 | 类型 | 必填 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| title | String | N | 请选择 | 标题 |
| value | Array | Y | - | 默认选项 |
| minDate | String | Y | - | 格式 |
| maxDate | String | Y | - | 格式 |
| show | Function | Y | - | 是否显示 |
| confirmValue | String | N | 确定 | 确定按钮文案 |
| confirm | Function | Y | - | 确定按钮回调 |

