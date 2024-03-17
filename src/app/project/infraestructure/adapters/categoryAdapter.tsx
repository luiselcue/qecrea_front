import { CategoryDataAPITypes } from '../projectAPIInterfaces'
import { CategoryTypes } from '../../domain/project'

export const categoryAdapter = ({ id, attributes }: CategoryDataAPITypes): CategoryTypes => {
  return {
    id,
    name: attributes.name,
    slug: attributes.slug
  }
}
