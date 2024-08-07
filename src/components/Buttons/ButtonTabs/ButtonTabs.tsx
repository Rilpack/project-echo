import styles from './ButtonTabs.module.scss'

interface IButtonTabs {
  form: "auth" | "reg",
  setForm: (form: "auth" | "reg") => void
}

export const ButtonTabs = ({ form, setForm }: IButtonTabs) => {
  return (
    <div className={styles.tabs_container}>
      <div className={styles.wrapper_button}>
        <button onClick={() => setForm("auth")} className={form === 'auth' ? styles.buttonTab_active : styles.buttonTab_default}>
          Авторизация
        </button>
      </div>
      <div className={styles.wrapper_button}>
        <button onClick={() => setForm("reg")} className={form === 'reg' ? styles.buttonTab_active : styles.buttonTab_default}>
          Регистрация
        </button>
      </div>
    </div>
  )
}