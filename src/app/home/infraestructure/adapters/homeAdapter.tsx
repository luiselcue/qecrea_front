import type { HomeAPITypes } from '../homeAPIInterface'
import type { HomeTypes } from '../../domain/home'
import { imageFormatAdapter } from '../../../project/infraestructure/adapters/imageFormatAdapter'
import { categoryAdapter } from '../../../project/infraestructure/adapters/categoryAdapter'
import { linkAdapter } from '../../../home/infraestructure/adapters/linkAdapter'
import { socialIconsAdapter } from '../../../home/infraestructure/adapters/socialIconsAdapter'

export const homeAdapter = ({ id, attributes }: HomeAPITypes): HomeTypes => {
  const logoAttributes = attributes.logo.data?.attributes
  const parsingLogo = imageFormatAdapter(logoAttributes)
  const parsingCategories = attributes.categories?.data.map((category) => categoryAdapter(category))
  const parsingIcons = attributes.socialicons?.data.map((icon) => socialIconsAdapter(icon))
  const parsingLinks = attributes.legallinks?.map((link) => linkAdapter(link))
  return {
    id,
    logo: parsingLogo,
    categories: parsingCategories,
    copy: attributes.copy,
    legallinks: parsingLinks,
    locale: attributes.locale,
    pages: attributes.pages,
    socialicons: parsingIcons
  }
}
