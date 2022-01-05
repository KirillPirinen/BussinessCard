import styles from "./Contacts.module.scss"

export const Contacts = ({setModal, contacts}) => {
  return (
    <div>
      <h3>{contacts.h3}</h3>
      <hr/>
      <p>{contacts.p}</p>
      <div className={styles.container}>
        {
          contacts.contactsList?.map((el, i, arr) => {
            if(i !== arr.length - 1) {
              return (
                <div key={String(i)}>
                  <h4>{el.h4}</h4>
                    <span className={styles.effect}>
                      <a href={el.a.href} target="_blank">{el.a.text}</a>
                    </span>
                  <p>{el.p}</p>
                </div>
              )
            } else {
              return (
                <div key={String(i)}>
                <h4>{el.h4}</h4>
                <span className={styles.effect}>
                    <a onClick={setModal.bind(null, true)}>{el.a.text}</a>
                </span>
                <p>{el.p}</p>
              </div>
              )
            }
          })
        }
      </div>
    </div>
  )
}
