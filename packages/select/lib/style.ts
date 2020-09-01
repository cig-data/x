import styled from 'styled-components'

export const BG = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999999999;
  background: rgba(0, 0, 0, .6);
`

export const Wrap = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999999999;

  height: 260px;

  background: rgba(255, 255, 255, 1);
  border-radius: 12px 12px 0 0;
`
export const Cancal = styled.div`
  position: relative;
  height: 60px;

  font-size: 14px;
  line-height: 56px;
  color: rgba(32, 44, 69, 1);
  text-align: center;

  div {
    position: absolute;
    top: 0;
    right: 26px;

    color: rgba(0, 204, 204, 1);
    outline: none;
  }
`

export const Option = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  overflow: hidden;
`

export const Items = styled.div.attrs(
  props => ({
    className: props.cn,
  }),
)`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  margin: 80px 0 120px;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    padding: 0 12px;
    margin: 0 30px;

    font-size: 14px;
    line-height: 40px;
    color: ${({ theme }) => theme.fontColor};
    text-align: center;
    cursor: pointer;

    outline: none;
  }

  [cn="active"] {
    color: rgba(0,204,204,1);
  }

  &:after {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
    height: 40px;

    content: "";

    border: 1px solid rgba(0, 0, 0, .1);
    border-width: 1px 0;
  }
`
