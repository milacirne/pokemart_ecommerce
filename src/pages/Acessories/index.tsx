import Header from '../../components/Header'
import ProductsContainer from '../../components/ProductsContainer'
import Product from '../../models/Product'

import acessoriesBanner from '../../assets/images/acessories/acessoriesBanner2.png'
import pikachuHoodie from '../../assets/images/acessories/pikachu-hoodie.png'
import eeveeBackpack from '../../assets/images/acessories/eeveeBackpack.png'
import pokeballCap from '../../assets/images/acessories/pokeball-cap.png'
import charmanderEvosTshirt from '../../assets/images/acessories/charmander-evos-tshirt.png'
import pokemonSockets from '../../assets/images/acessories/pokémon-sockets.png'
import pokemonUnderpants from '../../assets/images/acessories/pokemon-underpants.png'

const products: Product[] = [
  {
    id: 1,
    title: 'Pikachu Hoodie',
    description:
      "A cozy hoodie featuring Pikachu's iconic yellow color and ears on the hood.",
    image: pikachuHoodie,
    tags: ['15% DISCOUNT', '25,50€']
  },
  {
    id: 2,
    title: 'Eevee Backpack',
    description: "A stylish backpack adorned with Eevee's cute face and tail",
    image: eeveeBackpack,
    tags: ['10% DISCOUNT', '60,00€']
  },
  {
    id: 3,
    title: 'Pokéball Cap',
    description:
      'A baseball cap designed to resemble a Pokeball, perfect for any Pokémon Trainer',
    image: pokeballCap,
    tags: ['15% DISCOUNT', '20,00€']
  },
  {
    id: 4,
    title: 'Charmander Evolutions T-shirt',
    description:
      'A graphic T-shirt featuring a bold print of Charmander evolutions, one of the most popular Pokémon.',
    image: charmanderEvosTshirt,
    tags: ['10% DISCOUNT', '25,00€']
  },
  {
    id: 5,
    title: 'Pack of 5 pairs of Pokémon sockets',
    description:
      'Comfortable socks with fun Pokémon design, ideal for showing off your favorite Pokémon.',
    image: pokemonSockets,
    tags: ['15% DISCOUNT', '25,00€']
  },
  {
    id: 6,
    title: 'Pokémon Underpants',
    description:
      'A graphic T-shirt featuring your favorite Pokémon, ideal for fans looking to showcase their love for the iconic franchise.',
    image: pokemonUnderpants,
    tags: ['15% DISCOUNT', '10,00€']
  }
]

const Acessories = () => {
  return (
    <>
      <Header image={acessoriesBanner} title="Pokémon Apparel & Accessories" />
      <ProductsContainer products={products} />
    </>
  )
}

export default Acessories
