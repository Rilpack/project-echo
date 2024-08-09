import styles from './InfoForm.module.scss'

interface IInfoForm {
  title: string;
  text: string;
  icon: string;
}

export const InfoForm = ({ title, text, icon }: IInfoForm) => {
  return (
    <div className={styles.container_info}>
      <div className={styles.wrapper_container}>
        <img className={styles.img} src={icon} />
        <b className={styles.b_style}>{title}</b>
        <p className={styles.p_style}>{text}</p>
      </div>
    </div>
  )
}