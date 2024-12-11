/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Algo from "../../assets/images/Algos.jpeg";
import NCAAHQweb from "../../assets/images/Posts/NCAAHQweb.webp";
import { Link } from 'react-router-dom';

const Post1 = () => {
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
    <div className='post1' id='post1'>
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
       <p>post 1</p>
        <div className="w3-row-padding">
          <div className="row"> {/* Bootstrap Row Wrapper */}
            
            {/* Main Content Column */}
            <div className="col-sm-12 col-md-9 col-lg-9 w3-padding">
            <article className="blog-post text-black">
                <img src={NCAAHQweb} alt="NCAA headquarters" className='w-100 shadow-lg rounded' />
                <h2 className="display-4 link-body-emphasis my-4"><b>{postTitle}</b></h2>
                <p className="blog-post-meta">November 8, 2024 by <a href="/blog">Staff Writer</a></p>
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
                  <h5 className="card-title">Related Posts Post 2</h5>
               
                 <div className="card-text fade-out">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam sequi repudiandae, dolorem aut vero! </div>
                    <div className='mt-2'>
                    <Link to={`/posts/post2`}>
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
                    <Link to={`/posts/post2`}>
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
                    <Link to={`/posts/post2`}>
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

export default Post1;

/*
import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import HRCThumbnail from '../../assets/images/HRC/HRCThumbnail.png';
import { FaShare } from 'react-icons/fa';
import { MdOutlineAddLink } from 'react-icons/md';


const hrcImages = [
 HRCThumbnail
];



export default function InstagramPost() {
  const [currentHRCIndex, setCurrentHRCIndex] = React.useState(0);

  const handleHRCImageClick = (index) => {
    setCurrentHRCIndex(index);
  };

  const postTitle = "HUMAN RIGHTS CAMPAIGN";
    const postURL = window.location.href;
    const postImage = HRCThumbnail;
   

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: postTitle,
                summary: 'Check out this post on data analytics!',
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
    <div className='slide1' id='slide1'>
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
      
      <div className='hrc-post container' id="hrc-post">
     <div className="mt-5">
       
       
     <h2 className="display-4 link-body-emphasis text-primary fw-bolder my-3">
            {postTitle}</h2>
        <p className="blog-post-meta">August 8, 2024 by <a href="/blog">author</a></p>

        <hr/>
        <p> The Human Rights Campaign (HRC) is the largest LGBTQ advocacy group and political lobbying organization in the United States. The organization focuses on protecting and expanding rights for LGBTQ individuals, including marriage equality, anti-discrimination laws, and HIV/AIDS advocacy."</p>
     
        <blockquote className="blockquote">
            <h4><i>LET'S DEFINE <b>"HUMAN RIGHTS"</b></i> <span style={{fontSize:'14px'}}>'Human rights are fundamental rights and freedoms that belong to every person simply because they are human. These rights are universal, meaning they apply to everyone, regardless of nationality, sex, ethnicity, religion, or any other status. They include a wide range of rights, such as the right to life, liberty, and personal security; freedom of thought, conscience, and religion; and the right to work, education, and an adequate standard of living.'</span></h4>
        </blockquote>

        <h3>Response from CHAT-gpt </h3>
        <p>
        <b>QUESTION:</b> <i>Given the following mission statement, do you feel the name, Human Rights Campaign is transparent or misleading? Why or why not?</i>
        </p>
        <p>
        <b>ANSWER</b> This focuses on LGBTQ+ individuals who are also people of color, as they face marginalization based on both their sexual orientation/gender identity and race.
        </p>
        <h3>The statement calls for active advocacy and responsibility toward individuals who experience multiple layers of marginalization due to their intersectional identity as both people of color and LGBTQ+. </h3>
     </div>
    
        <div className="w3-padding-32">
        <div className="row d-flex justify-content-center align-items-center">
    
           <div className="col-sm-12 col-md-12 col-lg-12 ">
            <Card
            className="shadow my-1"
      variant="outlined"
      sx={{
        minWidth: 225,
        '--Card-radius': (theme) => theme.vars.radius.xs,
      }}
    >
      <img src={hrcImages[currentHRCIndex]} className='w-100' alt='' loading="lazy" />

      <CardContent orientation="horizontal" 
      sx={{ alignItems: 'center', mx: -1 }}>
        <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 0.5, 
            mx: 'auto' }}>
          {hrcImages.map((_, index) => (
            <Box
            className="shadow my-4"
              key={index}
              onClick={() => handleHRCImageClick(index)}
              sx={{
                borderRadius: '50%',
                width: '10px',
                height: '10px',
                cursor: 'pointer',
                bgcolor: index === currentHRCIndex ? 'primary.solidBg' : 'background.level3',
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
            </div>
          
                </div>
                </div>
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
    <div className="col">
</div>
</div>
</div>
      </div>

  );
}
*/