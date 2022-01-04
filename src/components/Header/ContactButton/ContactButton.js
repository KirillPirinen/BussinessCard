import styles from "./ContactButton.module.scss"

export const ContactButton = ({setModal}) => {
  return (
    <div onClick={setModal.bind(null, true)} className={styles.container}>
      <div>Send me a letter</div>
    </div>
  )
}
