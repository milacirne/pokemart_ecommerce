import MainHeader from '../../components/MainHeader'
import CategoriesContainer from '../../components/CategoriesContainer'
import Category from '../../models/Category'

import scarletViolet from '../../assets/images/categories/pokemon_scarlet-violet.png'
import clothing from '../../assets/images/categories/collection.png'
import tcg from '../../assets/images/categories/tcg.png'
import plushies from '../../assets/images/categories/plushies.png'
import comics from '../../assets/images/categories/comics.png'
import memorabilia from '../../assets/images/categories/memorabilia.png'

const categories: Category[] = [
  {
    id: 1,
    title: 'Games',
    description:
      'Embark on an epic journey through the Pokémon world with our exciting selection of Pokémon games. Choose your starter Pokémon, battle against trainers, and strive to become the ultimate Pokémon Champion!',
    image: scarletViolet,
    infos: 'UP TO 30% DISCOUNT',
    slug: 'games'
  },
  {
    id: 2,
    title: 'Apparel & Accessories',
    description:
      'Gear up with our exclusive collection of Pokémon-themed apparel and accessories. Show off your favorite Pokémon with our range of stylish clothing, hats, bags, and more!',
    image: clothing,
    infos: 'UP TO 15% DISCOUNT',
    slug: 'acessories'
  },
  {
    id: 3,
    title: 'Trading Cards Games',
    description:
      'Discover a world of excitement with our extensive collection of Pokémon trading cards. From booster packs to rare singles, build your deck and become a master trainer',
    image: tcg,
    infos: 'UP TO 10% DISCOUNT',
    slug: 'cards'
  },
  {
    id: 4,
    title: 'Toys and Figures',
    description:
      'Explore our range of Pokémon toys and figures, where adventure awaits! From plushies to action figures, unleash your imagination and embark on thrilling Pokémon journeys',
    image: plushies,
    infos: 'UP TO 30% DISCOUNT',
    slug: 'toys'
  },
  {
    id: 5,
    title: 'Books and Comics',
    description:
      'Dive into the captivating world of Pokémon with our collection of books and comics. From strategy guides to manga adaptations, embark on exciting adventures and uncover the mysteries of the Pokémon universe',
    image: comics,
    infos: 'UP TO 25% DISCOUNT',
    slug: 'comics'
  },
  {
    id: 6,
    title: 'Collectibles and Memorabilia',
    description:
      'Explore our curated selection of exclusive limited edition Pokémon collectibles and memorabilia. From posters and mugs to keychains and more, find unique treasures to enhance your Pokémon collection and evoke fond memories of your Pokémon journey',
    image: memorabilia,
    infos: 'UP TO 10% DISCOUNT',
    slug: 'memorabilia'
  }
]

const Home = () => {
  return (
    <>
      <MainHeader />
      <CategoriesContainer categories={categories} />
    </>
  )
}

export default Home
