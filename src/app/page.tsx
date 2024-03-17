import type { ProjectTypes } from './project/domain/project'
import {getProjectsFromAPI } from './project/infraestructure/getProjectsFromAPI'
import { getProjects} from './project/application/getProjects'
import styles from './page.module.css'

const Home = async () => {
  const APIprojects = await getProjectsFromAPI()
  const parsingProjects = getProjects(APIprojects)
  return (
    <main className={styles.main}>
      <div className={styles.projects}>
        <ul>
          {}
          {parsingProjects.map(( project : ProjectTypes) => {
            return (
              <li key={project.id}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <img src={project.cover.url} alt={project.cover.alternativeText || ''} width='300' />
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}

export default Home
