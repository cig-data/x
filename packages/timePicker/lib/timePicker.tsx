import React, {
  useState,
  useEffect,
} from 'react'
import Select from '@cig/select'

interface Props {
  title?: string,
  value: any,
  minDate: string,
  maxDate: string,
  show: any,
  confirm: any,
  confirmValue: string,
}

const TP = (
  {
    title = '请选择',
    value,
    minDate,
    maxDate,
    show,
    confirm,
    confirmValue,
  }: Props,
) => {
  const [yearArr, setYearArr] = useState([])
  const [monthArr, setMonthArr] = useState([])
  const [dayArr, setDayArr] = useState([])
  const [cho, setCho] = useState([])
  const minD = minDate.split('-')
  const maxD = maxDate.split('-')

  useEffect(() => {
    const ya = []
    for (let i = Number(maxD[0]); i >= Number(minD[0]); i -= 1) ya.push(i.toString())
    setYearArr(ya)
    setCho(value.split('-'))
  }, [])

  useEffect(() => {
    if (!yearArr.length) return
    if (cho.length < 2) return
    const ma = []
    const sm = cho[0] === Number(minD[0]) ? Number(minD[1]) : 1
    const em = cho[0] === Number(maxD[0]) ? Number(maxD[1]) : 12
    for (let i = sm; i <= em; i += 1) ma.push(i > 9 ? i.toString() : `0${i}`)
    setMonthArr(ma)
  }, [yearArr, cho])

  useEffect(() => {
    if (!monthArr.length) return
    if (cho.length < 3) return
    const da = []
    const sd = cho[1] === Number(minD[1]) ? Number(minD[2]) : 1
    const ed = cho[1] === Number(maxD[1]) ? Number(maxD[2]) : (new Date(cho[0], cho[1], 0)).getDate()
    for (let i = sd; i <= ed; i += 1) da.push(i > 9 ? i.toString() : `0${i}`)
    setDayArr(da)
    console.log(cho)
  }, [monthArr])

  return (
    <>
      {
        yearArr.length
        && cho.length
          ? (
            <Select
              title={title}
              confirmValue={confirmValue}
              value={cho}
              data={[yearArr, monthArr, dayArr]}
              show={show}
              update={v => setCho(v)}
              confirm={v => confirm(v.join('-'))}
            />
          ) : null
      }
    </>
  )
}

TP.defaultProps = {
  title: '请选择',
}

export default TP
