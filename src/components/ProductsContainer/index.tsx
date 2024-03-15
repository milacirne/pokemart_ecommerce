import Product from '../Product'
import ProductClass from '../../models/Product'
import * as S from './styles'

type Props = {
  products: ProductClass[]
}

const ProductsContainer = ({ products }: Props) => {
  return (
    <S.Container>
      <S.List>
        {products.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            tags={product.tags}
          />
        ))}
      </S.List>
    </S.Container>
  )
}

export default ProductsContainer
