import styles from './MobileMenu.module.scss'
import { useContext } from 'react'
import { ModalContext } from '../../App'
import { useNavigate } from 'react-router-dom'

import logo from '../../assets/images/svg/combo-logo.svg'
import files from '../../assets/images/svg/files.svg';
import upload from '../../assets/images/svg/upload.svg';
import tariffs from '../../assets/images/svg/tariffs.svg';
import login from '../../assets/images/svg/login.svg'
import logout from '../../assets/images/svg/logout.svg';

interface IMobileMenu {
  onClose: () => void
}

export const MobileMenu = ({ onClose }: IMobileMenu) => {
  // Context
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('ModalContext must be used within a ModalProvider');
  }
  // Context

  const { user, setActiveModal } = context;
  const navigate = useNavigate();

  const chaptersMobileMenu = [
    {
      icon: upload,
      title: 'Загрузить файл',
      action: user === null ? () => { setActiveModal("auth") } : () => { navigate('/upload'); onClose() },
      isAuth: false
    },
    {
      icon: user === null ? login : files,
      title: user === null ? 'Войти' : 'Мои файлы',
      action: user === null ? () => { setActiveModal("auth") } : () => { navigate('/lk'); onClose() },
      isAuth: false
    },
    {
      icon: tariffs,
      title: 'Тарифы',
      action: () => { navigate('/tariffs'); onClose() },
      isAuth: false
    },
    {
      icon: logout,
      title: 'Выход',
      action: () => { onClose() },
      isAuth: true
    },
  ];

  return (
    <div className={styles.container_chapter}>
      <div className={styles.container_mobile_menu}>
        <img src={logo} />
        <div className={styles.container_chapters}>
          {chaptersMobileMenu.map((chapter, index) => {
            return (
              <div
                key={index}
                onClick={chapter.action}
                style={index === 0 ? { marginBottom: 12 } : undefined}
                className={!chapter.isAuth
                  ? styles.chapter_block_auth
                  : (chapter.isAuth && user !== null)
                    ? styles.chapter_block_auth
                    : styles.chapter_block}
              >
                <img className={styles.chapter_img} src={chapter.icon} />
                <span className={styles.chapter_text}>{chapter.title}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}