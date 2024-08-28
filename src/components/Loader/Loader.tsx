import { Tooltip } from '@mui/material'
import styles from './Loader.module.scss'

interface ILoader {
  width: number,
  height: number,
  style: "light" | "dark"
}

export const Loader = ({ width, height, style }: ILoader) => {
  return (
    <Tooltip title="В обработке" placement='left'>
      <div className={styles.loaderContainer}>
        <div
          style={{ width: width, height: height }}
          className={style === "light" ? styles.loader : styles.loader_dark}
        />
      </div>
    </Tooltip>
  )
}