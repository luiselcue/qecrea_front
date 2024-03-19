import {  API_URL } from '../../config'
import type { HomeAPITypes } from './homeAPIInterface'

export const getHomeFromAPI = async (): Promise<HomeAPITypes[]> => {
  const res = await fetch(`${API_URL}/home?populate=*`)
  if (!res.ok) {
    throw new Error('Failed to fetch home data')
  }
  const { data } = await res.json()
  return data
}
