import type { CategoryTypes, ImageFormatTypes } from '../../app/project/domain/projectInterfaces'
import type { LegalLinkAPITypes, SocialIconTypes } from '../../app/home/domain/homeInterfaces'

export const Header = (
  leftMenu: CategoryTypes[],
  mainLogo: ImageFormatTypes,
  rightMenu: LegalLinkAPITypes[],
  socialMenu: SocialIconTypes[]
) => {
  return (
    <header className='header'>
      <div className='main-menu'>
        <div className='categories-menu'>
          <ul className='categories-menu_list'>
            {leftMenu?.map(({ id, name, slug }: CategoryTypes) => {
              return (
                <li key={id} className='categories-menu_list_item'>
                  <a href={slug} className='categories-menu_link'>
                    {name}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='main-logo'>
          <a href='#' className='main-logo_link'>
            <img src={mainLogo.url} alt='qecrea logo' />
          </a>
        </div>
        <div className='pages-menu'>
          <ul className='pages-menu_list'>
            {rightMenu?.map(({ id, label, url }: LegalLinkAPITypes) => {
              return (
                <li key={id} className='pages-menu_list_item'>
                  <a href={url} className='pages-menu_link'>
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className='social-menu'>
        <ul className='social-menu_list'>
          {socialMenu.map(({ icon, label, url }: SocialIconTypes) => {
            return (
              <li key={label} className='social-menu_list_item'>
                <a href={url} className='social-menu_link'>
                  <img src={icon} alt={label} />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
