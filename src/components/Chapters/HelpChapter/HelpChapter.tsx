import styles from './HelpChapter.module.scss'
import telegram from '../../../assets/images/svg/telegram.svg'
import email_green from '../../../assets/images/svg/email_green.svg'

export const HelpChapter = () => {
  return (
    <div className={styles.container_help_chapter}>
      <h3 className={styles.h3_text}>Техническая поддержка</h3>
      <div className={styles.wrapper_help_btns}>
        <a href='http://google.com' target='_blank' className={styles.help_btn}>
          <img className={styles.img_icon} src={telegram} />
          <p className={styles.p_text}>Телеграмм</p>
        </a>
        <a href='mailto:support@blackmesait.ru' className={styles.help_btn}>
          <img className={styles.img_icon} src={email_green} />
          <p className={styles.p_text}>Почта</p>
        </a>
      </div>
    </div>
  )
}