class Category {
  id: number
  title: string
  description: string
  image: string
  infos: string
  slug: string

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    infos: string,
    slug: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.infos = infos
    this.slug = slug
  }
}

export default Category
