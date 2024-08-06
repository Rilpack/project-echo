import styles from './Header.module.scss'
import logo from '../../assets/images/svg/logo.svg'
import { useNavigate } from "react-router-dom";
import { ButtonHeader } from '../Buttons/ButtonHeader/ButtonHeader';
import { Button } from '../Buttons/Button/Button';

export const Header = () => {
  const navigate = useNavigate();

  // const btnsHeader = [
  //   {
  //     text: "Блог",
  //     url: '/blog'
  //   },
  //   {
  //     text: "Тарифы",
  //     url: '/pricing'
  //   },
  //   {
  //     text: "Контакты",
  //     url: '/contacts'
  //   },
  // ]

  return (
    <div className={styles.header_layout}>
      <div className={styles.header_container}>
        <div className={styles.header_logo_block} onClick={() => navigate("/")}>
          <img className={styles.logo} src={logo} />
          <div className={styles.header_logo_blocK_text}>
            <h1 className={styles.logo_text}>BMIT ECHO</h1>
          </div>
        </div>
        {/* <div className={styles.header_block_btns_container}>
          <div className={styles.header_block_btns}>
            {btnsHeader.map((button, index) => (
              <ButtonHeader key={index} text={button.text} onClick={() => navigate(button.url)} />
            ))}
          </div>
        </div> */}
        <div className={styles.header_block_btn_lk}>
          <Button text='Личный кабинет' onClick={() => navigate('/lk')} />
        </div>
      </div>
    </div>
  )
}