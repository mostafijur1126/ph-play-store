import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './layout/RootLayout';
import Apps from './Component/pages/apps/Apps';
import InstalledApps from './Component/pages/installedApps/InstalledApps';
import Notfound from './Component/pages/notFound/Notfound';
import HomePage from './Component/pages/homePage/HomePage';



const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
      {
        index:true,
        Component: HomePage
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
    errorElement: <Notfound></Notfound>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
