import CategoryClass from '../../models/Category'
import Category from '../Category'
import * as S from './styles'

type Props = {
  categories: CategoryClass[]
}

const CategoriesContainer = ({ categories }: Props) => (
  <S.Container>
    <S.List>
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          description={category.description}
          image={category.image}
          infos={category.infos}
          to={`/${category.slug}`}
        />
      ))}
    </S.List>
  </S.Container>
)

export default CategoriesContainer
