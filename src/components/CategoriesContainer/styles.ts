import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  background-color: ${colors.lightRed};
  padding: 48px 104px 80px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, auto);
  column-gap: 48px;
  row-gap: 24px;
`
