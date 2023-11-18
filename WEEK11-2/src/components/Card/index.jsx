import { Card } from 'react-bootstrap'
import Image1 from '../../assets/elephant-1.jpeg'
import Image2 from '../../assets/elephant-2.jpeg'
import Image3 from '../../assets/elephant-3.jpeg'

const CustomCard = (props) => {
  const { title, content, id } = props

  const image = () => {
    let src
    switch (id) {
      case 1:
        src = Image1
        break

      case 2:
        src = Image2
        break

      case 3:
        src = Image3
        break
      default:
        break
    }
    return src
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={image()} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CustomCard
