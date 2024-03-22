import type { ProjectAPITypes } from '../../infraestructure/projectAPIInterfaces'
import type { ProjectTypes } from '../../domain/projectInterfaces'
import { richtextAdapter } from './richtextAdapter'
import { imageAdapter } from './imageAdapter'
import { categoryAdapter } from './categoryAdapter'

export const projectAdapter = ({ id, attributes }: ProjectAPITypes): ProjectTypes => {
  const parsingCategories = attributes.categories?.data.map((category) => categoryAdapter(category))
  const parsingGallery = attributes.gallery.data.map((image) => imageAdapter(image))
  return {
    id,
    title: attributes.title,
    slug: attributes.slug,
    client: attributes.client,
    date: attributes.date,
    description: richtextAdapter(attributes.description),
    cover: imageAdapter(attributes.cover.data),
    categories: parsingCategories,
    gallery: parsingGallery,
    locale: attributes.locale
  }
}
