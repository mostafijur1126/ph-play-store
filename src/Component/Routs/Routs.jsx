import { createBrowserRouter } from "react-router";
import RootLayout from "../../layout/RootLayout";
import HomePage from "../pages/homePage/HomePage";
import Apps from "../pages/apps/Apps";
import InstalledApps from "../pages/installedApps/InstalledApps";
import Notfound from "../pages/notFound/Notfound";
import AppDetails from "../pages/appDetails/AppDetails";
import Dashbord from "../pages/dashbord/Dashbord";

export const router = createBrowserRouter([
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
        path:"/apps/:id",
        Component: AppDetails
      },
      {
        path:"/installApps",
        Component: InstalledApps
      },
      {
        path:"/dashbord",
        Component: Dashbord
      }
    ],
    errorElement: <Notfound></Notfound>
  },
]);