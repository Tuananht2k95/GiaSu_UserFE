import './App.scss';
import { RouterProvider } from 'react-router-dom';
import { routers } from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function App() {
  return (
    <RouterProvider router={ routers }></RouterProvider>
  );
}

export default App;
