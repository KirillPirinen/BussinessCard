import styles from "./Logo.module.scss"

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.line1}></div>
      <div className={styles.line2}></div>
    </div>
  )
}
