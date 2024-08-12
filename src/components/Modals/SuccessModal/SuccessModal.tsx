import styles from './SuccessModal.module.scss'
import close from '../../../assets/images/svg/close.svg'
import logo from '../../../assets/images/svg/logo.svg'

interface ISuccessModal {
  onClose: () => void
}

export const SuccessModal = ({ onClose }: ISuccessModal) => {
  return (
    <div className={styles.wrapper_success_modal}>
      <div className={styles.container_modal}>
        <div className={styles.wrapper_close}>
          <img onClick={onClose} className={styles.img_close} src={close} />
        </div>
        <div className={styles.wrapper_block}>
          <h3 className={styles.title_modal}>Мы приступили к расшифровке, проверьте свою почту!</h3>
          <img className={styles.logo_modal} src={logo} />
          <button onClick={onClose} className={styles.btn_modal}>Закрыть</button>
        </div>
      </div>
    </div>
  )
}