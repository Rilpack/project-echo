import { QuestionBlock } from '../QuestionBlock/QuestionBlock'
import styles from './FaqBlock.module.scss'
import { questions } from '../../config/questions'

export const FaqBlock = () => {

  return (
    <div className={styles.block_page_container} >
      <h2 className={styles.h2_style}>Часто задаваемые вопросы</h2>
      <div className={styles.container_questions_block}>
        {questions.map((question, index) => (
          <QuestionBlock title={question.title} text={question.text} icon={question.icon} key={index} />
        ))}
      </div>
    </div>
  )
}