import React from 'react';
import Algo from "../../../assets/images/Algos.jpeg";
import { FaShare } from "react-icons/fa6";
import { MdOutlineAddLink } from "react-icons/md";
import Post2Table from './PostComponents/Post2Table';
const post2 = () => {

    const articleTitle = "Getting Started with Data Analytics: Five Key Focus Areas";
    const articleURL = window.location.href;
    const articleImage = Algo;

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: articleTitle,
                text: 'Check out this article on data analytics!',
                url: articleURL,
                files: [
                    new File([articleImage], "analytics.jpg", {
                        type: "image/jpeg",
                    })
                ]
            }).then(() => {
                console.log('Thanks for sharing!');
            }).catch((error) => {
                console.error('Something went wrong sharing the article:', error);
            });
        } else {
            alert('Sharing is not supported on this browser.');
        }
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(articleURL).then(() => {
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
 
            <article className="blog-post text-black">
                <div className="container">
                <img src={Algo} alt="Analytics" className='w-100 shadow-lg rounded' />
                <h2 className="display-4 link-body-emphasis my-4">
                    <b>{articleTitle}</b></h2>
                <p className="blog-post-meta">August 8, 2024 by <a href="/blog">author</a></p>

                <p>Discover the five essential categories of data analytics that every website owner should understand. Learn what each category reveals about your site and how to leverage these insights to drive better performance and decision-making.</p>
                <hr/>
                <p>Data analytics is the process of examining data sets to draw conclusions about the information they contain. For website optimization, focusing on key categories of data analytics is crucial for making informed decisions.</p>
             
                <blockquote className="blockquote">
                    <h4><i>"Without big data analytics, companies are blind and deaf, wandering out onto the web like deer on a freeway."</i> <span style={{fontSize:'14px'}}>- Geoffrey Moore</span></h4>
                </blockquote>
                <p>Understanding the different categories of data analytics can help you gain a comprehensive view of your website’s performance and identify areas for improvement.</p>
                </div>
           
           <Post2Table />
           <div className="container mt-5">
            <hr />
            <div className="share-buttons w3-padding-16">
                    <button className="share-button btn btn-black shadow px-2 btn-sm" onClick={handleShare}>share  <FaShare style={{fontSize:'1rem'}}/></button>
                    <button className="copy-link-button btn btn-black shadow px-2 btn-sm mx-1" onClick={handleCopyLink}> copy <MdOutlineAddLink  style={{fontSize:'1rem'}}/></button>
              </div>
              </div>
            
            </article>
        </div>
    );
}

export default post2;
