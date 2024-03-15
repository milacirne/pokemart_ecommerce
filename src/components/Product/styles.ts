import styled from 'styled-components'
import { Card, InfosContainer, Tag } from '../Category/styles'
import { colors } from '../../styles'

export const ProductCard = styled(Card)`
  background-color: ${colors.red};
  border: none;
  color: ${colors.white};
  padding: 8px;
`

export const ProductInfosContainer = styled(InfosContainer)`
  padding: 8px 0 0;
`

export const ProductTag = styled(Tag)`
  background-color: ${colors.yellow};
  color: ${colors.red};
`
