import {  API_URL } from '../../config'
import type { ProjectAPITypes } from '../infraestructure/projectAPIInterfaces'

export const getProjectsFromAPI = async (): Promise<ProjectAPITypes[]> => {
  const res = await fetch(`${API_URL}/projects?populate=*`)
  if (!res.ok) {
    throw new Error('Failed to fetch projects data')
  }
  const { data } = await res.json()
  return data
}
