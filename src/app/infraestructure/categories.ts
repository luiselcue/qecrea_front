import { STRAPI_URL, API_URL } from '../config'
import type { CategoryTypes } from '../domain/categoryInterfaces'

export const getCategories = async (): Promise<CategoryTypes[]> => {
  const res = await fetch(`${API_URL}/categories?populate=*`)
  if (!res.ok) {
    throw new Error('Failed to fetch categories data')
  }
  const { data } = await res.json()
  return data
}