import styles from "./Toggle.module.scss"

export const Toggle = ({switchLang, lang}) => {
 return (
  <div className={styles["switch-button"]}>
  <input onChange={switchLang} value="RU" className={styles["switch-button-checkbox"]} type="checkbox" checked={lang === "RU"}></input>
  <label className={styles["switch-button-label"]}><span className={styles["switch-button-label-span"]}>EN</span></label>
  </div>
 )
}
