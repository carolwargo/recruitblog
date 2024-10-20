import React from 'react';
import Algo from "../../assets/images/Algos.jpeg";
import { Link } from 'react-router-dom';

const Post5 = () => {
  const postTitle = "Social Media Marketing Behaviors";
  const postURL = window.location.href;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(postURL)
      .then(() => {
        alert('Link copied to clipboard!');
      })
      .catch((error) => {
        console.error('Could not copy text:', error);
      });
  };

  return (
    <div className='post5' id='post5'>
      <style>
        {`
        .blog-post p {
          font-size: 13px;
        }
        .share-buttons {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }
        .share-buttons button {
          padding: 10px 20px;
          font-size: 14px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .share-button {
          background-color: #007bff;
          color: white;
        }
        .copy-link-button {
          background-color: #28a745;
          color: white;
        }
        `}
      </style>

      <div className="w3-container w3-padding-48 mt-4">
        <div className="w3-row-padding">
          <div className="row"> {/* Bootstrap Row Wrapper */}
            
            {/* Main Content Column */}
            <div className="col-sm-12 col-md-9 col-lg-9 w3-padding">
            <article className="blog-post text-black">
                <img src={Algo} alt="algorithm" className='w-100 shadow-lg rounded' />
                <h2 className="display-4 link-body-emphasis my-4"><b>{postTitle}</b></h2>
                <p className="blog-post-meta">August 8, 2024 by <a href="/blog">author</a></p>
                <p>Social media algorithms determine what content users see on platforms like Facebook, Instagram, Twitter, and TikTok. These algorithms are designed to enhance user engagement by showing relevant and interesting content.</p>
                <hr/>
                <p>These algorithms are complex and constantly evolving, incorporating various factors to personalize each user's feed. Understanding how they work can help users and content creators optimize their social media strategies.</p>
                <h2>Blockquotes</h2>
                <p>Here's a notable quote about social media algorithms:</p>
                <blockquote className="blockquote">
                    <p>"Algorithms are opinions embedded in code." - Cathy O'Neil</p>
                </blockquote>
                <p>Social media algorithms are designed to prioritize content that is most likely to engage users, based on their past behavior and interactions.</p>
                <h3>Key Factors in Social Media Algorithms</h3>
                <p>Several key factors influence how social media algorithms rank and display content:</p>
                <ul>
                    <li><strong> Engagement: </strong> Likes, comments, shares, and other forms of interaction signal to the algorithm that content is valuable.</li>
                    <li> <strong>Relevance:</strong> Content that aligns with a user's interests and past behavior is prioritized.</li>
                    <li><strong>Timeliness:</strong> Newer posts are often given higher priority, though older content can resurface if it gains new engagement.</li>
                </ul>
                <p>Understanding these factors can help users and creators maximize their visibility and engagement on social media platforms.</p>                
                <h3>Algorithm Transparency</h3>
                <p>Many social media platforms offer some transparency into how their algorithms work. For example:</p>
                <dl className=''>
                    <dt className='fw-bold text-decoration-underline' style={{fontSize:'20px'}}>Facebook</dt>
                    <dd className='w3-margin-left'>Facebook's algorithm prioritizes content from friends and family, as well as posts that receive high engagement.</dd>
                    <dt className='fw-bold text-decoration-underline' style={{fontSize:'20px'}}>Instagram</dt>
                    <dd className='w3-margin-left'>Instagram's algorithm favors recent posts, interactions, and accounts with which users frequently engage.</dd>
                    <dt className='fw-bold text-decoration-underline' style={{fontSize:'20px'}}>Twitter</dt>
                    <dd className='w3-margin-left'>Twitter's algorithm highlights tweets based on relevance, engagement, keywords, and the user's interactions.</dd>
                </dl>
                <h2>Practical Applications</h2>
                <p>Here are some practical tips for leveraging social media algorithms:</p>
                <ul>
                    <li><strong>Engage with Your Audience</strong>: Respond to comments, messages, and engage with other users' content.</li>
                    <li><strong>Post Consistently</strong>: Regular posting can help keep your content fresh and relevant in users' feeds.</li>
                    <li><strong>Use Hashtags:</strong> Hashtags can help categorize your content and increase its discoverability.</li>
                </ul>
                <p>By understanding and leveraging social media algorithms, users and content creators can enhance their online presence and engagement.</p>
                <h2>Learning More</h2>
                <p>To dive deeper into social media algorithms, consider following resources and tips:</p>
                <h3>Sub-heading</h3>
                <p>Many social media platforms provide insights and tips on their blogs and help centers. Following industry experts and staying updated with platform changes can also provide valuable information.</p>
                <pre><code>Example code block</code></pre>
                <p>Experimenting with different types of content and analyzing engagement metrics can help you understand what works best for your audience.</p>
           
                <hr />
              <div className="share-buttons w3-padding-16">
             
                <button className=" btn-black-outline py-1 px-2 fw-bolder"  
                style={{fontSize:'1rem'}} 
                onClick={handleCopyLink}>
                 share button
                </button>
              </div>
         
            </article>
         </div>

         {/* Sidebar Column */}
         <div className="col-sm-12 col-md-3 col-lg-3">
            <div className="card my-2 rounded">
                <img src={Algo} alt='algo' className="w-100 rounded-top"></img>
             
                <div className="card-body">
                  <h5 className="card-title">Related Posts</h5>
               
                 <div className="card-text fade-out">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam sequi repudiandae, dolorem aut vero! </div>
                    <div className='mt-2'>
                    <Link to={`/post/post2`}>
                 <button className='mt-2 py-1 px-3 btn btn-dark btn-sm'>read post</button>
                 </Link> 
                 </div>
               </div>
              </div>
              <div className="card my-2 rounded">
                <img src={Algo} alt='algo' className="w-100 rounded-top"></img>
             
                <div className="card-body">
                  <h5 className="card-title">Related Posts</h5>
               
                 <div className="card-text fade-out">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam sequi repudiandae, dolorem aut vero! </div>
                    <div className='mt-2'>
                    <Link to={`/post/post2`}>
                 <button className='mt-2 py-1 px-3 btn btn-dark btn-sm'>read post</button>
                 </Link> 
                 </div>
               </div>
              </div>

              <div className="card my-2 rounded">
                <img src={Algo} alt='algo' className="w-100 rounded-top"></img>
             
                <div className="card-body">
                  <h5 className="card-title">Related Posts</h5>
               
                 <div className="card-text fade-out">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam sequi repudiandae, dolorem aut vero! </div>
                    <div className='mt-2'>
                    <Link to={`/post/post2`}>
                 <button className='mt-2 py-1 px-3 btn btn-dark btn-sm'>read post</button>
                 </Link> 
                 </div>
               </div>
              </div>
            </div>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post5;
