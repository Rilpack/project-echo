import styles from './AuthForm.module.scss'

export const AuthForm = () => {
  return (
    <div className={styles.auth_form_container}>
      <div className={styles.element_container}>
        <label htmlFor="AuthLogin" className={styles.element_label}>Email</label>
        <input
          className={styles.input_style}
          type="email"
          id="AuthLogin"
          placeholder='Введите email'
        />
      </div>
      <div className={styles.element_container}>
        <label htmlFor="AuthPassword" className={styles.element_label}>Пароль</label>
        <input
          className={styles.input_style}
          type="password"
          id="AuthPassword"
          placeholder='Введите пароль'
        />
      </div>
      <button className={styles.button_style}>Войти</button>
    </div>
  )
}