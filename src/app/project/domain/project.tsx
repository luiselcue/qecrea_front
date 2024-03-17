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
    thumbnail: ImageFormatAPITypes
    small: ImageFormatAPITypes
    medium: ImageFormatAPITypes
    large: ImageFormatAPITypes
  }
  
  export interface ImageFormatAPITypes {
      name: string
      width: number
      height: number
      size: number
      url: string
  }