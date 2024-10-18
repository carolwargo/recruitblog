import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";


import Post1 from './components/Posts/Post1.jsx'
import Post2 from "./components/Posts/Post2.jsx";
import Post3 from "./components/Posts/Post3.jsx";
import Post4 from "./components/Posts/Post4.jsx";
import Post5 from "./components/Posts/Post5.jsx";
import Post6 from "./components/Posts/Post6.jsx";
import PostsLayout from "./components/layouts/PostsLayout.jsx";
import PostsIndex from "./PostsIndex.jsx";
import HomePage from "./pages/HomePage.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

function App() {
  // Posts data
  const posts = [
    { id: 1, title: "Post 1", component: Post1 },
    { id: 2, title: "Post 2", component: Post2 },
    { id: 3, title: "Post 3", component: Post3 },
    { id: 4, title: "Post 4", component: Post4 },
    { id: 5, title: "Post 5", component: Post5 },
    { id: 6, title: "Post 6", component: Post6 },
  ];

  return (
    <div className="App">
      <BrowserRouter basename="carolwargoblog">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostsIndex posts={posts} />} />
            <Route path="/posts/*" element={<PostsLayout />}>
              {posts.map((post) => (
                <Route key={post.id} path={`post${post.id}`} element={<post.component />} />
              ))}
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

// Create a component for handling not found routes
function NotFound() {
  console.error("Page not found!"); // Log error to console
  return <h1>404 - Not Found</h1>;
}

export default App;
