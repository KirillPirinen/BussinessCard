import { Navlink } from "./Navlink"
import styles from "./Navpanel.module.scss"

export const Navpanel = ({navpanel}) => {
  return (
    <nav className={styles.container}>
      {navpanel?.map(link => <Navlink key={link.name} to={link.path} text={link.name} />)}
    </nav>
  )
}
