import Header from '../../components/Header'
import ProductsContainer from '../../components/ProductsContainer'
import Product from '../../models/Product'

import toysBanner from '../../assets/images/toys/toys-banner.png'
import pikachuPlush from '../../assets/images/toys/pikachu-plush.png'
import charmanderFunko from '../../assets/images/toys/charmander-funko.png'
import eeveePlush from '../../assets/images/toys/eeveePlush.png'
import bulbasaurFigure from '../../assets/images/toys/bulbasaur-figure.png'
import squitlePlush from '../../assets/images/toys/squirtlePlush.png'
import mewtwoFigure from '../../assets/images/toys/mewtwoFigure.png'

const products: Product[] = [
  {
    id: 1,
    title: 'Pikachu Plush Toy',
    description:
      "A soft and cuddly plush toy featuring everyone's favorite electric-type Pokémon, Pikachu. Perfect for fans of all ages, this plush toy brings the lovable Pikachu character to life with its vibrant colors and adorable design.",
    image: pikachuPlush,
    tags: ['30% DISCOUNT', '20,00€']
  },
  {
    id: 2,
    title: 'Charmander POP Funko',
    description:
      'Charmander POP Funko: This adorable vinyl figure captures the essence of the beloved Fire-type Pokémon, Charmander. With its cute expression and iconic flame-tipped tail, this Funko POP is a must-have collectible for Pokémon fans.',
    image: charmanderFunko,
    tags: ['25% DISCOUNT', '25,00€']
  },
  {
    id: 3,
    title: 'Eevee Plush Toy',
    description:
      'Cuddle up with this soft and huggable plush of Eevee, the beloved Evolution Pokémon. With its fluffy fur and charming expression, this Eevee plush is perfect for Pokémon fans of all ages to be your cuddly companion.',
    image: eeveePlush,
    tags: ['15% DISCOUNT', '30,00€']
  },
  {
    id: 4,
    title: 'Bulbasaur Collectible Figure',
    description:
      'Capture the essence of Bulbasaur with this adorable collectible figure. Perfect for fans of the Grass-type Pokémon, this figure features vibrant colors and intricate details that make it a must-have for any Pokémon enthusiast.',
    image: bulbasaurFigure,
    tags: ['20% DISCOUNT', '15,00€']
  },
  {
    id: 5,
    title: 'Squirtle Plush',
    description:
      'Immerse yourself in the Pokémon universe with this irresistibly cute Squirtle plush toy. Ideal for playtime adventures or showcasing your Pokémon collection, it features an enchanting design and vivid colors.',
    image: squitlePlush,
    tags: ['5% DISCOUNT', '18,00€']
  },
  {
    id: 6,
    title: 'Mewtwo Action Figure',
    description:
      "Enter the battle arena with this dynamic Mewtwo action figure. Boasting meticulous detailing and articulation in its joints, this figure truly embodies the legendary Pokémon's formidable strength and commanding presence. ",
    image: mewtwoFigure,
    tags: ['10% DISCOUNT', '35,00€']
  }
]

const Toys = () => {
  return (
    <>
      <Header image={toysBanner} title="Pokémon Toys and Figures" />
      <ProductsContainer products={products} />
    </>
  )
}

export default Toys
