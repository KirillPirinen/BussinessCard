import styles from "./About.module.scss"
import { SiExpress, SiNodedotjs, SiPostgresql, SiSequelize, SiRedis, SiNextdotjs } from 'react-icons/si';

export const BackIcons = () => {
  return (
    <>
    <h4>Technologies I use on Back-end part: </h4>

    <div className={styles.container}>

      <div className={styles.icon}>
        <SiNodedotjs className={styles.svg}/>
        <p>Node.js</p>
      </div>
      <div className={styles.icon}>
        <SiExpress className={styles.svg}/>
        <p>Express.js</p>
      </div>
      <div className={styles.icon}>
        <SiNextdotjs className={styles.svg}/>
        <p>Next.js</p>
      </div>
      <div className={styles.icon}>
        <SiPostgresql className={styles.svg}/>
        <p>PostgreSQL</p>
      </div>
      <div className={styles.icon}>
        <SiSequelize className={styles.svg}/>
        <p>SequelizeORM</p>
      </div>
      <div className={styles.icon}>
        <SiRedis className={styles.svg}/>
        <p>Redis</p>
      </div>
      
    </div>

    </>
  )
}
