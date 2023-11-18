import { Badge, ListGroup } from 'react-bootstrap'
import join from '../../assets/join.jpg'

const Jobs = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img
        src={join}
        style={{ width: '100vw', position: 'absolute', top: '0' }}
      />
      <div style={{ position: 'absolute', width: '100%' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '50px',
          }}
        >
          <div style={{ fontSize: '60px', marginRight: '5px', color: '#FFF' }}>
            Join Us
          </div>
          <Badge style={{ fontSize: '16px' }} bg='danger'>
            Hot
          </Badge>
        </div>
        <div style={{ width: '60%', margin: '0 auto', opacity: 0.9 }}>
          <ListGroup>
            <ListGroup.Item variant='light'>
              <div
                style={{ fontSize: '24px', color: 'red', fontWeight: '700' }}
              >
                Basic Membership
              </div>
              <ul>
                <li>Cost per year: Free</li>
                <li>Newsletter</li>
                <li>Discounts at major European conferences/fairs</li>
                <li>
                  Free subscription to European Biotechnology Magazine (hard
                  copy for European Members, PDF outside Europe)
                </li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item variant='light'>
              <div
                style={{ fontSize: '24px', color: 'red', fontWeight: '700' }}
              >
                Advanced Membership
              </div>
              <ul>
                <li>Cost per year: €100 per year (tax deductible)</li>
                <li>
                  Profile in the „European Biotechnology Guide“, printed yearly,
                  with a 50% rebate
                </li>
                <li>
                  Preferred access for corporate news on the EBN page in the
                  European Biotechnology Magazine and online
                </li>
                <li>Job offers at eurobiotechjobs.net with a 50% rebate</li>
                <li>Company logo and abstract hosted on EBN webpage</li>
                <li>Logo on all advertisements</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item variant='light'>
              <div
                style={{ fontSize: '24px', color: 'red', fontWeight: '700' }}
              >
                Membership Categories:
              </div>
              <ul>
                <li>Basic Membership</li>
                <li>Advanced Membership</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item variant='light'>
              <div
                style={{ fontSize: '24px', color: 'red', fontWeight: '700' }}
              >
                Basic Membership
              </div>
              <ul>
                <li>Cost per year: Free</li>
                <li>Newsletter</li>
                <li>Discounts at major European conferences/fairs</li>
                <li>
                  Free subscription to European Biotechnology Magazine (hard
                  copy for European Members, PDF outside Europe){' '}
                </li>
              </ul>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  )
}

export default Jobs
