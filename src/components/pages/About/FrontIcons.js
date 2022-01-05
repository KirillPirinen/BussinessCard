import styles from "./About.module.scss"
import { FaReact, FaSass } from 'react-icons/fa';
import { SiRedux, SiHtml5, SiCss3, SiMaterialui, SiBootstrap, SiWebpack, SiReduxsaga, SiReactrouter, SiFigma } from 'react-icons/si';

export const FrontIcons = ({front}) => {
  return (
    <>
    <h4>{front}</h4>

    <div className={styles.container}>

      <div className={styles.icon}>
        <SiHtml5 className={styles.svg}/>
        <p>HTML</p>
      </div>
      <div className={styles.icon}>
        <SiCss3 className={styles.svg}/>
        <p>CSS</p>
      </div>
      <div className={styles.icon}>
        <FaSass className={styles.svg}/>
        <p>Sass</p>
      </div>
      <div className={styles.icon}>
        <FaReact className={styles.svg}/>
        <p>React</p>
      </div>
      <div className={styles.icon}>
        <SiReactrouter className={styles.svg}/>
        <p>ReactRouter</p>
      </div>
      <div className={styles.icon}>
        <SiRedux className={styles.svg}/>
        <p>Redux</p>
      </div>
      <div className={styles.icon}>
        <SiReduxsaga className={styles.svg}/>
        <p>ReduxSaga</p>
      </div>
      <div className={styles.icon}>
        <SiMaterialui className={styles.svg}/>
        <p>MUI</p>
      </div>
      <div className={styles.icon}>
        <SiBootstrap className={styles.svg}/>
        <p>Bootstrap</p>
      </div>
      <div className={styles.icon}>
        <SiWebpack className={styles.svg}/>
        <p>Webpack</p>
      </div>
      <div className={styles.icon}>
        <SiFigma className={styles.svg}/>
        <p>Figma</p>
      </div>
      
    </div>

    </>
  )
}
