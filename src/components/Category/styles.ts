import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  border: 3px solid ${colors.red};
  border-radius: 2px;
  font-size: 14px;
  position: relative;

  img {
    max-width: 100%;
  }
`

export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Tag = styled.div`
  background-color: ${colors.red};
  color: ${colors.white};
  font-size: 12px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 8px;
  display: inline-block;
  margin-left: 8px;
`

export const InfosContainer = styled.div`
  padding: 16px;
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-bottom: 8px;
  text-align: justify;
`

export const Description = styled.p`
  line-height: 22px;
  margin-bottom: 16px;
  text-align: justify;
`

export const Button = styled.button`
  background-color: ${colors.red};
  padding: 8px;
  border: none;
  border-radius: 8px;
  color: ${colors.white};
  font-weight: bold;
  transition: 0.3s all ease;
  cursor: pointer;

  &:hover {
    background-color: ${colors.darkRed};
  }
`
