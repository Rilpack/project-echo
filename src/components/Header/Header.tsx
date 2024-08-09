import styles from './Header.module.scss'
import logo from '../../assets/images/svg/logo.svg'
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();


  return (
    <div className={styles.header_layout}>
      <div className={styles.header_container}>
        <div className={styles.header_logo_block} onClick={() => navigate("/")}>
          <img className={styles.logo} src={logo} />
          <div className={styles.header_logo_blocK_text}>
            <h1 className={styles.logo_text}>BMIT ECHO</h1>
          </div>
        </div>
        <div className={styles.header_block_btn_lk}>
          <button className={styles.button_style} onClick={() => navigate('/lk')}>Личный кабинет</button>
        </div>
      </div>
    </div>
  )
}