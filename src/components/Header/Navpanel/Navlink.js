import { Link } from "react-router-dom"
import styles from "./Navlink.module.scss"

export const Navlink = ({text, to}) => {
  return (
    <Link to={to} className={styles.navlink}>{text}</Link>
  )
}
