export interface ProjectDataTypes {
  data: ProjectTypes[]
}

export interface ProjectTypes {
  id: string
  attributes: ProjectAttributeTypes
}

interface ProjectAttributeTypes {
  title: string
  client?: null | string
  date?: null | Date
  description: DescriptionTypes[]
  cover: CoverTypes
  categories?: null | CategoriesTypes
  gallery: CategoriesTypes
  locale: string
  localizations: CategoriesTypes
  slug: string
}

interface CategoriesTypes {
  data: ImageDataTypes[];
 }

export interface CoverTypes {
  data: ImageDataTypes
}

interface ImageDataTypes {
  attributes: ImageAttributesTypes
  id: number
}

export interface ImageAttributesTypes {
  url: string
  previewUrl: string
  name?: null | string
  alternativeText?: null | string
  width: number
  height: number
}

export interface DescriptionTypes {
  children: DescriptionChildTypes[]
  type: string
}

interface DescriptionChildTypes {
  text: string
  type: string
}