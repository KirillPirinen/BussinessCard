import styles from "./About.module.scss"
import { SiGit, SiJest, SiCypress, SiNpm, SiJavascript, SiTypescript, SiExpo, SiPostman } from 'react-icons/si';
import { MdHttp } from 'react-icons/md'

export const CommonIcons = () => {
  return (
    <>
    <h4>Common technologies: </h4>

    <div className={styles.container}>

      <div className={styles.icon}>
        <SiJavascript className={styles.svg}/>
        <p>JavaScript</p>
      </div>
      <div className={styles.icon}>
        <SiTypescript className={styles.svg}/>
        <p>TypeScript</p>
      </div>
      <div className={styles.icon}>
        <SiGit className={styles.svg}/>
        <p>Git</p>
      </div>
      <div className={styles.icon}>
        <MdHttp className={styles.svg}/>
        <p>HTTP</p>
      </div>
      <div className={styles.icon}>
        <SiJest className={styles.svg}/>
        <p>Jest</p>
      </div>
      <div className={styles.icon}>
        <SiCypress className={styles.svg}/>
        <p>Cypress</p>
      </div>
      <div className={styles.icon}>
        <SiNpm className={styles.svg}/>
        <p>Npm</p>
      </div>
      <div className={styles.icon}>
        <SiExpo className={styles.svg}/>
        <p>Expo</p>
      </div>
      <div className={styles.icon}>
        <SiPostman className={styles.svg}/>
        <p>Postman</p>
      </div>
      
    </div>

    </>
  )
}
