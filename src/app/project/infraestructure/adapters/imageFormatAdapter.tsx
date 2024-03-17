import {STRAPI_URL} from '../../../config'
import type { FormatAPITypes } from '../../../entities/entitiesInterfaces'
import type { ImageFormatAPITypes } from '../../domain/project'

export const imageFormatAdapter = (imageFormat: FormatAPITypes): ImageFormatAPITypes => {
  return {
    name: imageFormat.name,
    width: imageFormat.width,
    height: imageFormat.height,
    size: imageFormat.size,
    url: `${STRAPI_URL}${imageFormat.url}`
  }
}
