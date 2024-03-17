import {STRAPI_URL} from '../../../config'
import type { ImageDataAPITypes } from '../../../entities/entitiesInterfaces'
import type { ImageAttributesTypes } from '../../domain/project'
import { formatsAdapter } from './formatsAdapter'

export const imageAdapter = ({ id, attributes }: ImageDataAPITypes): ImageAttributesTypes => {
  return {
    id,
    url:`${STRAPI_URL}${attributes.url}`,
    name: attributes.name,
    alternativeText: attributes.alternativeText,
    width: attributes.width,
    height: attributes.height,
    formats: formatsAdapter(attributes.formats)
  }
}
