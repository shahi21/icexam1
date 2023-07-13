import React from 'react';
import { Breadcrumb, Carousel, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <div className="logo">Logo</div>
        <h1>Welcome to our Food Website</h1>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Recipes</Breadcrumb.Item>
          <Breadcrumb.Item active>Featured</Breadcrumb.Item>
        </Breadcrumb>
      </header>

      {/* Content */}
      <section>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="carousel-image1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Delicious Recipes</h3>
              <p>Explore a variety of mouthwatering recipes</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="carousel-image2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Step-by-Step Instructions</h3>
              <p>Learn how to prepare dishes like a pro</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="card-container">
          <Card>
            <Card.Img variant="top" src="card-image1.jpg" />
            <Card.Body>
              <Card.Title>Recipe 1</Card.Title>
              <Card.Text>
                Some description about Recipe 1.
              </Card.Text>
              <a href="#" className="btn btn-primary">Read More</a>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="card-image2.jpg" />
            <Card.Body>
              <Card.Title>Recipe 2</Card.Title>
              <Card.Text>
                Some description about Recipe 2.
              </Card.Text>
              <a href="#" className="btn btn-primary">Read More</a>
            </Card.Body>
          </Card>

          {/* Add more cards as needed */}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2023 Your Food Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
