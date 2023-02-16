import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'

import { Sidebar } from './components/SideBar/Sidebar'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
