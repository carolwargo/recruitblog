import React from 'react';
import Algo from "../../assets/images/Algos.jpeg";
import { Link } from 'react-router-dom';

const Post4 = () => {
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
    <div className='post4' id='post4'>
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

export default Post4;

/*
import React from 'react';
import Algo from "../../assets/images/Algos.jpeg";
import { FaShare } from "react-icons/fa6";
import { MdOutlineAddLink } from "react-icons/md";

const Post4 = () => {
  const postTitle = "Understanding Algorithms";
  const postURL = window.location.href;
  const postImage = Algo;

  const handleShare = () => {
      if (navigator.share) {
          navigator.share({
              title: postTitle,
              text: 'Check out this post!',
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
        <div className='post4' id='post4'>
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
                <img src={Algo} alt="algorithm" className='w-100 shadow-lg rounded' />
                <h2 className="display-4 link-body-emphasis my-4"><b>{postTitle}</b></h2>
                <p className="blog-post-meta">July 27, 2024 by <a href="/blog">author</a></p>

                <p>Algorithms are at the heart of computer science. They are a set of instructions or rules designed to perform a specific task or solve a particular problem.</p>
                <hr/>
                <p>Algorithms can range from simple, such as sorting a list of numbers, to highly complex, such as those used in artificial intelligence and machine learning. Understanding algorithms is crucial for anyone interested in computer science, software development, and related fields.</p>
             
                <blockquote className="blockquote">
                    <h4><i>"Algorithms + Data Structures = Programs."</i> <span style={{fontSize:'14px'}}>- Niklaus Wirth</span></h4>
                </blockquote>
                <p>Algorithms are not only used in computing but also in everyday tasks like cooking recipes, solving puzzles, and following a series of steps to complete a task efficiently.</p>
                <h3>Common Algorithms</h3>
                <p>There are several types of algorithms that are commonly used in computer science:</p>
                <ul>
                    <li>Sorting Algorithms: Bubble sort, Merge sort, Quick sort</li>
                    <li>Search Algorithms: Linear search, Binary search</li>
                    <li>Graph Algorithms: Dijkstra's algorithm, A* search algorithm</li>
                </ul>
                <p>Each type of algorithm serves a different purpose and is selected based on the problem at hand and the efficiency required.</p>
                <h3>Algorithm Efficiency</h3>
                <p>One of the key aspects of algorithms is their efficiency, which is often measured in terms of time complexity and space complexity:</p>

                <dl className=''>
                    <dt className='fw-bold text-decoration-underline' style={{fontSize:'20px'}}>Time Complexity</dt>
                    <dd className='w3-margin-left'>Measures the amount of time an algorithm takes to complete as a function of the size of the input data.</dd>
                    <dt className='fw-bold text-decoration-underline' style={{fontSize:'20px'}}>Space Complexity</dt> 
                    <dd className='w3-margin-left'>Measures the amount of memory an algorithm uses as a function of the size of the input data.</dd>
                </dl>
                <h2>Practical Applications</h2>
                <p>Algorithms are used in a wide range of applications, including:</p>
                <ul>
                    <li><strong>Data Analysis</strong>: Algorithms help in analyzing large datasets to find patterns and insights.</li>
                    <li><strong>Machine Learning</strong>: Algorithms are used to train models that can make predictions or decisions based on data.</li>
                    <li><strong>Optimization</strong>:  Algorithms help in finding the most efficient solutions to complex problems, such as route planning or resource allocation.</li>
                </ul>
                <p>Algorithms play a critical role in the development of software and systems that we rely on every day.</p>
                <h2>Learning Algorithms</h2>
                <p>To get started with learning algorithms, consider studying:</p>
                <p>Introductory courses in computer science, such as those offered by online platforms like Coursera, edX, and Khan Academy, can provide a strong foundation in algorithms and data structures.</p>
                <pre><code>Example code block</code></pre>
                <p>Practicing coding problems on websites like LeetCode, HackerRank, and CodeSignal can help reinforce your understanding and improve your problem-solving skills.</p>
            </article>
          
            <div className="share-buttons w3-padding-16">
                    <button className="share-button btn btn-black shadow px-2 btn-sm" onClick={handleShare}>share  <FaShare style={{fontSize:'1rem'}}/></button>
                    <button className="copy-link-button btn btn-black shadow px-2 btn-sm mx-1" onClick={handleCopyLink}> copy <MdOutlineAddLink  style={{fontSize:'1rem'}}/></button>
              </div>
              <hr/>
      </div>
      <div className="col-sm-12 col-md-3 col-lg-3">

</div>
      </div>
      </div>
      </div>
    );
}

export default Post4;

*/