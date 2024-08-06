import styles from './Button.module.scss'
interface IButton {
  text: string;
  onClick: () => void
}


export const Button = ({ text, onClick }: IButton) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  )
}