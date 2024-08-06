import styles from './QuestionBlock.module.scss'

interface IQuestion {
  title: string,
  text: string,
  icon: string
}

export const QuestionBlock = ({ title, text, icon }: IQuestion) => {
  return (
    <div className={styles.container_question}>
      <div className={styles.wrapper_title_question}>
        <img style={{ width: 45 }} src={icon} />
        <b className={styles.b_title}>{title}</b>
      </div>
    </div>
  )
}