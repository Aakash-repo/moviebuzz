import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img2 from './Asset/gt.jpg';
import Placeholder from 'react-bootstrap/Placeholder';
import img3 from './Asset/st.png';
import img4 from './Asset/bb.jpg';
import img5 from './Asset/sg.jpg';
import img6 from './Asset/wd.jpg';
import img7 from './Asset/mf.jpg';
import img8 from './Asset/goat.jpeg';


export const Grid = () => {
  return (
   <>
   {/* <h3>Recently Added &gt; &gt; </h3> */}
   <div className='banner'>
   <div className='cont'>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
     
        <Card.Title>Stranger Things</Card.Title>
        <Card.Text>
        Small-town kids battle otherworldly creatures after their friend vanishes in a mysterious government experiment.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img4} />
      <Card.Body>
        <Card.Title>Breaking Bad</Card.Title>
        <Card.Text>
        A chemistry teacher diagnosed with cancer turns to a life of crime to secure his family's future, spiraling into a dangerous world.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img5} />
      <Card.Body>
        <Card.Title>Squid Game</Card.Title>
        <Card.Text>
        Desperate contestants compete in deadly children's games for a massive cash prize in this dark and satirical South Korean thriller.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img6} />
      <Card.Body>
        <Card.Title>Wednesday</Card.Title>
        <Card.Text>
        Addams's daughter investigates a mystery at a gothic school, showcasing her dark humor and psychic abilities.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    </div>
    
    <h3 className='text-white'>&nbsp;&nbsp; Continue Watching &gt;&gt;</h3>
    <div className='cont1'>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img8} />
      <Card.Body>
        <Card.Title>The Greatest of All Time</Card.Title>
        <Card.Text>
        A time-traveling action epic where a legendary athlete faces off against a younger, AI-enhanced version of themselves.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img7} />
      <Card.Body>
      <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        {/* <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
      <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        {/* <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
      <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        {/* <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
    </div>
   </>
  )
}

