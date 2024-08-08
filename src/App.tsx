import { BrowserRouter } from 'react-router-dom'
import { createContext, useState } from 'react';
import Router from './routes/sections'
import { IUser } from './interfaces/user';

interface ModalContextType {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

export const ModalContext = createContext<ModalContextType | null>(null);

function App() {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <BrowserRouter>
      <ModalContext.Provider value={{ user, setUser }}>
        <Router />
      </ModalContext.Provider>
    </BrowserRouter>
  )
}

export default App
