import { Chapters } from "../../../interfaces/chapter"
import { FilesChapter } from "../../Chapters/FilesChapter/FilesChapter"
import { HelpChapter } from "../../Chapters/HelpChapter/HelpChapter"
import { SettingsChapter } from "../../Chapters/SettingsChapter/SettingsChapter"
import styles from "./ChaptersForm.module.scss"

interface IChaptersForm {
  chapter: Chapters | undefined
}

export const ChaptersForm = ({ chapter }: IChaptersForm) => {
  return (
    <div className={styles.container_chapter_form}>
      {chapter === Chapters.Files && <FilesChapter />}
      {chapter === Chapters.Settings && <SettingsChapter />}
      {chapter === Chapters.Help && <HelpChapter />}
    </div>
  )
}