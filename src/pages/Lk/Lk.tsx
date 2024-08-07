import { useContext, useState } from 'react'
import styles from './Lk.module.scss'
import { AuthForm } from '../../components/Forms/AuthForm/AuthForm'
import { RegForm } from '../../components/Forms/RegForm/RegForm'
import { ButtonTabs } from '../../components/Buttons/ButtonTabs/ButtonTabs'
import { ModalContext } from '../../App'

export const Lk = () => {
  // Context
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('ModalContext must be used within a ModalProvider');
  }
  // Context

  const { user, setUser } = context;
  const [form, setForm] = useState<"auth" | "reg">("auth");

  return (
    <div className={styles.block_page_container}>
      {
        user === null && <div className={styles.lk_container}>
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
    </div>
  )
}