import styles from "./Main.module.scss"

export const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>
          Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 
        </h3>
        <p>
          Ipsum is that it has a more-or-less normal distribution of letters
        </p>
      </div>
      <div className={styles.image}></div>
    </div>
  )
}
