import styles from './RegForm.module.scss'

export const RegForm = () => {
  return (
    <div className={styles.reg_form_container}>
      <div className={styles.element_container}>
        <label htmlFor="AuthLogin" className={styles.element_label}>Email</label>
        <input
          className={styles.input_style}
          type="email"
          id="AuthLogin"
          placeholder='Введите email'
        />
      </div>
      <button className={styles.button_style}>Зарегистрироваться</button>
    </div>
  )
}