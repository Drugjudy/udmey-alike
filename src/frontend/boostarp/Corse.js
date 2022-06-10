import Carousel from "react-bootstrap/Carousel"

export default function Slide() {
    return(
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.theconversation.com/files/137514/original/image-20160913-19269-rtw2nj.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202111/lsd.jpg?iZQw4MgmVL9._yzsDPJsGs8H4_.jakAv&size=770:433"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.psypost.org/wp-content/uploads/2022/06/lsd.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}