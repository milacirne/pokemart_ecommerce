import styled from 'styled-components'
import { colors } from '../../styles'
import background from '../../assets/images/background.png'

export const HeaderBar = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.red} url(${background}) repeat;
  padding: 32px 0;
`

export const Logo = styled.img`
  width: 112px;
  margin-bottom: 64px;
`

export const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  color: ${colors.white};
`
