import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import Shop from './App';
import { RouterProvider} from 'react-router-dom';
import {
  createBrowserRouter,
} from "react-router-dom";
import Navigation from './components/routes/navigation/navigation.component';
import App from './App';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation/>,
    children: [
      { path: "/", element: <App/> },
      { path: "/shop", element: <Shop/> },
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
