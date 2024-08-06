import styles from './ButtonHeader.module.scss'

interface IButtonHeader {
  text: string;
  onClick: () => void
}

export const ButtonHeader = ({ text, onClick }: IButtonHeader) => {
  return (
    <button onClick={onClick} className={styles.buttonHeader}>
      {text}
    </button>
  )
}