import Header from '../../components/Header'
import ProductsContainer from '../../components/ProductsContainer'
import Product from '../../models/Product'

import comicsBanner from '../../assets/images/comics/comicsBanner.png'
import pokemonAdventures from '../../assets/images/comics/pokemon-adventures.png'
import handbook from '../../assets/images/comics/handbook.png'
import detectivePikachu from '../../assets/images/comics/detective-pikachu.png'
import talePikachu from '../../assets/images/comics/tale-pikachu.png'
import goldSilverAdventures from '../../assets/images/comics/pokemon-adventures-gold-silver.png'
import rubySapphireAdvetures from '../../assets/images/comics/pokemon-adventures-ruby-sapphire.png'

const products: Product[] = [
  {
    id: 1,
    title: 'Pokémon Adventures: Red & Blue Collection',
    description:
      'Join Red on his quest to become a Pokémon Master in the Pokémon Adventures Red & Blue Collection. This special edition includes the first two volumes of the manga series, packed with thrilling battles and memorable encounters.',
    image: pokemonAdventures,
    tags: ['25% DISCOUNT', '60,00€']
  },
  {
    id: 2,
    title: 'The Official Pokémon Handbook',
    description:
      'Dive into the world of Pokémon with The Official Pokémon Handbook. This comprehensive guide provides essential information on all your favorite Pokémon, including their abilities, habitats, and evolution chains. Perfect for fans of all ages!',
    image: handbook,
    tags: ['20% DISCOUNT', '45,00€']
  },
  {
    id: 3,
    title: 'Detective Pikachu Graphic Novel',
    description:
      'Embark on a thrilling adventure with Detective Pikachu Graphic Novel. Follow Pikachu and his partner Tim as they uncover mysteries and solve cases in Ryme City. Full of action, humor, and excitement, this graphic novel is a must-have for all Pokémon fans.',
    image: detectivePikachu,
    tags: ['15% DISCOUNT', '40,00€']
  },
  {
    id: 4,
    title: 'The Electric Tale of Pikachu Comic',
    description:
      'Join Ash and Pikachu on their epic journey through the Pokémon universe, encountering friends, foes, and unforgettable adventures along the way. With stunning artwork and engaging storytelling, this comic series is a timeless treasure for Pokémon enthusiasts.',
    image: talePikachu,
    tags: ['20% DISCOUNT', '38,00€']
  },
  {
    id: 5,
    title: 'Pokémon Adventures: Gold & Silver Collection',
    description:
      'Follow Gold, Silver, and their Pokémon companions on a journey filled with exciting challenges. This manga series offers a captivating blend of adventure, humor, and heartwarming moments that will keep readers hooked from start to finish.',
    image: goldSilverAdventures,
    tags: ['15% DISCOUNT', '55,00€']
  },
  {
    id: 6,
    title: 'Pokémon Adventures: Ruby & Sapphire Collection',
    description:
      'Join Ruby, Sapphire, and their Pokémon partners as they encounter new challenges, rivalries, and legendary Pokémon. This manga series offers thrilling battles and surprising plot twists.',
    image: rubySapphireAdvetures,
    tags: ['10% DISCOUNT', '60,00€']
  }
]

const Comics = () => {
  return (
    <>
      <Header image={comicsBanner} title="Pokémon Books and Comics" />
      <ProductsContainer products={products} />
    </>
  )
}

export default Comics
