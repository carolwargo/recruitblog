import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Post1 from "./components/Posts/Post1.jsx";
import Post2 from "./components/Posts/Post2.jsx";
import Post3 from "./components/Posts/Post3.jsx";
import Post4 from "./components/Posts/Post4.jsx";
import Post5 from "./components/Posts/Post5.jsx";
import Post6 from "./components/Posts/Post6.jsx";
import PostsIndex from "./components/PostsIndex.jsx";
import HomePage from "./pages/HomePage.jsx";
import PostsLayout from "./components/Layouts/PostsLayout.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import ResourceBook from "./pages/ResourceBook.jsx";

function App() {
  // Centralized posts data
  const posts = [
    { id: 1, title: "Post 1", component: <Post1 /> },
    { id: 2, title: "Post 2", component: <Post2 /> },
    { id: 3, title: "Post 3", component: <Post3 /> },
    { id: 4, title: "Post 4", component: <Post4 /> },
    { id: 5, title: "Post 5", component: <Post5 /> },
    { id: 6, title: "Post 6", component: <Post6 /> },
  ];

  return (
    <div className="App">
      <BrowserRouter basename="recruitblog">
        <ErrorBoundary>
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<HomePage />} />

            {/* Resource Book Route */}
            <Route path="/resourcebook" element={<ResourceBook />} />

            {/* Posts Index Route */}
            <Route path="/posts" element={<PostsIndex />} />

            {/* Posts Layout with Nested Routes */}
            <Route path="/posts/*" element={<PostsLayout />}>
              {posts.map((post) => (
                <Route
                  key={post.id}
                  path={`post${post.id}`}
                  element={post.component} // Directly render the component
                />
              ))}
            </Route>

            {/* Catch-all 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

// Improved NotFound Component
function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <a href="/" style={{ color: "#007BFF", textDecoration: "underline" }}>
        Return to Home
      </a>
    </div>
  );
}

export default App;
