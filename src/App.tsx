import { BrowserRouter } from 'react-router-dom'
import { createContext, useState } from 'react';
import Router from './routes/sections'
import { IUser } from './interfaces/user';

interface ModalContextType {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  activeModal: "auth" | "success" | false;
  setActiveModal: React.Dispatch<React.SetStateAction<"auth" | "success" | false>>;
}

export const ModalContext = createContext<ModalContextType | null>(null);

function App() {
  const [user, setUser] = useState<IUser | null>(null);
  const [activeModal, setActiveModal] = useState<"auth" | "success" | false>(false);

  return (
    <BrowserRouter>
      <ModalContext.Provider value={{ user, setUser, activeModal, setActiveModal }}>
        <Router />
      </ModalContext.Provider>
    </BrowserRouter>
  )
}

export default App
