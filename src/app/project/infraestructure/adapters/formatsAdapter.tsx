import type { FormatsAPITypes } from '../../../entities/entitiesInterfaces'
import type { ImageFormatsTypes } from '../../domain/projectInterfaces'
import { imageFormatAdapter } from './imageFormatAdapter'

export const formatsAdapter = (formats: FormatsAPITypes): ImageFormatsTypes => {
  return {
    thumbnail: imageFormatAdapter(formats.thumbnail),
    small: imageFormatAdapter(formats.small),
    medium: imageFormatAdapter(formats.medium),
    large: imageFormatAdapter(formats.large)
  }
}
