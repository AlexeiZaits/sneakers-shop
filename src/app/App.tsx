import { Header } from '../widgets/header';
import { Sidebar } from '../widgets/sidebar/compose/Sidebar';
import { Basket } from '../widgets';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { ReactNode } from 'react';


interface IApp {
  children: ReactNode

}

export function App({children}:IApp) {

  const sidebar = useSelector((state: RootState) => state.sidebar)
  const {basket} = useSelector((state: RootState) => state.basket)
  
  return (
      <div className="app">
        {sidebar ? <Sidebar />: null}
        {basket ?  <Basket />: null}
        <Header />
        {children}
    </div>
    
  );
}
