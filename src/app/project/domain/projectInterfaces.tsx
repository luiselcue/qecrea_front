export interface ProjectTypes {
  id: string
  title: string
  slug: string
  client?: null | string
  date?: null | Date
  description: string
  cover: ImageAttributesTypes
  categories?: null | CategoryTypes[]
  gallery: ImageAttributesTypes[]
  locale: string
}

export interface CategoryTypes {
  id: string
  name: string
  slug: string
}

export interface ImageAttributesTypes {
  id: number
  url: string
  name?: null | string
  alternativeText?: null | string
  width: number
  height: number
  formats?: null | ImageFormatsTypes
}
export interface ImageFormatsTypes {
  thumbnail: ImageFormatTypes
  small: ImageFormatTypes
  medium: ImageFormatTypes
  large: ImageFormatTypes
}

export interface ImageFormatTypes {
  name: null | string
  width: number
  height: number
  size: number
  url: string
}
