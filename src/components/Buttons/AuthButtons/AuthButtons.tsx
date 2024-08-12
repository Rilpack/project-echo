import styles from './AuthButtons.module.scss'
import { Chapters } from '../../../interfaces/chapter'
import { chapters } from '../../../config/chapters';

interface IAuthButtons {
  setChapter: (chapter: Chapters | undefined) => void;
}

export const AuthButtons = ({ setChapter }: IAuthButtons) => {

  return (
    <div className={styles.container_btns_chapter}>
      {chapters.map((chapter, index) => (
        <div key={index} className={styles.wrapper_btn_chapter} onClick={!chapter.slug ? () => undefined : () => setChapter(chapter.slug)}>
          <img className={styles.img_icon} src={chapter.icon} />
          <button className={styles.btn_chapter}>{chapter.title}</button>
        </div>
      ))}
    </div>
  )
}