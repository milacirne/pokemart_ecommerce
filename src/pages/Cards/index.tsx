import Header from '../../components/Header'
import ProductsContainer from '../../components/ProductsContainer'
import Product from '../../models/Product'

import cardsBanner from '../../assets/images/cards/cardsBanner.png'
import swordShieldBoosters from '../../assets/images/cards/sword-shield-boosters.png'
import chillingReign from '../../assets/images/cards/chilling-reign.png'
import unifiedMinds from '../../assets/images/cards/unified-minds.png'
import evolvingSkies from '../../assets/images/cards/evolving-skies.png'
import shiningFates from '../../assets/images/cards/shining-fates.png'
import collectorChest from '../../assets/images/cards/collector-chest.png'

const products: Product[] = [
  {
    id: 1,
    title: 'Sword & Shield-Battle Styles Booster',
    description:
      'Enhance your Pokémon TCG experience with the Sword & Shield—Battle Styles Booster, packed with new battle styles and powerful Pokémon cards.',
    image: swordShieldBoosters,
    tags: ['10% DISCOUNT', '15,00€']
  },
  {
    id: 2,
    title: 'Sword & Shield Chilling Reign Elite Trainer Box',
    description:
      'Unleash your skills with the Pokémon TCG: Chilling Reign Elite Trainer Box, featuring exclusive cards and essential accessories for your collection.',
    image: chillingReign,
    tags: ['5% DISCOUNT', '110,00€']
  },
  {
    id: 3,
    title: 'Unified Minds Booster',
    description:
      'Dive into the Pokémon TCG: Unified Minds Booster pack and discover powerful new cards to enhance your deck and take your battles to the next level.',
    image: unifiedMinds,
    tags: ['10% DISCOUNT', '12,00€']
  },
  {
    id: 4,
    title: 'Evolving Skies Build & Battle Box',
    description:
      'Elevate your game with Pokémon TCG: Evolving Skies Build & Battle Box, packed with powerful cards for intense matches.',
    image: evolvingSkies,
    tags: ['5% DISCOUNT', '100,00€']
  },
  {
    id: 5,
    title: 'Shining Fates Premium Collection',
    description:
      'Unleash the power of Pokémon TCG: Shining Fates Premium Collection — Quick Strike, featuring exclusive cards and treasures for collectors.',
    image: shiningFates,
    tags: ['10% DISCOUNT', '120,00€']
  },
  {
    id: 6,
    title: 'Celebrations Collector Chest',
    description:
      "Embrace Pokémon nostalgia with Celebrations Collector Chest, a treasure trove of iconic cards and collectibles celebrating Pokémon's rich history.",
    image: collectorChest,
    tags: ['8% DISCOUNT', '60,00€']
  }
]

const Cards = () => {
  return (
    <>
      <Header image={cardsBanner} title="Pokémon Trading Cards Games" />
      <ProductsContainer products={products} />
    </>
  )
}

export default Cards
