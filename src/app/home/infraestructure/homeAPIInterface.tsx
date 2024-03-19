import type { CategoriesAPITypes } from '../../project/infraestructure/projectAPIInterfaces'
import type { FormatAPITypes, LinkTypes } from '../../entities/entitiesInterfaces'

export interface HomeDataAPITypes {
  data: HomeAPITypes
}

export interface HomeAPITypes {
  id: number
  attributes: HomeAttributesAPITypes
}

export interface HomeAttributesAPITypes {
  categories: null | CategoriesAPITypes
  copy: string
  legallinks: LinkTypes[]
  locale: string
  logo: LogoAPITypes
  pages: LinkTypes[]
  socialicons: SocialIconsTypes
}

export interface LogoAPITypes {
  data: LogoDataTypes
}

export interface LogoDataTypes {
  id: number
  attributes: FormatAPITypes
}

export interface SocialIconsTypes {
  data: SocialIconDataTypes[]
}

export interface SocialIconDataTypes {
  attributes: SocialIconAttributes
  id: number
}

export interface SocialIconAttributes {
  name: string
  url: string
}
