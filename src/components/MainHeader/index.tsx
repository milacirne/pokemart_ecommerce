import * as S from './styles'
import logo from '../../assets/images/logo.png'

const MainHeader = () => (
  <S.HeaderBar>
    <S.Logo src={logo} alt="PokéMart"></S.Logo>

    <S.Title>
      Discover Your Pokémon Adventure at PokéMart
      <br />
      Where Every Trainer&apos;s Dream Begins
    </S.Title>
  </S.HeaderBar>
)

export default MainHeader
