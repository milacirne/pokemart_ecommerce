import * as S from './styles'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <S.Container>
      <Link to="/">
        <S.Image src={logo} alt="PokéMart"></S.Image>
      </Link>
      <div>
        <S.IconsContainer>
          <li>
            <S.Icons className="fa-brands fa-instagram"></S.Icons>
          </li>
          <li>
            <S.Icons className="fa-brands fa-facebook"></S.Icons>
          </li>
          <li>
            <S.Icons className="fa-brands fa-twitter"></S.Icons>
          </li>
        </S.IconsContainer>
      </div>
      <S.Copyright>
        {currentYear} - &copy; Pokémon All rights reserved
      </S.Copyright>
    </S.Container>
  )
}

export default Footer
