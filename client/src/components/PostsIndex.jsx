//Overview of all posts
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap"; // Import Card and Button from React Bootstrap

const PostsIndex = ({ posts }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-4 mb-4"> {/* Adjusts to show 3 cards per row */}
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={post.imageUrl || "holder.js/100px180"} /> {/* Use post image or fallback */}
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  {post.summary || "Some quick example text to build on the card title and make up the bulk of the card's content."}
                </Card.Text>
                <Link to={`/posts/post${post.id}`}>
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
