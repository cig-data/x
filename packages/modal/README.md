# @cig/select
> The Modal control for React.

## Demo
[https://codesandbox.io/s/cig-modal-4f487](https://codesandbox.io/s/cig-modal-4f487)

## Installation and usage
> The easiest way to use @cig/modal is to install it from npm and build it into your app with Webpack.

```js
npm i -S @cig/modal
```

Then use it in your App:

```js
import React, {
  useState,
  useEffect,
} from 'react'
import Modal from '@cig/modal'

export default () => {
  const [show, setShow] = useState(false)

  useEffect(() => console.log(show), [show])

  return (
    <>
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
    </>
  )
}
```

## Props

| 名称 | 类型 | 必填 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| show | Boolean | Y | false | 展示 |
| content | String | Y | - | 提示文字 |
| onChange | Function | Y | - | 确定按钮回调 |
