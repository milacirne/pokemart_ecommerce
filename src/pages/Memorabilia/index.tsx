import Header from '../../components/Header'
import ProductsContainer from '../../components/ProductsContainer'
import Product from '../../models/Product'

import memorabiliaBanner from '../../assets/images/memorabilia/memorabiliaBanner.png'
import pikachuPhoneCase from '../../assets/images/memorabilia/pikachu-phone-case.png'
import eeveeMug from '../../assets/images/memorabilia/eevee-mug.png'
import keychans from '../../assets/images/memorabilia/keychans.png'
import cableProtector from '../../assets/images/memorabilia/cable-protector.png'
import earbuds from '../../assets/images/memorabilia/earbuds.png'
import waterBottle from '../../assets/images/memorabilia/water-bottle.png'

const products: Product[] = [
  {
    id: 1,
    title: 'Pikachu Phone Case',
    description:
      "Protect your phone with Pikachu! This cute and colorful phone case showcases Pikachu's playful charm while keeping your device safe from scratches and bumps.",
    image: pikachuPhoneCase,
    tags: ['10% DISCOUNT', '15,00€']
  },
  {
    id: 2,
    title: 'Eevee Mug',
    description:
      'Enhance your morning ritual with the adorable charm of this Eevee mug. Emblazoned with a delightful Eevee design, it brings a touch of Pokémon magic.',
    image: eeveeMug,
    tags: ['8% DISCOUNT', '20,00€']
  },
  {
    id: 3,
    title: 'Pokémon Keychans',
    description:
      "Add a touch of Pokémon charm to your keys with these Pokémon keychains. Whether you're a seasoned Trainer or just starting your journey, these keychains are sure to bring you a smile.",
    image: keychans,
    tags: ['10% DISCOUNT', '10,00€']
  },
  {
    id: 4,
    title: 'Pokémon Cable Protectors',
    description:
      'Protect your charging cables in style with these adorable Pokémon cable protectors. Designed to prevent fraying and damage, they feature iconic Pokémon characters.',
    image: cableProtector,
    tags: ['5% DISCOUNT', '5,00€']
  },
  {
    id: 5,
    title: 'Pikachu wireless earbuds',
    description:
      'Enjoy high-quality sound while showcasing your love for the most iconic Pokémon. With a sleek design and wireless functionality, these earbuds are perfect for Pokémon fans on the go.',
    image: earbuds,
    tags: ['10% DISCOUNT', '50,00€']
  },
  {
    id: 6,
    title: 'Pokémon Water Bottle',
    description:
      'Stay hydrated on your adventures with this Pokémon water bottle. Featuring vibrant Pokémon designs, this durable bottle is perfect for quenching your thirst during training sessions.',
    image: waterBottle,
    tags: ['5% DISCOUNT', '20,00€']
  }
]

const Memorabilia = () => {
  return (
    <>
      <Header image={memorabiliaBanner} title="Pokémon Books and Comics" />
      <ProductsContainer products={products} />
    </>
  )
}

export default Memorabilia
