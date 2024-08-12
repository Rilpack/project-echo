import { useState } from 'react'
import styles from './AuthModal.module.scss'
import { ButtonTabs } from '../../Buttons/ButtonTabs/ButtonTabs'
import { AuthForm } from '../../Forms/AuthForm/AuthForm'
import { RegForm } from '../../Forms/RegForm/RegForm'
import close from '../../../assets/images/svg/close.svg'
import logo from '../../../assets/images/svg/combo-logo.svg'


interface IAuthModal {
  onClose: () => void
}

export const AuthModal = ({ onClose }: IAuthModal) => {
  const [form, setForm] = useState<"auth" | "reg">("auth");

  return (
    <div className={styles.wrapper_auth_modal}>
      <div className={styles.container_modal}>
        <div className={styles.wrapper_close}>
          <img className={styles.logo_img} src={logo} />
          <img onClick={onClose} className={styles.close_img} src={close} />
        </div>
        <div className={styles.wrapper_container}>
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
    </div>
  )
}