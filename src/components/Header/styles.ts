import styled from 'styled-components'
import { colors } from '../../styles'
import background from '../../assets/images/background.png'

export const HeaderBar = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.red} url(${background}) repeat;
  padding: 32px;
  font-weight: bold;
  font-size: 24px;
  position: relative;

  a {
    color: ${colors.white};
    display: flex;
    align-items: center;
  }
`

export const Logo = styled.img`
  width: 112px;
`

export const Cart = styled.div`
  position: absolute;
  right: 88px;
  top: 64px;
  cursor: pointer;
`

export const Icons = styled.i`
  font-size: 24px;
  margin-left: 8px;
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 240px;
  overflow-y: hidden;
  position: relative;
`

export const Image = styled.img`
  width: 100%;
  height: 400px;
  display: block;
  overflow-y: hidden;
`

export const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  color: ${colors.black};
  position: absolute;
  left: 104px;
  top: 120px;
`
