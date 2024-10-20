//Overview of all posts
//PATH client/src/components/PostsIndex.jsx
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap"; // Import Card and Button from React Bootstrap
import Algos from "../assets/images/Algos.jpeg"; // Import image for Post 1

const posts = [
  { 
      id: 1, 
      title: "Post 1", 
      imageUrl: Algos,
      summary: "This is a summary for Post 1." 
  },
  { 
      id: 2, 
      title: "Post 2", 
      imageUrl: Algos,
      summary: "This is a summary for Post 2." 
  },
  { 
      id: 3, 
      title: "Post 3", 
      imageUrl: Algos,
      summary: "This is a summary for Post 3." 
  },
  { 
      id: 4, 
      title: "Post 4", 
      imageUrl: Algos,
      summary: "This is a summary for Post 4." 
  },
  { 
      id: 5, 
      title: "Post 5", 
      imageUrl: Algos,
      summary: "This is a summary for Post 5." 
  },
  { 
      id: 6, 
      title: "Post 6", 
      imageUrl: Algos,
      summary: "This is a summary for Post 6." 
  },
];

const PostsIndex = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-sm-12 col-md-4 col-lg-4 mb-4"> {/* Adjusts to show 3 cards per row */}
            <Card  className="g-2">
              <Card.Img variant="top" src={post.imageUrl || "holder.js/100px180"} /> {/* Use post image or fallback */}
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  {post.summary || "Some quick example text to build on the card title and make up the bulk of the card's content."}
                </Card.Text>
                <Link to={`/post/post${post.id}`}>
                  <Button variant="primary">Read More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsIndex;
