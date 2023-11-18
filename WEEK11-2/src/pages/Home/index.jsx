import Carousel from 'react-bootstrap/Carousel'
import Image1 from '../../assets/elephant-1.jpeg'
import Image2 from '../../assets/elephant-2.jpeg'
import Image3 from '../../assets/elephant-3.jpeg'

const Home = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          style={{ width: '100vw', height: 'calc( 100vh - 56px )' }}
          src={Image1}
        />
        <Carousel.Caption>
          <h3>Protecting wild animals</h3>
          <p>Please protect the elephant.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: '100vw', height: 'calc( 100vh - 56px )' }}
          src={Image2}
        />
        <Carousel.Caption>
          <h3>No business, no killing</h3>
          <p>coexistence between humans and nature.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: '100vw', height: 'calc( 100vh - 56px )' }}
          src={Image3}
        />
        <Carousel.Caption>
          <h3>Maintain ecological balance</h3>
          <p>achieving harmonious coexistence between humans and nature.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Home
