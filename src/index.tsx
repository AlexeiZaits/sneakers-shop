import React from 'react';
import ReactDOM from 'react-dom/client';
import "./scss/index.scss"
import { App } from './app';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Collections, About, Men, Women, Contact } from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    // errorElement: <ErrorPage />,
    children: [
      { 
        path:  "collections",
        element: <Collections />,
      },
      { 
        path:  "about",
        element: <About />,
      },
      { 
        path:  "men",
        element: <Men/>,
      },
      { 
        path:  "women",
        element: <Women />,
      },
      { 
        path:  "contact",
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
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

