import type { FormatAPITypes } from '../../../entities/entitiesInterfaces'
import type { ImageFormatTypes } from '../../domain/projectInterfaces'
import { STRAPI_URL } from '../../../config'

export const imageFormatAdapter = (imageFormat: FormatAPITypes): ImageFormatTypes => {
  return {
    name: imageFormat.name,
    width: imageFormat.width,
    height: imageFormat.height,
    size: imageFormat.size,
    url: `${STRAPI_URL}${imageFormat.url}`
  }
}
