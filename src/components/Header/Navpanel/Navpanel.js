import { Navlink } from "./Navlink"
import styles from "./Navpanel.module.css"

export const Navpanel = () => {
  return (
    <nav className={styles.container}>
      <Navlink to='/' text='Home' />
      <Navlink to='/about' text='About me' />
      <Navlink to='/contacts' text='Contacts' />
    </nav>
  )
}
