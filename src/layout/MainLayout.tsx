import { ReactElement } from "react"
import styles from "./MainLayout.module.scss"
import { Header } from "../components/Header/Header";

const MainLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div className={styles.container_layout}>
      <Header />
      {children}
    </div>
  )
}

export default MainLayout;