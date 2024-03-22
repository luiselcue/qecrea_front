import type { CategoriesAPITypes } from '../../project/infraestructure/projectAPIInterfaces'
import type { FormatAPITypes, LinkAPITypes } from '../../entities/entitiesInterfaces'

export interface HomeDataAPITypes {
  data: HomeAPITypes
}

export interface HomeAPITypes {
  id: number
  attributes: HomeAttributesAPITypes
}

export interface HomeAttributesAPITypes {
  categories?: null | CategoriesAPITypes
  copy: string
  legallinks: LinkAPITypes[]
  locale: string
  logo: LogoAPITypes
  pages?: null | LinkAPITypes[]
  socialicons: SocialIconsAPITypes
}

export interface LogoAPITypes {
  data: LogoDataAPITypes
}

export interface LogoDataAPITypes {
  id: number
  attributes: FormatAPITypes
}

export interface SocialIconsAPITypes {
  data: SocialIconDataAPITypes[]
}

export interface SocialIconDataAPITypes {
  id: number
  attributes: SocialIconAttributesAPITypes
}

export interface SocialIconAttributesAPITypes {
  icon: string
  label: string
  url: string
}
