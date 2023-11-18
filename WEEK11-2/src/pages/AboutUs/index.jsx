import { useState } from 'react'
import CustomCard from '../../components/Card'
import { Button, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {
  const navigate = useNavigate()
  const [cards, setCards] = useState([
    {
      title: 'Elephant-1',
      content:
        "Protecting animals, harmonizing with nature, protecting birds, and protecting wildlife is everyone's responsibility.",
      id: 1,
    },
    {
      title: 'Elephant-2',
      content:
        'People are greedy animals, who get this but cannot forget that. They are reluctant to part with three words, which has delayed many people',
      id: 2,
    },
    {
      title: 'Elephant-3',
      content: 'The best way to protect a fairy tale is to tell it to children',
      id: 3,
    },
    {
      title: 'Elephant-1',
      content:
        "Protecting animals, harmonizing with nature, protecting birds, and protecting wildlife is everyone's responsibility.",
      id: 1,
    },
    {
      title: 'Elephant-2',
      content:
        'People are greedy animals, who get this but cannot forget that. They are reluctant to part with three words, which has delayed many people',
      id: 2,
    },
    {
      title: 'Elephant-3',
      content: 'The best way to protect a fairy tale is to tell it to children',
      id: 3,
    },
  ])

  const toContact = () => {
    navigate('/contact')
  }

  return (
    <div style={{ margin: '20px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          margin: '20px',
        }}
      >
        {cards.map((i, index) => (
          <CustomCard
            key={index}
            title={i.title}
            content={i.content}
            id={i.id}
          ></CustomCard>
        ))}
      </div>
      <ListGroup>
        <ListGroup.Item variant='primary'>
          <div style={{ fontWeight: '800', margin: '10px', fontSize: '20px' }}>
            The World Animal Protection, formerly known as the World Society for
            the Protection of Animals, was established before June 2014
          </div>
        </ListGroup.Item>
        <ListGroup.Item variant='dark'>
          <div style={{ margin: '10px' }}>
            The headquarters is located in London and its establishment can be
            traced back more than 50 years.
          </div>
        </ListGroup.Item>
        <ListGroup.Item variant='dark'>
          <div style={{ margin: '10px' }}>
            The World Wildlife Federation was formed in 1981 by the merger of
            the Wildlife Conservation Alliance (WFPA) established in 1953 and
            the International Federation for the Protection of Animals
            established in 1959; The most significant achievement was the
            passage of a series of laws and regulations to protect wildlife by
            the European Parliament. Currently, there are 13 offices distributed
            around the world, and over 440 animal protection experts are located
            in 101 countries.In 1981, the World Federation for the Protection of
            Animals (WFPA established in 1953) merged with the International
            Society for the Protection of Animals (ISPA established in 1959) to
            form the World Society for the Protection of Animals. The World
            Society for the Protection of Animals, including over 350 member
            associations, is an international organization that operates in 76
            countries around the world. Headquartered in London, UK, with
            regional offices in Canada, the United States, Germany, Denmark,
            Colombia, Costa Rica, and Kenya. The World Animal Protection
            Association has representatives in the United Nations and the
            European Parliament, and works together with the World Health
            Organization (WHO) and the European Federation of Friendly Animal
            (Pet) Veterinarians (FECAVA).
          </div>
        </ListGroup.Item>
      </ListGroup>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        <Button variant='primary' onClick={toContact}>
          Contact Us
        </Button>
      </div>
    </div>
  )
}

export default AboutUs
