import { useState } from 'react'
import styles from './Lk.module.scss'
import { AuthForm } from '../../components/Forms/AuthForm/AuthForm'
import { RegForm } from '../../components/Forms/RegForm/RegForm'
import { ButtonTabs } from '../../components/Buttons/ButtonTabs/ButtonTabs'

export const Lk = () => {
  const [form, setForm] = useState<"auth" | "reg">("auth");

  return (
    <div className={styles.block_page_container}>
      <div className={styles.lk_container}>
        <ButtonTabs form={form} setForm={setForm} />
        <div className={styles.wrapper_forms}>
          {
            form === 'auth'
              ? <AuthForm />
              : <RegForm />
          }
        </div>
      </div>
    </div>
  )
}