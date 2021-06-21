import "./Main.css";
import Drone1 from "../img/Drone1.jpg";
import drone5 from "../img/drone5.jpg";
import drone4 from "../img/puente.jpg";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Main() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={Drone1} alt="First slide" />
        <Carousel.Caption>
          <h3 className="carousel-title">First slide label</h3>
          <p className="carousel-text">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={drone4} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={drone5} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Main;
