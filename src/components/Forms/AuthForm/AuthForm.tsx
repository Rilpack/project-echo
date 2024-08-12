import { useContext } from 'react';
import styles from './AuthForm.module.scss'
import { ModalContext } from '../../../App';
import { useNavigate } from 'react-router-dom';

export const AuthForm = () => {
  // Context
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('ModalContext must be used within a ModalProvider');
  }
  // Context

  const { setUser, setActiveModal } = context;
  const navigate = useNavigate();

  return (
    <div className={styles.auth_form_container}>
      <div className={styles.element_container}>
        <label htmlFor="AuthLogin" className={styles.element_label}>Email</label>
        <input
          className={styles.input_style}
          type="email"
          id="AuthLogin"
          placeholder='Введите email'
        />
      </div>
      <div className={styles.element_container}>
        <label htmlFor="AuthPassword" className={styles.element_label}>Пароль</label>
        <input
          className={styles.input_style}
          type="password"
          id="AuthPassword"
          placeholder='Введите пароль'
        />
      </div>
      <button onClick={() => { setUser({ name: "Владимир", email: "example@gmail.com" }); setActiveModal(false); navigate('/lk') }} className={styles.button_style}>Войти</button>
    </div>
  )
}