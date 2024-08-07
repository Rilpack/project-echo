import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Buttons/Button/Button'
import styles from './ErrorPage.module.scss'

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.block_page_container}>
      <h1 className={styles.h1_text}>404</h1>
      <p className={styles.p_text}>Такой страницы не существует :с</p>
      <Button onClick={() => navigate('/')} text='Вернуться на главную'></Button>
    </div>
  )
}