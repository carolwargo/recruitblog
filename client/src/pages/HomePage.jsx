//PATH client/src/pages/HomePage.jsx
// PATH client/src/pages/HomePage.jsx 
import React from 'react';
import PostsIndex from '../components/PostsIndex';

const HomePage = ({ post }) => {  // Accept posts as a prop
    return (
        <div className='w3-pale-blue'>
          <div className="container">
            <h1>Blog</h1>
            <p>Welcome to the blog page!</p>
            </div>
            <div>
            
                    <PostsIndex post={post} /> {/* Pass posts prop to PostsIndex */}
            
                    {/* You can add additional content here if needed */}
                </div>
   

<div className="container">
            <div className="row">
                <div className="col m8">
            <h1>row 2 col 1</h1> 
            </div>
                <div className="col m4">
                <h1>row 2 col 2</h1> 
                    {/* You can add additional content here if needed */}
                </div>
            </div>
            </div>
        </div>
    );
};

export default HomePage;
