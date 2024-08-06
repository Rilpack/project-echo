import styles from './Footer.module.scss'
import web from '../../assets/images/svg/web.svg'
import email from '../../assets/images/svg/email.svg'
import phone from '../../assets/images/svg/phone.svg'
import logo from '../../assets/images/svg/combo-logo.svg'

export const Footer = () => {
  return (
    <div className={styles.footer_layout}>
      <div className={styles.container_footer}>
        <div className={styles.wrapper_footer}>
          <h2 className={styles.h2_text}>Контакты</h2>
          <div className={styles.detail_wrapper_footer}>
            <div className={styles.contact_container}>
              <img style={{ width: 22 }} src={web} />
              <a className={styles.text} href='https://blackmesait.ru/' target='_blank'>https://blackmesait.ru</a>
            </div>
            <div className={styles.contact_container}>
              <img style={{ width: 22 }} src={email} />
              <a className={styles.text} href='mailto:support@blackmesait.ru'>support@blackmesait.ru</a>
            </div>
            <div className={styles.contact_container}>
              <img style={{ width: 22 }} src={phone} />
              <a href='tel:+7 (913)-500-00-55' className={styles.text}>+7 (913) 500 00 55</a>
            </div>
          </div>
        </div>
        <div className={styles.wrapper_footer}>
          <h2 className={styles.h2_text} style={{ marginBottom: 12 }}>Компания</h2>
          <div className={styles.detail_wrapper_footer}>
            <img src={logo} />
          </div>
        </div>
      </div>
      <div className={styles.container_footer_bottom}>
        <p className={styles.text_bottom}>© 2023—2024 «Black Mesa IT». Все права защищены</p>
        <p className={styles.text_bottom}>ООО «БЛЭК МЕСА АЙТИ»</p>
        <p className={styles.text_bottom}>ИНН/КПП 7838107523/783801001</p>
      </div>
    </div>
  )
}