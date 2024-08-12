
import { CSSTransition } from 'react-transition-group'
import styles from './Home.module.scss'
import logo_3d from '../../assets/images/png/3d-logo.png'
import { UploadForm } from '../../components/Forms/UploadForm/UploadForm'
import { ExampleForm } from '../../components/Forms/ExampleForm/ExampleForm'
import { InfoBlock } from '../../components/InfoBlock/InfoBlock'
import { FaqBlock } from '../../components/FaqBlock/FaqBlock'
import { SuccessModal } from '../../components/Modals/SuccessModal/SuccessModal'
import { AuthModal } from '../../components/Modals/AuthModal/AuthModal'
import { useContext } from 'react'
import { ModalContext } from '../../App'

export const Home = () => {
  // Context
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('ModalContext must be used within a ModalProvider');
  }
  // Context

  const { activeModal, setActiveModal } = context;

  return (
    <div className={styles.block_page_container}>
      <CSSTransition
        in={activeModal === 'auth'}
        classNames={{
          enter: styles['modal-enter'],
          enterActive: styles['modal-enter-active'],
          exit: styles['modal-exit'],
          exitActive: styles['modal-exit-active'],
        }}
        timeout={400}
        unmountOnExit
      >
        <AuthModal onClose={() => setActiveModal(false)} />
      </CSSTransition>
      <CSSTransition
        in={activeModal === 'success'}
        classNames={{
          enter: styles['modal-enter'],
          enterActive: styles['modal-enter-active'],
          exit: styles['modal-exit'],
          exitActive: styles['modal-exit-active'],
        }}
        timeout={400}
        unmountOnExit
      >
        <SuccessModal onClose={() => setActiveModal(false)} />
      </CSSTransition>
      <div className={styles.home_page_container}>
        <div className={styles.title_home_container}>
          <img className={styles.img_home_container} src={logo_3d} />
          <div className={styles.title_home_text_container}>
            <h2 className={styles.title_home_text}>Расшифрую любые аудио и видео файлы в текст</h2>
            <p className={styles.title_home_text_p}>Разделю текст на спикеров, расставлю таймкоды и знаки препинания​</p>
          </div>
        </div>
        <div className={styles.wrapper_forms}>
          <UploadForm setActiveModal={() => setActiveModal("success")} />
          <div className={styles.form_example_container}>
            <span className={styles.title_home_text_span}>Пример расшифровки</span>
            <ExampleForm />
          </div>
        </div>
        <InfoBlock />
        <FaqBlock />
      </div>
    </div>
  )
}