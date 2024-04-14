import { Outlet } from 'react-router-dom';
import { Header } from '../widgets/header';
import { Sidebar } from '../widgets/sidebar/compose/Sidebar';
import { useState } from 'react';

export function App() {

  const [sidebar, setSidebar] = useState(false)

  function handleClick(){
    if (window.innerWidth <= 1024)
    setSidebar(prevState=> {
      return !prevState
    })
  }
  
  return (
    <div className="app">
      {sidebar? <Sidebar handleClick={handleClick}/>: null}
      <Header handleClickSb={handleClick}/>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}
