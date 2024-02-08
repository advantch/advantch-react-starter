import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import reportWebVitals from './reportWebVitals'
import { routes } from '@/lib/routes'
import { Page } from '@/pages/home/page'
import { Dashboard } from '@/pages/dashboard/page'

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Page />,
  },
  {
    path: routes.dashboard,
    element: <Dashboard />,
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
