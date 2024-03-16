import { STRAPI_URL, API_URL } from '../config'
import type { ProjectTypes, DescriptionTypes, CoverTypes, ImageAttributesTypes } from '../domain/projectInterfaces'

export const getProjects = async (): Promise<ProjectTypes[]> => {
  const res = await fetch(`${API_URL}/projects?populate=*`)
  if (!res.ok) {
    throw new Error('Failed to fetch projects data')
  }
  const { data } = await res.json()
  return data
}

export const getProjectCover = (coverNode: CoverTypes): ImageAttributesTypes => {
  const cover = coverNode.data.attributes
  cover['url'] = `${STRAPI_URL}${cover.url}`
  return cover
}

export const getTextFromRichtext = (textNode: DescriptionTypes[]): string => {
  const descriptionData = textNode.length > 0 && textNode[0]
  return descriptionData && descriptionData.children.length > 0 ? descriptionData.children[0].text : ''
}