import React from 'react';
import ReactDOM from 'react-dom/client';
import "./scss/index.scss"
import { App } from './app';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Collections, About, Men, Women, Contact } from './pages';
import { Provider } from 'react-redux';
import { store } from './store';
import { Home } from './pages/Home';
import { ErrorPage } from './pages';

const router = createBrowserRouter([
  {
    path: "sneakers-shop/",
    element: <App><Outlet/></App>,
    errorElement: <App><ErrorPage/></App>,
    children: [
      
      {
        path:  "",
        element: <Home />,
      },
      {
        path:  "collections/",
        element: <Collections />,
      },
      {
        path:  "about/",
        element: <About />,
      },
      { 
        path:  "men/",
        element: <Men/>,
      },
      { 
        path:  "women/",
        element: <Women />,
      },
      { 
        path:  "contact/",
        element: <Contact/>,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

