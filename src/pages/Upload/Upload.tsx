import { useContext, useEffect } from 'react';
import { ExampleForm } from '../../components/Forms/ExampleForm/ExampleForm'
import { UploadForm } from '../../components/Forms/UploadForm/UploadForm'
import styles from './Upload.module.scss'
import { ModalContext } from '../../App';
import { useNavigate } from 'react-router-dom';

export const Upload = () => {
  // Context
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('ModalContext must be used within a ModalProvider');
  }
  // Context

  const { user, setActiveModal } = context;
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate('/')
    }
  }, [user])

  return (
    <div className={styles.block_page_container} style={{ justifyContent: 'flex-start' }}>
      <div className={styles.container_upload}>
        <div className={styles.title_container}>
          <h1 className={styles.title_h1}>Транскрибация аудио в текст онлайн</h1>
          <span className={styles.title_span}>Загрузите аудиофайл и получите точную транскрибацию текста всего за несколько минут. Наш сервис автоматически преобразует звук в текст, экономя ваше время и усилия.</span>
        </div>
        <div className={styles.wrapper_forms}>
          <UploadForm setActiveModal={() => setActiveModal("success")} />
          <div className={styles.form_example_container}>
            <span className={styles.title_home_text_span}>Пример расшифровки</span>
            <ExampleForm />
          </div>
        </div>
      </div>
    </div>
  )
}