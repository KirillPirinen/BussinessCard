import styles from "./Main.module.scss"

export const Main = ({main}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>
          {main.h3} 
        </h3>
        {main.p?.map((text, i)=> <p key={String(i)}>{text}</p>)}
      </div>
      <div className={styles.image}></div>
    </div>
  )
}
