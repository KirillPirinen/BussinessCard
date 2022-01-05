import { useState } from "react"
import { sendEmail } from "../../custom/mail"
import styles from "./Modal.module.scss"

export const Modal = ({signal, clickBodyHandler, modal}) => {

  const [message, setMessage] = useState(false)

  const submitHandler = (e) => {
    sendEmail(e)
      .then(result=> {
       setMessage(
         (
          <div className={styles.message}>
         <h4>{modal.successSent}</h4>
          <a onClick={setMessage.bind(null, false)}>{modal.succesRetry}</a>
         </div>
         )
         )
      })
      .catch(err=>{
        setMessage(
          (
          <div className={styles.message}>
            <h4>{modal.failSent}</h4>
            <a onClick={setMessage.bind(null, false)}>{modal.failRetry}</a>
          </div>
          )
        )
      })
  }

  return (
    <div onClick={clickBodyHandler} className={signal ? `${styles['info-modal']} ${styles.active}` : styles['info-modal']}>
      <h2 className={styles.clickhere}>{modal.exit}</h2> 
      <div onClick={(e) => e.stopPropagation()} className={styles['info-modal_content']}>
          <div className={styles.form}>
            {message || 
             <form name="bussness_form" onSubmit={(e)=>submitHandler(e)}>
             <label>
               <p>{modal.emailP}</p>
               <input placeholder={modal.emailHolder} name="from_name" className={styles.text} type="email" required={true}/>
             </label>
             <label>
               <p>{modal.areaP}</p>
               <input placeholder={modal.areaHolder} name='message' className={styles.area} type="textarea" required={true}/>
             </label>
             <hr/>
             <button>{modal.button}</button>
           </form>
            }
          </div>
      </div>
    </div>
  )
}
