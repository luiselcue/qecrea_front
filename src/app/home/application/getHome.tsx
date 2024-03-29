import type { HomeAPITypes } from '../infraestructure/homeAPIInterface'
import type { HomeTypes } from '../domain/homeInterfaces'
import { homeAdapter } from '../infraestructure/adapters/homeAdapter'

export const getHome = (homeFromAPI: HomeAPITypes): HomeTypes => {
  return homeAdapter(homeFromAPI)
}
