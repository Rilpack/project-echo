import { useState } from 'react';
import styles from './QuestionBlock.module.scss';

interface IQuestion {
  title: string;
  text: string;
  icon: string;
}

export const QuestionBlock = ({ title, text, icon }: IQuestion) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.container_question} onClick={() => setIsExpanded(!isExpanded)}>
      <div className={styles.wrapper_question}>
        <img className={styles.img} src={icon} />
        <div className={styles.wrapper_title_question}>
          <b className={styles.b_title}>{title}</b>
          <p className={`${styles.p_text} ${isExpanded ? styles.expanded : ''}`}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};
