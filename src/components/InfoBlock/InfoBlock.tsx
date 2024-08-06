import { InfoForm } from '../Forms/InfoForm/InfoForm'
import styles from './InfoBlock.module.scss'
import puzzle from '../../assets/images/svg/puzzle.svg'
import book from '../../assets/images/svg/book.svg'
import rocket from '../../assets/images/svg/rocket.svg'
import paper from '../../assets/images/svg/paper.svg'
import chair from '../../assets/images/svg/chair.svg'
import database from '../../assets/images/svg/database.svg'

export const InfoBlock = () => {
  const data = [{
    title: "Расшифровываю всё",
    text: "Перевариваю любые форматы: WMA, MP4, MKV, FLV, OGG, AAC, WAV, AVI, MOV, WMV, M4A, MP3, FLAC — и вообще все файлы, где есть звук",
    icon: puzzle
  },
  {
    title: "Я — полиглот",
    text: "Умею расшифровывать не только на русском, но и на английском языке. Лет ми спик фром май харт",
    icon: book
  },
  {
    title: "Быстрый как ракета",
    text: "Расшифровка часового аудио и видеофайла со спикерами займёт плюс-минус восемь минут. Это на платном тарифе, если что. На бесплатном — медленнее, желающих много:)",
    icon: rocket
  },
  {
    title: "Пишу грамотно",
    text: "Частота ошибок в словах (WER) — 2%. Делю текст на абзацы, ставлю точки, запятые и другие знаки препинания. Могу указать спикеров — до пяти человек",
    icon: paper
  },
  {
    title: "Супер удобный",
    text: "Загружаете файл, указываете количество спикеров и вашу почту. Я присылаю вам результат в формате word и регистрирую для вас личный кабинет с расшифровками — скачивайте, когда хотите",
    icon: chair,
  },
  {
    title: "Размер имеет значение",
    text: "На бесплатном тарифе можно загрузить файл до 10 минут. На платном — до 6 часов. Максимальный размер файла, который мне удобно переварить — 4 Гб",
    icon: database
  },
  ]
  return (
    <div className={styles.block_page_container}>
      <h2 className={styles.h2_style}>ECHO: Инновационный транскрибатор аудио и видео в текст</h2>
      <div className={styles.container_info_forms}>
        {
          data.map((info, index) => (
            <InfoForm key={index} title={info.title} text={info.text} icon={info.icon} />
          ))
        }
      </div>
    </div>
  )
}