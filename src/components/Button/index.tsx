import { ButtonStyle } from './styles'

type Props = {
  children: string
}

const Button = ({ children }: Props) => {
  return <ButtonStyle>{children}</ButtonStyle>
}

export default Button
