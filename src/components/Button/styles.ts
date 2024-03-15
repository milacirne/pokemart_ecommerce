import styled from 'styled-components'
import { colors } from '../../styles'

export const ButtonStyle = styled.button`
  width: 100%;
  background-color: ${colors.white};
  color: ${colors.red};
  font-weight: bold;
  font-size: 14px;
  border: none;
  transition: 0.5s all ease;
  padding: 8px 0;
  cursor: pointer;

  &:hover {
    background-color: ${colors.yellow};
  }
`
