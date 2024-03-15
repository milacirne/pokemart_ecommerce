class Product {
  id: number
  title: string
  description: string
  image: string
  tags: string[]

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    tags: string[]
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.tags = tags
  }
}

export default Product
