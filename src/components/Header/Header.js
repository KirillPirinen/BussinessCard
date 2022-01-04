import { ContactButton } from "./ContactButton/ContactButton"
import { Logo } from "./Logo/Logo"
import { Navpanel } from "./Navpanel/Navpanel"
import styles from "./Header.module.css"
import { Modal } from "../Modal/Modal"

export const Header = ({setModal, modal}) => {
  return (
    <>
    <div className={styles.container}>
      <Logo/>
      <Navpanel/>
      <ContactButton setModal={setModal}/>
    </div>
    <Modal clickBodyHandler={setModal.bind(null, false)} signal={modal}/>
    </>
  )
}
