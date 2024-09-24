const Banner = () => {
  return (
    <>
      {/* Carousel */}
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ marginTop: "10px" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/images/pizza1.jpg"
              className="d-block w-100"
              alt="Pizza"
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>Neapolitan Pizza</h2>
              <p>
                If you are looking for a traditional Italian pizza, the
                Neapolitan is the best option!
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="images/pizza2.jpg"
              className="d-block w-100"
              alt="Pizza"
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/pizza3.jpg"
              className="d-block w-100"
              alt="Pizza"
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/pizza4.jpg"
              className="d-block w-100"
              alt="Pizza"
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/pizza5.jpg"
              className="d-block w-100"
              alt="Pizza"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
export default Banner;
