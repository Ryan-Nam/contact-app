import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Contacts from './pages/Contacts';
import ContactDetail from './pages/ContactDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Contacts />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
      {
        path: '/contacts/:keyword',
        element: <Contacts />,
      },
      {
        path: '/contacts/watch/:id',
        element: <ContactDetail />,
      },
    ],
  },
  // Any additional routes can be added here
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />;
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
