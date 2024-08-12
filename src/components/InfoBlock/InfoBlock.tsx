import { infoBlocks } from '../../config/info'
import { InfoForm } from '../Forms/InfoForm/InfoForm'
import styles from './InfoBlock.module.scss'

export const InfoBlock = () => {
  return (
    <div className={styles.block_page_container}>
      <h2 className={styles.h2_style}>ECHO: Инновационный транскрибатор аудио и видео в текст</h2>
      <div className={styles.container_info_forms}>
        {infoBlocks.map((info, index) => (
          <InfoForm key={index} title={info.title} text={info.text} icon={info.icon} />
        ))}
      </div>
    </div>
  )
}