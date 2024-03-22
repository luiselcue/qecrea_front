import type { ProjectAPITypes } from '../infraestructure/projectAPIInterfaces'
import type { ProjectTypes } from '../domain/projectInterfaces'
import { projectAdapter } from '../infraestructure/adapters/projectAdapter'

export const getProjects = (projectsFromAPI: ProjectAPITypes[]): ProjectTypes[] => {
  return projectsFromAPI.map((projectData) => {
    return projectAdapter(projectData)
  })
}
