import { useState } from "react"
import { sendEmail } from "../../custom/mail"
import styles from "./Modal.module.scss"

export const Modal = ({signal, clickBodyHandler}) => {

  const [message, setMessage] = useState(false)

  const submitHandler = (e) => {
    sendEmail(e)
      .then(result=> {
       setMessage(
         (
          <>
         <h4>The message have been sent successfully. Please wait for an answer</h4>
          <a onClick={setMessage.bind(null, false)}>Send another letter</a>
         </>
         )
         )
      })
      .catch(err=>{
        setMessage(
          (
          <>
            <h4>The message haven't been sent. You can try again or use another channel to contact me.</h4>
            <a onClick={setMessage.bind(null, false)}>Try again</a>
          </>
          )
        )
      })
  }

  return (
    <div onClick={clickBodyHandler} className={signal ? `${styles['info-modal']} ${styles.active}` : styles['info-modal']}>
      <h2 className={styles.clickhere}>Click to exit</h2> 
      <div onClick={(e) => e.stopPropagation()} className={styles['info-modal_content']}>
          <div className={styles.form}>
            {message || 
             <form name="bussness_form" onSubmit={(e)=>submitHandler(e)}>
             <label>
               <p>Enter your email so I can mail you back</p>
               <input placeholder="please type email" name="from_name" className={styles.text} type="email" required="true"/>
             </label>
             <label>
               <p>Enter your message</p>
               <input placeholder="what do you want to ask?" name='message' className={styles.area} type="textarea" required="true"/>
             </label>
             <hr/>
             <button>Send</button>
           </form>
            }
           
          </div>
      </div>
    </div>
  )
}
