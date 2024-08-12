import { useContext, useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './Lk.module.scss'
import { ModalContext } from '../../App'
import { AuthButtons } from '../../components/Buttons/AuthButtons/AuthButtons'
import { Chapters } from '../../interfaces/chapter'
import { ChaptersForm } from '../../components/Forms/ChaptersForm/ChaptersForm'
import { UploadModal } from '../../components/Modals/UploadModal/UploadModal'
import { useNavigate } from 'react-router-dom'

export const Lk = () => {
  // Context
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('ModalContext must be used within a ModalProvider');
  }
  // Context

  const { user } = context;
  const navigate = useNavigate();
  const [chapter, setChapter] = useState<Chapters | undefined>(Chapters.Files);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (user === null) {
      navigate('/')
    }
  }, [user])

  return (
    <div className={styles.block_page_container}>
      <CSSTransition
        in={showModal}
        classNames={{
          enter: styles['modal-enter'],
          enterActive: styles['modal-enter-active'],
          exit: styles['modal-exit'],
          exitActive: styles['modal-exit-active'],
        }}
        timeout={400}
        unmountOnExit
      >
        <UploadModal onClose={() => setShowModal(false)} />
      </CSSTransition>
      {
        user !== null && <div className={styles.lk_container}>
          <h2 className={styles.h2_text}>{user.email}</h2>
          <div className={styles.wrapper_lk}>
            <AuthButtons setChapter={setChapter} />
            <ChaptersForm chapter={chapter} showModal={() => setShowModal(true)} />
          </div>
        </div>
      }
    </div>
  )
}