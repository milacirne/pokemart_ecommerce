import * as S from '../../components/Category/styles'
import Button from '../Button'
import { ProductCard, ProductInfosContainer, ProductTag } from './styles'

type Props = {
  title: string
  description: string
  image: string
  tags: string[]
}

const Product = ({ title, description, image, tags }: Props) => {
  return (
    <ProductCard>
      <img src={image} />
      <S.TagsContainer>
        {tags.map((tag) => (
          <ProductTag key={tag}>{tag}</ProductTag>
        ))}
      </S.TagsContainer>
      <ProductInfosContainer>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <Button>Add to cart</Button>
      </ProductInfosContainer>
    </ProductCard>
  )
}

export default Product
