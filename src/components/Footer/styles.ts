import styled from 'styled-components'
import { colors } from '../../styles'
import background from '../../assets/images/background.png'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.red} url(${background}) repeat;
  padding: 32px 0;
  font-size: 14px;
  color: ${colors.white};
`

export const Image = styled.img`
  width: 80px;
  margin-bottom: 24px;
`

export const IconsContainer = styled.ul`
  display: flex;

  li:nth-child(2) {
    margin: 0 4px;
  }
`

export const Icons = styled.i`
  font-size: 24px;
  margin-right: 8px;
  cursor: pointer;
  transition: 0.3s ease all;

  &:hover {
    color: ${colors.yellow};
  }
`

export const Copyright = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-top: 64px;
`
