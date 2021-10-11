import styled from 'styled-components'


export const Box = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9990;

  background: rgba(0, 0, 0, .48);
`

export const Wrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 99999;

  width: 320px;
  height: 160px;
  margin: -80px 0 0 6px;

  background: #fff;

  h3 {
    margin: 40px 0 20px;

    font-size: 12px;
    font-weight: normal;
    line-height: 20px;
    color: #000;
    text-align: center;
  }

  div {
    width: 100%;
    height: 22px;

    line-height: 22px;

    text-align: center;
  }

  span {
    display: inline-block;
    width: 84px;
    height: 22px;
    margin: 0 0 0 6px;

    font-size: 12px;
    color: #fff;

    cursor: pointer;
    background: #0cc;
    border: 1px solid #0cc;

    outline: none;

    &:hover {
      background: #08b6b5;
      border-color: #08b6b5;
    }
  }

  [cn="cancel"] {
    margin: 0 6px 0 0;
    color: #fff;
    background: #0cc;
  }
`
