import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { RouterProvider} from 'react-router-dom';
import {
  createBrowserRouter,
} from "react-router-dom";
import App from './App';
import SignIn from './components/routes/signin/signIn.component';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "shop",
        element: <h1>I am the shop page</h1>,
      },
      {
        path: "sign-in",
        element: <SignIn/>,
      },
    ],
   
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
