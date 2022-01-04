import styles from "./Contacts.module.scss"

export const Contacts = ({setModal}) => {
  return (
    <div>
      <h3>3 Simple Ways To Create your next project with me</h3>
      <hr/>
      <p>There are many reasons to contact me and start to get your project done </p>
      <div className={styles.container}>
        <div>
          <h4>Chat me with Telegram </h4>
            <span className={styles.effect}>
              <a href="https://t.me/KirillPirinen" target="_blank">@KirillPirinen</a>
            </span>
          <p>It's fastest way to get in touch</p>
        </div>
        <div>
          <h4>Send me a letter with details of your project</h4>
          <span className={styles.effect}>
              <a href="mailto:k.pirinen.rus@gmail.com">k.pirinen.rus@gmail.com</a>
            </span>
          <p>It's more convinient way for some people.</p>
        </div>
        <div>
          <h4>Just use buil-in form to get me known about you</h4>
          <span className={styles.effect}>
              <a onClick={setModal.bind(null, true)}>Contact me</a>
          </span>
          <p>I'll definately answer you as soon as possible.</p>
        </div>
      </div>
    </div>
  )
}
