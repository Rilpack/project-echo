import styles from './Modal.module.scss'
import close from '../../assets/images/svg/close.svg'
import logo from '../../assets/images/svg/logo.svg'

interface IModal {
  onClose: () => void
}

export const Modal = ({ onClose }: IModal) => {
  return (
    <div className={styles.wrapper_modal}>
      <div className={styles.container_modal}>
        <div className={styles.wrapper_close}>
          <img onClick={onClose} style={{ width: 25, cursor: 'pointer' }} src={close} />
        </div>
        <div className={styles.wrapper_block}>
          <h3 className={styles.title_modal}>Мы приступили к расшифровке, проверьте свою почту!</h3>
          <img className={styles.logo_modal} style={{ width: 200 }} src={logo} />
          <button onClick={onClose} className={styles.btn_modal}>Закрыть</button>
        </div>
      </div>
    </div>
  )
}