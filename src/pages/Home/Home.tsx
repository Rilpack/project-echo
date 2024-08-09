import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './Home.module.scss'
import logo_3d from '../../assets/images/png/3d-logo.png'
import { UploadForm } from '../../components/Forms/UploadForm/UploadForm'
import { ExampleForm } from '../../components/Forms/ExampleForm/ExampleForm'
import { InfoBlock } from '../../components/InfoBlock/InfoBlock'
import { FaqBlock } from '../../components/FaqBlock/FaqBlock'
import { SuccessModal } from '../../components/Modals/SuccessModal/SuccessModal'

export const Home = () => {
  const [activeModal, setActiveModal] = useState<boolean>(false);

  return (
    <div className={styles.block_page_container}>
      <CSSTransition
        in={activeModal}
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
          <img style={{ width: 353, height: 400 }} src={logo_3d} />
          <div className={styles.title_home_text_container}>
            <h2 className={styles.title_home_text}>Расшифрую любые аудио и видео файлы в текст</h2>
            <p className={styles.title_home_text_p}>Разделю текст на спикеров, расставлю таймкоды и знаки препинания​</p>
          </div>
        </div>
        <div className={styles.form_container}>
          <UploadForm setActiveModal={() => setActiveModal(true)} />
          <div className={styles.form_example_container}>
            <h4 className={styles.title_home_text_span}>Пример расшифровки</h4>
            <ExampleForm />
          </div>
        </div>
        <InfoBlock />
        <FaqBlock />
      </div>
    </div>
  )
}