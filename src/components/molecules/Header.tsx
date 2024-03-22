import type { CategoryTypes, ImageFormatTypes } from '../../app/project/domain/projectInterfaces'
import type { LegalLinkAPITypes, SocialIconTypes } from '../../app/home/domain/homeInterfaces'

export const Header = (props) => {
  return <header className='header'>{props.socialMenu[0].label}</header>
}
