import { ReactElement, useContext } from "react"
import { CSSTransition } from 'react-transition-group'
import styles from "./MainLayout.module.scss"
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { ModalContext } from "../App";
import { AuthModal } from "../components/Modals/AuthModal/AuthModal";
import { SuccessModal } from "../components/Modals/SuccessModal/SuccessModal";

const MainLayout = ({ children }: { children: ReactElement }) => {
  // Context
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('ModalContext must be used within a ModalProvider');
  }
  // Context

  const { activeModal, setActiveModal } = context;

  return (
    <div className={styles.container_layout}>
      <CSSTransition
        in={activeModal === 'auth'}
        classNames={{
          enter: styles['modal-enter'],
          enterActive: styles['modal-enter-active'],
          exit: styles['modal-exit'],
          exitActive: styles['modal-exit-active'],
        }}
        timeout={400}
        unmountOnExit
      >
        <AuthModal onClose={() => setActiveModal(false)} />
      </CSSTransition>
      <CSSTransition
        in={activeModal === 'success'}
        classNames={{
          enter: styles['modal-enter'],
          enterActive: styles['modal-enter-active'],
          exit: styles['modal-exit'],
          exitActive: styles['modal-exit-active'],
        }}
        timeout={400}
        unmountOnExit
      >
        <SuccessModal onClose={() => setActiveModal(false)} />
      </CSSTransition>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout;