import React from 'react';
import Image from 'react-bootstrap/Image';
import re from './Asset/gar.jpeg';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
export function Recte() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className='rb'>
      <Container>
      <h2 className='rhead'>GARFIELD 3 </h2>
      
      <Button className='btnm'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        About Movie
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text" className='ab'>
        The 2024 Garfield movie is a hilarious and heartwarming adventure featuring the iconic orange cat. Garfield, the lazy, lasagna-loving feline, embarks on a journey of self-discovery and family reunion. With his signature wit and sarcasm, he navigates unexpected challenges and forms unlikely friendships. The film boasts a star-studded voice cast that brings the beloved characters to life. From cozying up with Jon to outsmarting his rivals, Garfield's antics are sure to entertain audiences of all ages. This purr-fectly entertaining film is a must-watch for fans of the comic strip and newcomers alike.









        </div>
      </Collapse>
      <p className='ac'>
      The 2024 Garfield movie is a hilarious adventure that follows the iconic orange cat as he embarks on a journey of self-discovery and family reunion.  With a star-studded voice cast and plenty of laughs, this film is sure to delight fans of all ages.
      </p>
      </Container>
     
     <Image className="rbanner" src={re} fluid />;
     
    
     </div>



    </>
  );
}
