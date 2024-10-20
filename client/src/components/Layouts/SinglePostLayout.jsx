import React from 'react';
import { Outlet } from 'react-router-dom'; // Correct import statement for Outlet
import TopNav from '../TopNav';
import Footer from '../Footer';

function SinglePostLayout() {
  return (
    <div>
      <main>
      <TopNav/>
        <Outlet />
        <Footer/>
        </main>
      </div>
  
  );
}


export default SinglePostLayout;
