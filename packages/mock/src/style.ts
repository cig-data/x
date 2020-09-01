import styled from 'styled-components'

export const Box = styled.div`
  box-sizing: border-box;
  margin: 10px 0;
  background: red;

  & > div {
    outline: none;
  }
`

export const Boxa = styled.div`
  background: red;
`
