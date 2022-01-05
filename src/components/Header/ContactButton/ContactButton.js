import styles from "./ContactButton.module.scss"

export const ContactButton = ({setModal, contactButton}) => {
  return (
    <div onClick={setModal.bind(null, true)} className={styles.container}>
      <div>{contactButton}</div>
    </div>
  )
}
