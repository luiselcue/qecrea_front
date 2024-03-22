import type { CategoryDataAPITypes } from '../projectAPIInterfaces'
import type { CategoryTypes } from '../../domain/projectInterfaces'

export const categoryAdapter = ({ id, attributes }: CategoryDataAPITypes): CategoryTypes => {
  return {
    id,
    name: attributes.name,
    slug: attributes.slug
  }
}
