import { Header } from '../widgets/header';
import { Sidebar } from '../widgets/sidebar/ui/Sidebar';
import { Basket } from '../widgets';
import { ReactNode } from 'react';

interface IApp {
  children: ReactNode

}

export function App({children}:IApp) {
  
  return (
      <div className="app">
        <Sidebar />
        <Basket />
        <Header />
        {children}
    </div>
    
  );
}
