import styles from "./About.module.scss"
import photo from "../../../photo_.png";
import { FrontIcons } from "./FrontIcons";
import { BackIcons } from "./BackIcons";
import { CommonIcons } from "./CommonIcons";

export const About = ({about}) => {
  return (
  <div className={styles.wrapper}>
  <div className={styles.container}>
    <div className={styles.content}>
      {about.h3?.map((el, i, arr) => {
        if(arr[i+1]) {
          return (
            <h3 key={String(i)}>{el}<hr/></h3>
          )
        } else {
          return <h3 key={String(i)}>{el}</h3>
        }
      })}

      {
        about.p?.map((el, i)=><p key={String(i)}>{el}</p>)
      }

    </div>
    <img alt="photo" className={styles.image} src={photo}></img>
  </div>
    <FrontIcons front={about.front}/>
    <BackIcons back={about.back}/>
    <CommonIcons common={about.common}/>
  </div>
  )
}
