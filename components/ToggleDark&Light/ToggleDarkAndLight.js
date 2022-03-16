import switchTheme from "./switchTheme";
import styles from './toggleDarkAndLight.module.css'

export default function Home() {

  return (
    <div className={styles.toggle}>
      <span>☀️</span>
        <form action="#">
          <label className={styles.switch}>
            <input
              type="checkbox"
              onChange={switchTheme}
            />
            <span className={styles.slider}></span>
          </label>
        </form>
      <span>🌒</span>
    </div>
  )
}