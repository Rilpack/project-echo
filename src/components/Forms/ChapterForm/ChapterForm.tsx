import { Chapters } from "../../../interfaces/chapter"
import { FilesChapter } from "../../Chapters/FilesChapter/FilesChapter"
import styles from "./ChapterForm.module.scss"

interface IChapterForm {
  chapter: Chapters | undefined
}

export const ChapterForm = ({ chapter }: IChapterForm) => {
  return (
    <div className={styles.container_chapter_form}>
      {
        chapter === Chapters.Files && <FilesChapter />
      }
    </div>
  )
}