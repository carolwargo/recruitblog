import React from 'react';
import { Outlet } from 'react-router-dom'; // Correct import statement for Outlet
import TopNav from '../TopNav';
import Footer from '../Footer';

function PostsLayout() {
  return (
    <div>
  
      <main>
        <TopNav/>
        <Outlet /> {/* Use Outlet as a self-closing component */}
        <Footer/>
      </main>
    
    </div>
  );
}


export default PostsLayout;
