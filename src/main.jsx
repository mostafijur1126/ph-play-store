import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Component/Routs/Routs'
import { RouterProvider } from 'react-router'
import InstallAppsProvider from './Context/InstallAppsProvider'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InstallAppsProvider>
      <RouterProvider router={router} />
    </InstallAppsProvider>
  </StrictMode>,
)
