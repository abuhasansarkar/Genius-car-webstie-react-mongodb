import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shere/Footer/Footer';
import Header from '../Shere/Header/Header';

const Main = () => {
     return (
          <div>
               <Header></Header>
               <Outlet></Outlet>
               <Footer></Footer>
          </div>
     );
};

export default Main;