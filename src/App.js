import React from 'react';
import './App.css'; // Import your CSS file (styleindex.css)
function App() {
  return (
    <div style={{ backgroundColor: '#333333' }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" style={{ color: 'white', textAlign: 'left' }}>Pizza House</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contact</a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search"
                style={{ marginRight: 0, height: '40px', width: '350px' }}
              />
              <button
                className="btn btn-danger"
                type="button"
                style={{ width: '50px', alignItems: 'center', padding: 0, height: '40px' }}
              >
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Carousel */}
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ marginTop: '10px' }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/pizza1.jpg" className="d-block w-100" alt="Pizza" />
            <div className="carousel-caption d-none d-md-block">
              <h2>Neapolitan Pizza</h2>
              <p>If you are looking for a traditional Italian pizza, the Neapolitan is the best option!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/pizza2.jpg" className="d-block w-100" alt="Pizza" />
          </div>
          <div className="carousel-item">
            <img src="images/pizza3.jpg" className="d-block w-100" alt="Pizza" />
          </div>
          <div className="carousel-item">
            <img src="images/pizza4.jpg" className="d-block w-100" alt="Pizza" />
          </div>
          <div className="carousel-item">
            <img src="images/pizza5.jpg" className="d-block w-100" alt="Pizza" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Our Menu */}
      <div className="container">
        <div className="row our-menu-item">
          <h1 className="ourmenu">Our Menu</h1>
          <div className="menu-item spec-item">
            <img src="images/menu1.jpg" alt="Pizza" />
            <div className="spec-tag">SALE</div>
            <div className="item-description">
              <h3>Margherita Pizza</h3>
              <p>
                <del>$40.00</del>{' '}
                <a style={{ color: '#FFA000', fontWeight: 'bold' }}> $24.00 </a>
              </p>
              <button className="buy-button" type="button">Buy</button>
            </div>
          </div>
          <div className="menu-item">
            <img src="images/menu2.jpg" alt="Pizza" />
            <div className="item-description">
              <h3>Mushroom Pizza</h3>
              <p>$25.00</p>
              <button className="buy-button" type="button">Buy</button>
            </div>
          </div>
          <div className="menu-item spec-item">
            <img src="images/menu3.jpg" alt="Pizza" />
            <div className="spec-tag">NEW</div>
            <div className="item-description">
              <h3>Hawaiian Pizza</h3>
              <p>$30.00</p>
              <button className="buy-button" type="button">Buy</button>
            </div>
          </div>
          <div className="menu-item spec-item">
            <img src="images/menu4.jpg" alt="Pizza" />
            <div className="spec-tag">SALE</div>
            <div className="item-description">
              <h3>Pesto Pizza</h3>
              <p>
                <del>$50.00</del>{' '}
                <span style={{ color: '#FFA000', fontWeight: 'bold' }}> $30.00 </span>
              </p>
              <button className="buy-button" type="button">Buy</button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <h1 className="footer-content">Book Your Table</h1>
      <div className="booking-form container">
        <form>
          <div className="form-row row">
            <input type="text" placeholder="Your Name *" required />
            <input type="email" placeholder="Your Email *" required />
            <select required>
              <option value="" disabled selected>Select a Service</option>
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
              <option value="service3">Service 3</option>
            </select>
          </div>
          <textarea
            className="form-row row"
            placeholder="Please write your comment"
            required
          ></textarea>
          <button className="row send-message" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
