import { useContext, useState } from 'react'
import styles from './Lk.module.scss'
import { AuthForm } from '../../components/Forms/AuthForm/AuthForm'
import { RegForm } from '../../components/Forms/RegForm/RegForm'
import { ButtonTabs } from '../../components/Buttons/ButtonTabs/ButtonTabs'
import { ModalContext } from '../../App'
import { AuthButtons } from '../../components/Buttons/AuthButtons/AuthButtons'
import { Chapters } from '../../interfaces/chapter'
import { ChaptersForm } from '../../components/Forms/ChaptersForm/ChaptersForm'

export const Lk = () => {
  // Context
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('ModalContext must be used within a ModalProvider');
  }
  // Context

  const { user } = context;
  const [form, setForm] = useState<"auth" | "reg">("auth");
  const [chapter, setChapter] = useState<Chapters | undefined>(Chapters.Files);

  return (
    <div className={styles.block_page_container}>
      {
        user === null && <div style={{ height: 300 }} className={styles.lk_container}>
          <ButtonTabs form={form} setForm={setForm} />
          <div className={styles.wrapper_forms}>
            {
              form === 'auth'
                ? <AuthForm />
                : <RegForm />
            }
          </div>
        </div>
      }
      {
        user !== null && <div className={styles.lk_container}>
          <h2 className={styles.h2_text}>{user.email}</h2>
          <div className={styles.wrapper_lk}>
            <AuthButtons setChapter={setChapter} />
            <ChaptersForm chapter={chapter} />
          </div>
        </div>
      }
    </div>
  )
}