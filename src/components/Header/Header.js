import { ContactButton } from "./ContactButton/ContactButton"
import { Toggle } from "./Logo/Toggle"
import { Navpanel } from "./Navpanel/Navpanel"
import styles from "./Header.module.css"
import { Modal } from "../Modal/Modal"

export const Header = ({setModal, signal, header, modal, switchLang, lang}) => {
  return (
    <>
    <div className={styles.container}>
      <Toggle switchLang={switchLang} lang={lang}/>
      <Navpanel navpanel={header.navpanel}/>
      <ContactButton setModal={setModal} contactButton={header.contactButton}/>
    </div>
    <Modal clickBodyHandler={setModal.bind(null, false)} signal={signal} modal={modal}/>
    </>
  )
}
