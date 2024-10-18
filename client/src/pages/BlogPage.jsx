import React from 'react';
import PostsIndexPage from '../components/PostsIndex';


const BlogPage = () => {
    return (
        <div>
            <h1>Blog</h1>
            <p>Welcome to the blog page!</p>
       <div className="row">
        <div className="col m8">
<PostsIndexPage />
        </div>
        <div className="col m4">

</div>
       </div>
       
        </div>
    );
};

export default BlogPage;