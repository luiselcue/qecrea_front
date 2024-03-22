import type { ImageFormatTypes } from '../../project/domain/projectInterfaces'

export interface HomeTypes {
  id: number
  logo: ImageFormatTypes
  categories?: null | CategoryTypes[]
  legallinks: LegalLinkAPITypes[]
  copy: string
  locale: string
  pages?: null | LegalLinkAPITypes[]
  socialicons: SocialIconTypes[]
}

export interface LogoImageTypes {
  name?: string
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

export interface LegalLinkAPITypes {
  id: number
  label: string
  url: string
}

export interface SocialIconTypes {
  id: number
  icon: string
  label: string
  url: string
}
