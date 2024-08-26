import styles from './Header.module.scss'
import logo from '../../assets/images/svg/logo.svg'
import profile from '../../assets/images/svg/user.svg'
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { ModalContext } from '../../App';

export const Header = () => {
  // Context
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('ModalContext must be used within a ModalProvider');
  }
  // Context

  const { user, setActiveModal } = context;
  const navigate = useNavigate();

  const btnsHeader = [
    {
      text: "Мои файлы",
      action: user === null ? () => setActiveModal("auth") : () => navigate('/lk')
    },
    {
      text: "Загрузить файл",
      action: () => navigate('/download')
    },
    {
      text: "Тарифы",
      action: () => navigate('/tariffs')
    },
  ]

  return (
    <div className={styles.header_layout}>
      <div className={styles.header_container}>
        <div className={styles.header_logo_block} onClick={() => navigate("/")}>
          <img className={styles.logo} src={logo} />
          <div className={styles.header_logo_blocK_text}>
            <h1 className={styles.logo_text}>BMIT ECHO</h1>
          </div>
        </div>
        <div className={styles.header_block_btns_container}>
          <div className={styles.header_block_btns}>
            {btnsHeader.map((button, index) => (
              <button className={styles.btn_header} key={index} onClick={button.action}>
                {button.text}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.header_block_btn_lk}>
          <button
            className={styles.button_style}
            onClick={user === null
              ? () => setActiveModal("auth")
              : () => navigate('/lk')}>
            Личный кабинет
          </button>
          <button
            className={styles.button_style_mobile}
            onClick={user === null
              ? () => setActiveModal("auth")
              : () => navigate('/lk')}>
            <img className={styles.img} src={profile} />
          </button>
        </div>
      </div>
    </div>
  )
}