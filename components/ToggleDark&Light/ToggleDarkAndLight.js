import styles from './toggleDarkAndLight.module.css'

export default function ToggleDarkAndLight() {

  return (
    <div className={styles.toggle}>
      <span>☀️</span>
        <form action="#">
          <label className={styles.switch}>
            <input
              type="checkbox"
              onClick={toggleTheme}
            />
            <span className={styles.slider}></span>
          </label>
        </form>
      <span>🌒</span>
    </div>
  )
}