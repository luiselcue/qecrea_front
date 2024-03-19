import type {SocialIconDataTypes} from '../homeAPIInterface'
import type {SocialIconsTypes} from '../../domain/home'

export const socialIconsAdapter = ({ id, attributes }: SocialIconDataTypes):SocialIconsTypes => {
    return {
        id,
        name: attributes.name,
        url: attributes.url
    }
}