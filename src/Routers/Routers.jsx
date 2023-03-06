import Main from "../Main/Main";
import Login from "../Pages/AuthPage/Login";
import SingUp from "../Pages/AuthPage/SingUp";
import Home from "../Pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                    path: '/login',
                    element: <Login></Login>
               },
               {
                    path: '/singup',
                    element: <SingUp></SingUp>
               }
          ]
     },

]);


export default router;