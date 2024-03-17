import type { RichTextAPITypes } from '../../../entities/entitiesInterfaces'

export const richtextAdapter = (richTextNodes: RichTextAPITypes[]): string => {
  return richTextNodes[0]?.children[0]?.text ?? ''
}
