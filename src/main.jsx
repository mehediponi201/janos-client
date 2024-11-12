import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './LayOut/Main';
import Home from './components/Home';
import About from './AboutComponent/About';
import ServiceApp from './ServicesComponent/ServiceApp';
import ApplicationForm from './carrersComponent/ApplicationForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/services",
        element:<ServiceApp></ServiceApp>
      },
      {
        path:"/application",
        element: <ApplicationForm></ApplicationForm>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
  </div>
)
