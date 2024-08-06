import { ReactElement } from "react"
import styles from "./MainLayout.module.scss"
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

const MainLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div className={styles.container_layout}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout;