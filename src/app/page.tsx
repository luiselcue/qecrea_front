import type { ProjectTypes } from './project/domain/projectInterfaces'
import { getProjectsFromAPI } from './project/infraestructure/getProjectsFromAPI'
import { getHomeFromAPI } from './home/infraestructure/getHomeFromAPI'
import { getHome } from './home/application/getHome'
import { Header } from '../components/molecules/Header'
import { getProjects } from './project/application/getProjects'
import styles from './page.module.css'

const Home = async () => {
  const APIProjects = await getProjectsFromAPI()
  const parsingProjects = getProjects(APIProjects)
  const APIHome = await getHomeFromAPI()
  const parsingHome = getHome(APIHome)
  return (
    <>
      <Header
        leftMenu={parsingHome.categories}
        mainLogo={parsingHome.logo}
        rightMenu={parsingHome.pages}
        socialMenu={parsingHome.socialicons}
      />
      <main className={styles.main}>
        <div className={styles.projects}>
          <ul>
            {parsingProjects.map((project: ProjectTypes) => {
              return (
                <li key={project.id}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <img src={project.cover.formats?.thumbnail.url} alt={project.cover.alternativeText || ''} />
                </li>
              )
            })}
          </ul>
        </div>
      </main>
    </>
  )
}

export default Home
