import styles from './AuthButtons.module.scss'
import table from '../../../assets/images/svg/table.svg'
import settings from '../../../assets/images/svg/settings.svg'
import help from '../../../assets/images/svg/help.svg'
import logout from '../../../assets/images/svg/logout.svg'
import { Chapters } from '../../../interfaces/chapter'

interface IAuthButtons {
  setChapter: (chapter: Chapters | undefined) => void;
}

export const AuthButtons = ({ setChapter }: IAuthButtons) => {

  const chapters = [{
    icon: table,
    title: "Мои файлы",
    slug: Chapters.Files
  },
  {
    icon: settings,
    title: "Настройки",
    slug: Chapters.Settings
  },
  {
    icon: help,
    title: "Поддержка",
    slug: Chapters.Help
  },
  {
    icon: logout,
    title: "Выход",
  }]

  return (
    <div className={styles.container_btns_chapter}>
      {
        chapters.map((chapter, index) => (
          <div key={index} className={styles.wrapper_btn_chapter} onClick={() => setChapter(chapter.slug)}>
            <img style={{ width: 18 }} src={chapter.icon} />
            <button className={styles.btn_chapter}>{chapter.title}</button>
          </div>
        ))
      }
    </div>
  )
}