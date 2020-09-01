import React from 'react'
import Select from '@cig/select'

interface Props {
  title?: string,
  value: any,
  data: any,
  show: any,
  update: any,
  confirm: any,
  confirmValue: string,
}

const TP = (
  {
    title = '请选择',
    value,
    data,
    show,
    update,
    confirm,
    confirmValue,
  }: Props,
) => {
  console.log('a')

  return (
    <Select
      title={title}
      confirmValue={confirmValue}
      value={value}
      data={data}
      show={show}
      update={update}
      confirm={confirm}
    />
  )
}

TP.defaultProps = {
  title: '请选择',
}

export default TP
