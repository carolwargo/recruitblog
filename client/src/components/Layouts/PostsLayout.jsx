import React from 'react';
import { Outlet } from 'react-router-dom'; // Correct import statement for Outlet


function PostsLayout() {
  return (
    <div>
  
      <main>
        <Outlet /> {/* Use Outlet as a self-closing component */}
      </main>
    
    </div>
  );
}


export default PostsLayout;
