import * as S from './styles'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

export type Props = {
  image: string
  title: string
}

const Header = ({ image, title }: Props) => {
  return (
    <>
      <S.HeaderBar>
        <Link to="/">
          <S.Logo src={logo} alt="PokéMart"></S.Logo>
        </Link>
        <S.Cart>
          <a>
            0 item(s) in cart
            <S.Icons className="fa-solid fa-cart-shopping"></S.Icons>
          </a>
        </S.Cart>
      </S.HeaderBar>
      <S.ImageContainer>
        <S.Image src={image} />
        <S.Title>{title}</S.Title>
      </S.ImageContainer>
    </>
  )
}

export default Header
