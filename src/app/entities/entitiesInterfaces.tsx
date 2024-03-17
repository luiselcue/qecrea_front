export interface ImageAPITypes {
  data: ImageDataAPITypes
}

export interface ImageDataAPITypes {
  attributes: ImageAttributesAPITypes
  id: number
}

interface ImageAttributesAPITypes {
  id: number
  url: string
  name?: null | string
  alternativeText?: null | string
  width: number
  height: number
  size: number
  formats: FormatsAPITypes
}

export interface FormatsAPITypes {
  thumbnail: FormatAPITypes
  small: FormatAPITypes
  medium: FormatAPITypes
  large: FormatAPITypes
}

export interface FormatAPITypes {
    name: string
    width: number
    height: number
    size: number
    url: string
}

export interface RichTextAPITypes {
  children: RichTextChildAPITypes[]
  type: string
}

interface RichTextChildAPITypes {
  text: string
  type: string
}
