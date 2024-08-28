import styles from './SuccessModal.module.scss'
import close from '../../../assets/images/svg/close.svg'
import logo from '../../../assets/images/svg/logo.svg'
import { useNavigate } from 'react-router-dom'

interface ISuccessModal {
  onClose: () => void
}

export const SuccessModal = ({ onClose }: ISuccessModal) => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper_success_modal}>
      <div className={styles.container_modal}>
        <div className={styles.wrapper_close}>
          <img onClick={onClose} className={styles.img_close} src={close} />
        </div>
        <div className={styles.wrapper_block}>
          <h3 className={styles.title_modal}>Ваш файл успешно отправлен на расшифровку! Процесс транскрибации начался, и результаты будут доступны в вашем Личном кабинете в ближайшее время</h3>
          <img className={styles.logo_modal} src={logo} />
          <button onClick={() => { onClose(); navigate("/lk") }} className={styles.btn_modal}>Перейти в "Мои файлы"</button>
        </div>
      </div>
    </div>
  )
}