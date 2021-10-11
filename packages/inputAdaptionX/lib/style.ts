import styled from 'styled-components'

const EditImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAYAAAHOsAdPAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADaADAAQAAAABAAAADAAAAACUqjEeAAAA9klEQVQoFXVRvQ4BQRCePcRPhEJxr6DSuN5LeButVlQaiVKn00i8gew03kMhCiIY396e2bvDJLuZ+eabfyJrhSCR+7w4RCSKyJg53os+HGLeOYpRgGjvY5hXXin8WW7FmDfIcXB2VUFrZ6gS03A4VixXIGCZlq/uoW63QefzzRSoIhXUelCz2QuziZgUjOMWXa+nEOBn9k1p16pkvLKt4anjr1eja6i9TUez9ujQ0JimyhTsH8Q1rDteh9rtDiXJwHl/BzEvkP0Jfwsj17HNEfX7l88iw7pdCuYpLjyBtgSx4o/sHGXJzyRSTPKH+32eMrFsJ4l5Aw5ZbL0tw8fHAAAAAElFTkSuQmCC'

export const Name = styled.div`
  position: relative;
  display: inline-block;
  width: auto;
  height: 28px;

  outline: none;

  em {
    position: absolute;
    top: 0;
    right: -12px;
    z-index: 2;

    width: 20px;
    height: 28px;

    cursor: pointer;

    background: url(${EditImg}) no-repeat right center;
    background-size: 12px 12px;
    outline: none;
  }

  span {
    display: block;
    min-width: 10px;
    max-width: 100px;
    height: calc(100% - 2px);
    padding: 0 35px 0 13px;
    border: 1px solid #fff;
    opacity: 0;
  }

  input {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: calc(100% - 2px);
    padding: 0 0 0 13px;

    font-size: 12px;
    line-height: 20px;
    cursor: text;

    background: none;
    border: 1px solid #fff;
    border-radius: 4px;
    outline: none;
  }

  input:focus {
    width: calc(100% - 23px);
    border: 1px solid #9ca1ab;
    box-shadow: 0 2px 6px 0 #ccccda;
  }

  input:focus + span {
    width: 117px;
    max-width: 117px;
    transition: max-width .5s;
  }
`

export const NameTip = styled.div`
  margin: 16px auto -10px!important;
  font-size: 12px;
  line-height: 14px;
  color: #fd8166;
`
