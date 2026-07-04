import styles from '../../styles/page.module.css'
import ProjectsList from '../../components/ProjectsList.js';

const Projects = () => {
    return (
      <main className={styles.main}>
        <ProjectsList />
      </main>
    );
}

export default Projects;
