/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import HRCThumbnail from '../../../assets/images/HRC/HRCThumbnail.png';
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

  const articleTitle = "HUMAN RIGHTS CAMPAIGN";
    const articleURL = window.location.href;
    const articleImage = HRCThumbnail;

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
    
    <article className="blog-post text-black">
      
      <div className='hrc-post container' id="hrc-post">
     <div className="mt-5">
       
       
     <h2 className="display-4 link-body-emphasis text-primary fw-bolder my-3">
            {articleTitle}</h2>
        <p className="blog-post-meta">August 8, 2024 by <a href="/blog">author</a></p>

        <hr/>
        <p>THE CONDITIONAL FIGHT FOR LESS THAN 8% OF THE POPULATION, AND THEIR DISTAIN FOR THE REMAINING 92% OF US SUB-HUMANS & OUR SILLY RIGHTS!</p>
     
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


  );
}
