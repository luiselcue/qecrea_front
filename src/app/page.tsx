import { getCategories } from './infraestructure/categories'
import { getProjects, getProjectCover, getTextFromRichtext } from './infraestructure/getProjectsFromAPI'
import type { CategoryTypes } from './domain/categoryInterfaces'
import type { ProjectTypes } from './domain/projectInterfaces'
import styles from './page.module.css'

const Home = async (): Promise<JSX.Element> => {
  const categories = await getCategories()
  const projects = await getProjects()
  return (
    <main className={styles.main}>
      <div className={styles.categories}>
        <ul>
          {categories.map(({ id, attributes }: CategoryTypes) => {
            const categoryProjectsData = attributes.projects.data
            const firstCategoryProject = categoryProjectsData[0].attributes
            console.log(firstCategoryProject)
            return (
              <li key={id}>
                <h3>{firstCategoryProject.title}</h3>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={styles.projects}>
        <ul>
          {/*projects.map(({ id, attributes }: ProjectTypes) => {
            const description = getTextFromRichtext(attributes.description)
            const cover = getProjectCover(attributes.cover)
            return (
              <li key={id}>
                <h3>{attributes.title}</h3>
                <p>{description}</p>
                <img src={cover.url} alt={cover.alternativeText || ''} width='300' />
              </li>
            )
          })*/}
        </ul>
      </div>
    </main>
  )
}

export default Home
