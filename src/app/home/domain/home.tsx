import {ImageFormatTypes} from "../../project/domain/project"

export interface HomeTypes {
  id: number
  logo: ImageFormatTypes
  categories?: null | CategoryTypes[]
  legallinks: LegalLinkTypes[]
  copy: string
  locale: string
  pages: LegalLinkTypes[]
  socialicons: SocialIconsTypes[]
}

export interface LogoImageTypes {
  name: string
  width: number
  height: number
  size: number
  url: string
}

export interface CategoryTypes {
  id: string
  name: string
  slug: string
}

export interface LegalLinkTypes {
  id: number
  label: string
  url: string
}

export interface SocialIconsTypes {
  id: number
  name: string
  url: string
}
