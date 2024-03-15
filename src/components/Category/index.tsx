import { Link } from 'react-router-dom'
import * as S from './styles'

type Props = {
  title: string
  description: string
  image: string
  infos: string
  to: string
}

const Category = ({ title, description, image, infos, to }: Props) => {
  return (
    <S.Card>
      <img src={image} alt={title}></img>
      <S.TagsContainer>
        <S.Tag>{infos}</S.Tag>
      </S.TagsContainer>
      <S.InfosContainer>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <Link to={to}>
          <S.Button>Explore More</S.Button>
        </Link>
      </S.InfosContainer>
    </S.Card>
  )
}

export default Category
