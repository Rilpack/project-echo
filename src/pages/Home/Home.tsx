
import styles from './Home.module.scss'
import logo_3d from '../../assets/images/png/3d-logo.png'
import { InfoBlock } from '../../components/InfoBlock/InfoBlock'
import { FaqBlock } from '../../components/FaqBlock/FaqBlock'

export const Home = () => {
  return (
    <div className={styles.block_page_container}>
      <div className={styles.home_page_container}>
        <div className={styles.title_home_container}>
          <img className={styles.img_home_container} src={logo_3d} />
          <div className={styles.title_home_text_container}>
            <h2 className={styles.title_home_text}>Расшифрую любые аудио и видео файлы в текст</h2>
            <p className={styles.title_home_text_p}>Разделю текст на спикеров, расставлю таймкоды и знаки препинания​</p>
          </div>
        </div>
        <InfoBlock />
        <FaqBlock />
      </div>
    </div>
  )
}