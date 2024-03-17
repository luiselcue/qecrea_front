import type { ImageAPITypes, ImageDataAPITypes, RichTextAPITypes } from '../../entities/entitiesInterfaces'

export interface ProjectsDataAPITypes {
  data: ProjectAPITypes[]
}

export interface ProjectAPITypes {
  id: string
  attributes: ProjectAttributesAPITypes
}

export interface ProjectAttributesAPITypes {
  title: string
  client?: null | string
  date?: null | Date
  description: RichTextAPITypes[]
  cover: ImageAPITypes
  categories?: null | CategoriesAPITypes
  gallery: GalleryAPITypes
  locale: string
  slug: string
}

interface GalleryAPITypes {
  data: ImageDataAPITypes[]
}

export interface CategoriesAPITypes {
  data: CategoryDataAPITypes[];
 }

 export interface CategoryDataAPITypes {
  id: string
  attributes: CategoryAttributesAPITypes
 }

 interface CategoryAttributesAPITypes {
  name: string
  slug: string
  locale: string
 }
