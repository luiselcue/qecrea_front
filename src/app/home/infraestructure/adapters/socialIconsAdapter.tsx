import type { SocialIconDataAPITypes } from '../homeAPIInterface'
import type { SocialIconTypes } from '../../domain/homeInterfaces'

export const socialIconsAdapter = ({ id, attributes }: SocialIconDataAPITypes): SocialIconTypes => {
  return {
    id,
    icon: attributes.icon,
    label: attributes.label,
    url: attributes.url
  }
}
