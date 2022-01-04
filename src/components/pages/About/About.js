import styles from "./About.module.scss"
import photo from "../../../photo.png";
import { FrontIcons } from "./FrontIcons";
import { BackIcons } from "./BackIcons";
import { CommonIcons } from "./CommonIcons";

export const About = () => {
  return (
  <div className={styles.wrapper}>
  <div className={styles.container}>
    <div className={styles.content}>
      <h3>Hi there ! I'm Kirill and 
        I'am a JavaScript Developer from Moscow!
        <hr/>
        I can help you with building your own Amazon 😉.
      </h3>

      <p>🤟 I like to write code!</p>
      <p>🤔 Where can you find me?</p>

    </div>
    <img className={styles.image} src={photo}></img>
  </div>
  <FrontIcons/>
  <BackIcons/>
  <CommonIcons/>
  </div>
  )
}
