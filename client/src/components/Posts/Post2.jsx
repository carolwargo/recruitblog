import React from 'react';
import Algo from "../../assets/images/Algos.jpeg";
import { Link } from 'react-router-dom';

const Post2 = () => {
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
    <div className='post2' id='post2'>
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

export default Post2;

/*
import React from 'react';
import Algo from "../../assets/images/Algos.jpeg";
import { FaShare } from "react-icons/fa6";
import { MdOutlineAddLink } from "react-icons/md";
const post2 = () => {

    const postTitle = "Getting Started with Data Analytics: Five Key Focus Areas";
    const postURL = window.location.href;
    const postImage = Algo;

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: postTitle,
                text: 'Check out this post on data analytics!',
                url: postURL,
                files: [
                    new File([postImage], "analytics.jpg", {
                        type: "image/jpeg",
                    })
                ]
            }).then(() => {
                console.log('Thanks for sharing!');
            }).catch((error) => {
                console.error('Something went wrong sharing the post:', error);
            });
        } else {
            alert('Sharing is not supported on this browser.');
        }
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(postURL).then(() => {
            alert('Link copied to clipboard!');
        }).catch((error) => {
            console.error('Could not copy text:', error);
        });
    };

    return (
        <div className='post2' id='post2'>
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
 
            <div className="w3-container w3-padding-32 mt-4">
            <div className="w3-row-padding">
        <div className="col-sm-12 col-md-9 col-lg-9">
    
            <article className="blog-post text-black">
                <div className="container">
                <img src={Algo} alt="Analytics" className='w-100 shadow-lg rounded' />
                <h2 className="display-4 link-body-emphasis my-4">
                    <b>{postTitle}</b></h2>
                <p className="blog-post-meta">August 8, 2024 by <a href="/blog">author</a></p>

                <p>Discover the five essential categories of data analytics that every website owner should understand. Learn what each category reveals about your site and how to leverage these insights to drive better performance and decision-making.</p>
                <hr/>
                <p>Data analytics is the process of examining data sets to draw conclusions about the information they contain. For website optimization, focusing on key categories of data analytics is crucial for making informed decisions.</p>
             
                <blockquote className="blockquote">
                    <h4><i>"Without big data analytics, companies are blind and deaf, wandering out onto the web like deer on a freeway."</i> <span style={{fontSize:'14px'}}>- Geoffrey Moore</span></h4>
                </blockquote>
                <p>Understanding the different categories of data analytics can help you gain a comprehensive view of your website’s performance and identify areas for improvement.</p>
                </div>
           
    
           <div className="container mt-5">
            <hr />
            <div className="share-buttons w3-padding-16">
                    <button className="share-button btn btn-black shadow px-2 btn-sm" onClick={handleShare}>share  <FaShare style={{fontSize:'1rem'}}/></button>
                    <button className="copy-link-button btn btn-black shadow px-2 btn-sm mx-1" onClick={handleCopyLink}> copy <MdOutlineAddLink  style={{fontSize:'1rem'}}/></button>
              </div>
              </div>
            
            </article>
        </div>
        </div>
        </div>
        </div>
    );
}

export default post2;
*/