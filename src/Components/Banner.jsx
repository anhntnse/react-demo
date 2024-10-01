import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <>
      {/* Carousel */}
      <Carousel fade style={{ marginTop: '10px' }}>
        <Carousel.Item>
          <img
            src="/images/pizza1.jpg"
            className="d-block w-100"
            alt="Pizza"
          />
          <Carousel.Caption>
            <h2>Neapolitan Pizza</h2>
            <p>
              If you are looking for a traditional Italian pizza, the Neapolitan is the best option!
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="/images/pizza2.jpg"
            className="d-block w-100"
            alt="Pizza"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="/images/pizza3.jpg"
            className="d-block w-100"
            alt="Pizza"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="/images/pizza4.jpg"
            className="d-block w-100"
            alt="Pizza"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="/images/pizza5.jpg"
            className="d-block w-100"
            alt="Pizza"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
