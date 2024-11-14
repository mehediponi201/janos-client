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
import ContactUs from './contactComponent/ContactUs';
import Card1 from './cardComponent/Card1';
import Card2 from './cardComponent/Card2';
import Card3 from './cardComponent/Card3';
import Card4 from './cardComponent/Card4';
import Card5 from './cardComponent/Card5';
import Card6 from './cardComponent/Card6';

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
      },
      {
        path:"/contact",
        element:<ContactUs></ContactUs>
      },
      {
        path:"/card1",
        element:<Card1></Card1>
      },
      {
        path:"/card2",
        element:<Card2></Card2>
      },
      {
        path:"/card3",
        element:<Card3></Card3>
      },
      {
        path:"/card4",
        element:<Card4></Card4>
      },
      {
        path:"/card5",
        element:<Card5></Card5>
      },
      {
        path:"/card6",
        element:<Card6></Card6>
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
