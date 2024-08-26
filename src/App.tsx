import styles from './assets/styles/App.module.scss'
import { BrowserRouter } from 'react-router-dom'
import { createContext, useState } from 'react';
import Router from './routes/sections'
import { IUser } from './interfaces/user';
import { slide as Menu } from 'react-burger-menu'
import { MobileMenu } from './components/MobileMenu/MobileMenu';

interface ModalContextType {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  activeModal: "auth" | "success" | "menu" | false;
  setActiveModal: React.Dispatch<React.SetStateAction<"auth" | "success" | "menu" | false>>;
}

export const ModalContext = createContext<ModalContextType | null>(null);

function App() {
  const [user, setUser] = useState<IUser | null>(null);
  const [activeModal, setActiveModal] = useState<"auth" | "success" | "menu" | false>(false);

  return (
    <BrowserRouter>
      <ModalContext.Provider value={{ user, setUser, activeModal, setActiveModal }}>
        {
          activeModal === "menu" &&
          <Menu
            onClose={() => setActiveModal(false)}
            isOpen={activeModal === 'menu'}
            menuClassName={styles.container_menu}>
            <MobileMenu onClose={() => setActiveModal(false)} />
          </Menu>
        }
        <Router />
      </ModalContext.Provider>
    </BrowserRouter>
  )
}

export default App
