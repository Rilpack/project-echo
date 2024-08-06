import styles from './InfoForm.module.scss'

interface IInfoForm {
  title: string;
  text: string;
  icon: string;
}

export const InfoForm = ({ title, text, icon }: IInfoForm) => {
  return (
    <div className={styles.container_info}>
      <div className={styles.container_img}>
        <img style={{ width: 86 }} src={icon} />
        <b className={styles.b_style}>{title}</b>
        <p className={styles.p_style}>{text}</p>
      </div>
    </div>
  )
}