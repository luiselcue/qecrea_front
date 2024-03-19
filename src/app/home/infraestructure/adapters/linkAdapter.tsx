import type { LinkTypes } from '../../../entities/entitiesInterfaces'
import type { LegalLinkTypes } from '../../domain/home'

export const linkAdapter = ({ id, label, url }: LinkTypes):LegalLinkTypes => {
    return {
        id,
        label,
        url
    }
}