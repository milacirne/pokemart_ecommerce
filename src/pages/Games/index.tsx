import Header from '../../components/Header'
import ProductsContainer from '../../components/ProductsContainer'
import Product from '../../models/Product'

import gamesBanner from '../../assets/images/games/games-banner.png'
import scarletViolet from '../../assets/images/games/scarlet-violet.png'
import arceus from '../../assets/images/games/arceus.png'
import letsgo from '../../assets/images/games/letsgo.png'
import pearlDiamond from '../../assets/images/games/pearldiamond.png'
import swordShield from '../../assets/images/games/sword-shield.png'
import pokemonSnap from '../../assets/images/games/newpokemonsnap.png'

const products: Product[] = [
  {
    id: 1,
    title: 'Pokémon Scarlet-Violet',
    description:
      "In Pokémon Scarlet and Violet, trainers explore Paldea's diverse lands, where Pokémon experience the Terastal Phenomenon, shining like gemstones and gaining special powers.",
    image: scarletViolet,
    tags: ['20% DISCOUNT', '48,00€']
  },
  {
    id: 2,
    title: 'Pokémon Legends Arceus',
    description:
      "Pokémon Legends: Arceus explores ancient Sinnoh pre-Pokémon games. Players encounter Pokémon in natural habitats to complete the region's first Pokédex and uncover history.",
    image: arceus,
    tags: ['25% DISCOUNT', '45,00€']
  },
  {
    id: 3,
    title: "Pokémon Let's Go Eevee-Let's Go Pikachu",
    description:
      'Modernized remakes of Pokémon Yellow. Players capture and battle Pokémon, enjoying updated graphics and mechanics for a nostalgic experience.',
    image: letsgo,
    tags: ['30% DISCOUNT', '42,00€']
  },
  {
    id: 4,
    title: 'Pokémon Brilliant Diamond and Shining Pearl',
    description:
      'Set in Sinnoh, players embark on a journey to become Pokémon Trainers, challenge Gym Leaders, and explore diverse landscapes.',
    image: pearlDiamond,
    tags: ['20% DISCOUNT', '40,00€']
  },
  {
    id: 5,
    title: 'Pokémon Sword-Shield',
    description:
      'et in Galar, follow players on their quest to become Pokémon Champions. With new features and a vast world to explore, trainers engage in thrilling battles and adventures.',
    image: swordShield,
    tags: ['15% DISCOUNT', '42,50€']
  },
  {
    id: 6,
    title: 'New Pokémon Snap',
    description:
      'Explore picturesque landscapes teeming with Pokémon in New Pokémon Snap. Armed with your camera, venture through diverse habitats to capture stunning photos and uncover hidden secrets.',
    image: pokemonSnap,
    tags: ['30% DISCOUNT', '35,00€']
  }
]

const Games = () => {
  return (
    <>
      <Header image={gamesBanner} title="Pokémon Games" />
      <ProductsContainer products={products} />
    </>
  )
}

export default Games
