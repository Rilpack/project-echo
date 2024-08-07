import { BrowserRouter } from 'react-router-dom'
import { createContext, useState } from 'react';
import Router from './routes/sections'

interface IUser {
  name: string,
  email: string,
}

interface ModalContextType {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

export const ModalContext = createContext<ModalContextType | null>(null);

function App() {
  const [user, setUser] = useState<IUser | null>(
    null
    // { name: "Владимир", email: "email@gmail.com" }
  );

  return (
    <BrowserRouter>
      <ModalContext.Provider value={{ user, setUser }}>
        <Router />
      </ModalContext.Provider>
    </BrowserRouter>
  )
}

export default App
