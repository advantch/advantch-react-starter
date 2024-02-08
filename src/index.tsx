import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import reportWebVitals from './reportWebVitals'
import { routes } from '@/lib/routes'
import Home from '@/pages/home/page'
import Dashboard from '@/pages/dashboard/page'
import MailPage from '@/pages/mail/page'

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Home />,
  },
  {
    path: routes.dashboard,
    element: <Dashboard />,
  },
  {
    path: routes.mail,
    element: <MailPage />,
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
reportWebVitals()
