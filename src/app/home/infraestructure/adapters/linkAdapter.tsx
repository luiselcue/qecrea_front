import type { LinkAPITypes } from '../../../entities/entitiesInterfaces'
import type { LegalLinkAPITypes } from '../../domain/homeInterfaces'

export const linkAdapter = ({ id, label, url }: LinkAPITypes): LegalLinkAPITypes => {
  return {
    id,
    label,
    url
  }
}
