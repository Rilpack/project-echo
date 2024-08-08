import styles from './SettingsChapter.module.scss'
import { inputs } from '../../../config/inputsSpeakers'

export const SettingsChapter = () => {

  return (
    <div className={styles.container_settings_chapter}>

      <div className={styles.wrapper_row}>
        <h3>Настройка спикеров</h3>

        {
          inputs.map((input, index) => (
            <div key={index} className={styles.input_container}>
              <label htmlFor={input.id} className={styles.input_label}>{input.labelTitle}</label>
              <input
                className={styles.input_style}
                type={input.type}
                id={input.id}
                defaultValue={input.defaultValue}
                placeholder={input.placeholderText}
              />
            </div>
          ))
        }

        <button className={styles.btn_password}>Сохранить спикеров</button>

      </div>

      <div className={styles.wrapper_row}>
        <h3>Смена пароля</h3>
        <div className={styles.input_container}>
          <label htmlFor="ChangePasswordNew" className={styles.input_label}>Новый пароль</label>
          <input
            className={styles.input_style}
            type="password"
            id="ChangePasswordNew"
            placeholder='Введите новый пароль'
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="ChangePasswordRepeat" className={styles.input_label}>Подтверждение</label>
          <input
            className={styles.input_style}
            type="password"
            id="ChangePasswordRepeat"
            placeholder='Подтверждение пароля'
          />
        </div>
        <button className={styles.btn_password}>Сменить пароль</button>
      </div>
    </div>
  )
}