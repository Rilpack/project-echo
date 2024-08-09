import styles from './ErrorPage.module.scss'
import { useNavigate } from 'react-router-dom';


export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.block_page_container}>
      <h1 className={styles.h1_text}>404</h1>
      <p className={styles.p_text}>Такой страницы не существует :с</p>
      <button className={styles.button_style} onClick={() => navigate('/')} >Вернуться на главную</button>
    </div>
  )
}