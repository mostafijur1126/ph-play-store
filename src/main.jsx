import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './layout/RootLayout';
import Apps from './Component/pages/apps/Apps';
import InstalledApps from './Component/pages/installedApps/InstalledApps';



const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
      {
        index:true,
        element: <h3>home</h3>
      },
      {
        path: "/apps",
        Component: Apps
      },
      {
        path:"/installApps",
        Component: InstalledApps
      }
    ],
    errorElement: <h6>This page is not found</h6>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
