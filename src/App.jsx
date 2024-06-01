import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Imported
import BMI from './pages/BMI';
import Biner from './pages/Biner';
import NotFound from './pages/NotFound';
import Oktal from './pages/Oktal';
import Desimal from './pages/Desimal';
import Heksadesimal from './pages/Heksadesimal';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BMI />,
    },
    {
      path: "/konversi/biner",
      element: <Biner />,
    },
    {
      path: "/konversi/oktal",
      element: <Oktal />,
    },
    {
      path: "/konversi/desimal",
      element: <Desimal />,
    },
    {
      path: "/konversi/heksadesimal",
      element: <Heksadesimal />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App