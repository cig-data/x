# @cig/switch
> The Switch control for React.

## Demo
[https://codesandbox.io/s/cigswitch-mlnkr](https://codesandbox.io/s/cigswitch-mlnkr)

## Installation and usage
> The easiest way to use @cig/switch is to install it from npm and build it into your app with Webpack.

```js
npm i -S @cig/switch
```

Then use it in your App:

```js
import React, {
  useState,
} from 'react'
import Switch from '@cig/switch'


export default () => {
  const [value, setValue] = useState(true)

  return (
    <Switch
      value={value}
      update={v => setValue(v)}
    />
  )
}
```

## Props

| 名称 | 类型 | 必填 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| value | Array | N | - | 默认选项 |
| update | Function | N | - | 数据更新回调 |
