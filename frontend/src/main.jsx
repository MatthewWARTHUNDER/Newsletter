import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Newsletter from './pages/Newsletter.jsx'
import Confirmation from './pages/Confirmation.jsx'

const router = createBrowserRouter([
  {
    path: '/Newsletter',
    element: <Newsletter />,
  },
  {
    path: '/',
    element: <App />
  },
  {
    path: '/Confirmation',
    element: <Confirmation />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)